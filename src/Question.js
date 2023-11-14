function Question({ questions, dispatch, answer }) {
  return (
    <div className="question">
      <h1>{questions.question}</h1>
      <div className="options">
        {questions.options.map((option, index) => (
          <button
            className={`btn ${index === answer ? "answer" : ""} ${
              answer == null
                ? ""
                : index === questions.correctOption
                ? "correct"
                : "wrong"
            }`}
            key={option}
            disabled={answer !== null}
            onClick={() => dispatch({ type: "newanswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Question;
