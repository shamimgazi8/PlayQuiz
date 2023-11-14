import { useEffect } from "react";
function Timer({ remainnigTime, dispatch }) {
  const min = Math.floor(remainnigTime / 60);
  const sec = remainnigTime % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "countdown" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}
export default Timer;
