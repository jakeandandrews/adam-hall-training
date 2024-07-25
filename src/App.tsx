import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import QuestionLabels from "./components/QuestionLabels";
import Submit from "./components/Submit";
import { QandA } from "./types";

interface Answer {
  question: string;
  answer: string;
}
interface QuestionsContextValue {
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
}

export const questionContext = createContext<QuestionsContextValue>({
  answers: [],
  setAnswers: () => {},
});

function App() {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const questionLabels: Array<QandA> = [
    { question: "Have you read and understood the travel advisory?" },

    {
      question:
        "Have you downloaded the International SOS application on your smart phone?",
    },
    { question: "Do you plan on travelling outside of your port of arrival?" },
  ];
  return (
    <questionContext.Provider value={{ answers, setAnswers }}>
      <div className="App">
        <header className="App-header">
          <Header HeaderText="Questions" />
          <QuestionLabels questionLabels={questionLabels} />
          <Submit />
        </header>
      </div>
    </questionContext.Provider>
  );
}

export default App;
