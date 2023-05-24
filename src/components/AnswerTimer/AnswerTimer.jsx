import "./AnswerTimer.scss";
import { useEffect, useState, useRef } from "react";

const AnswerTimer = ({ duration }) => {
  const [counter, setCounter] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProgressLoaded(100 * (counter / duration));

    if (counter === duration) {
      clearInterval(intervalRef.current);
    }
  }, [counter]);

  return (
    <div className="answer-timer-container">
      <div className="progress"></div>
    </div>
  );
};

export default AnswerTimer;
