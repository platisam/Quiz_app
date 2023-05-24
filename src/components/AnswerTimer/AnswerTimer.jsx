import "./AnswerTimer.scss";
import { useEffect, useState } from "react";

const AnswerTimer = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);
  }, []);
  return (
    <div className="answer-timer-container">
      <div className="progress"></div>
    </div>
  );
};
export default AnswerTimer;
