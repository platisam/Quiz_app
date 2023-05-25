import "./Result.scss";

const Result = ({ totalQuestions, result, onTryAgain }) => {
  return (
    <div className="result">
      <h3>Result</h3>
      <p>
        Total Questions: <span>{questions.length}</span>
      </p>
      <p>
        Total Score: <span>{result.score}</span>
      </p>
      <p>
        Correct Answers: <span>{result.correctAnswers}</span>
      </p>
      <p>
        Wrong Answers: <span>{result.wrongAnswers}</span>
      </p>
      <button onClick={onTryAgain}>Try Again</button>
    </div>
  );
};
export default Result;
