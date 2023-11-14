function Nextbutton({ dispatch, index, numquestion }) {
  return index === numquestion - 1 ? (
    <div className="nextquestion">
      <button
        className="btnnext"
        style={{ color: "red" }}
        onClick={() => dispatch({ type: "end" })}
      >
        Finished
      </button>
    </div>
  ) : (
    <div className="nextquestion">
      <button
        className="btnnext"
        onClick={() => dispatch({ type: "nextquestion" })}
      >
        Next
      </button>
    </div>
  );
}
export default Nextbutton;
