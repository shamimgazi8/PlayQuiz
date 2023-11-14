function FinishedScren({ points, totalpoints, dispactch }) {
  const parcent = (points / totalpoints) * 100;
  return (
    <>
      <h1 className="logo">Play Quiz ▶</h1>
      <div className="end">
        <p>
          <strong>
            {" "}
            💥Your Scored {points} Out of {totalpoints} ({Math.ceil(parcent)}
            %)💥 <br></br>
          </strong>
          🎉 Wow, what an achievement! Congratulations to Finished the Quiz 👌
        </p>
      </div>
      <div className=" btn-restart">
        <button
          className="restart"
          onClick={() => dispactch({ type: "restart" })}
        >
          Restart Quiz!
        </button>
      </div>
    </>
  );
}
export default FinishedScren;
