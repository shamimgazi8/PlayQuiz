import { useEffect, useReducer } from "react";
import Heading from "./Heading";
import Error from "./Error";
import Question from "./Question";
import Nextbutton from "./Nextbutton";
import ProgressBarmain from "./ProgressBar";
import FinishedScren from "./FinishedScren";
import Timer from "./Timer";
const SEC_PER_QS = 10;
const initstate = {
  questions: [],
  status: "Processing",
  index: 0,
  newanswer: null,
  points: 0,
  remainnigTime: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "reciveData":
      return { ...state, status: "ready", questions: action.payload };
    case "error":
      return { status: "Error" };
    case "start":
      return {
        ...state,
        status: "active",
        remainnigTime: state.questions.length * SEC_PER_QS,
      };
    case "newanswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        newanswer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextquestion":
      return {
        ...state,
        index: state.index + 1,
        newanswer: null,
      };
    case "end":
      return {
        ...state,
        status: "end",
      };
    case "restart":
      return {
        ...state,
        status: "ready",
        index: 0,
        newanswer: null,
        points: 0,
      };
    case "countdown":
      return {
        ...state,
        remainnigTime: state.remainnigTime - 1,
        status: state.remainnigTime === 0 ? "end" : state.status,
      };

    default:
      throw new Error("unknown action");
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initstate);
  let numquestion;
  if (state.questions) {
    numquestion = state.questions.length;
  }
  const totalpoints = state.questions.reduce((pre, crr) => pre + crr.points, 0);
  useEffect(function () {
    fetch("https://json.extendsclass.com/bin/170e25009d57")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "reciveData", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);
  return (
    <div>
      {state.status === "ready" && (
        <Heading numquestion={numquestion} dispatch={dispatch} />
      )}
      {state.status === "Error" && <Error />}
      {state.status === "active" && (
        <>
          <h1 className="logo">Play Quiz ▶</h1>
          <Timer remainnigTime={state.remainnigTime} dispatch={dispatch} />
          <ProgressBarmain
            numquestion={numquestion}
            index={state.index}
            points={state.points}
            totalpoints={totalpoints}
            newanswer={state.newanswer}
          />
          <Question
            questions={state.questions[state.index]}
            dispatch={dispatch}
            answer={state.newanswer}
          />

          {state.newanswer == null ? (
            ""
          ) : (
            <Nextbutton
              dispatch={dispatch}
              index={state.index}
              numquestion={numquestion}
            />
          )}
        </>
      )}
      {state.status === "end" && (
        <FinishedScren
          points={state.points}
          totalpoints={totalpoints}
          dispactch={dispatch}
        />
      )}
    </div>
  );
}
