function Heading({ numquestion, dispatch }) {
  return (
    <div className="heading">
      <h1>Play Quiz ▶</h1>

      <div className="span-h">
        <h2> Welcome to Quiz Game !!😐</h2>
        <h3>
          <span className="span-q">{numquestion}</span> questions Are Ready for
          You🌱
        </h3>
        <button onClick={() => dispatch({ type: "start" })}>Let's Play!</button>
      </div>
    </div>
  );
}
export default Heading;
