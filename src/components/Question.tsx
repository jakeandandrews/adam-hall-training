import React from "react";

import { useContext } from "react";
import { questionContext } from "../App";

const Question = ({ QuestionLabel }: { QuestionLabel: string }) => {
  const { answers, setAnswers } = useContext(questionContext);
  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const newAnswer = {
      question: QuestionLabel,
      answer: event?.target.value,
    };
    setAnswers([...answers, newAnswer]);
  };
  return (
    <div className="question">
      <label>{QuestionLabel}</label>
      <select onChange={onChange}>
        <option value="">Select</option>
        <option value="yes">Yes</option> <option value="no">No</option>
      </select>
    </div>
  );
};
export default Question;
