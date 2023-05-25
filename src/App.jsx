import Quiz from "./components/Quiz/Quiz";
import { jsQuizz } from "./constants";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch(
        "https://644982a3e7eb3378ca4ba471.mockapi.io/questions"
      );
      const questionsRespons = await response.json();
      console.log(questionsRespons);
    } catch (error) {
      console.log(error);
    }
  };

  return <Quiz questions={jsQuizz.questions} />;
}

export default App;
