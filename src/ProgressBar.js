import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function ProgressBarmain({
  numquestion,
  index,
  points,
  totalpoints,
  newanswer,
}) {
  return (
    <header>
      <div className="bar">
        <ProgressBar
          className="pbar"
          height="30px"
          maxCompleted={numquestion}
          completed={index + Number(newanswer !== null)}
          customLabel={
            index + Number(newanswer !== null) === 15
              ? "Completed"
              : "Progressing"
          }
          bgColor="#000000"
        />
      </div>

      <div className="progress-t">
        <p>
          Questions :<strong>{index + 1}</strong>/<strong>{numquestion}</strong>
        </p>
        <p>
          Points :
          <strong>
            {points}/{totalpoints}
          </strong>
        </p>
      </div>
    </header>
  );
}
export default ProgressBarmain;
