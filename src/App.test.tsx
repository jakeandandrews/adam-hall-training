import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import QuestionLabels from "./components/QuestionLabels";
import { QandA } from "./types";
import Question from "./components/Question";

test("Questions with question labels array", () => {
  const questionLabels: QandA[] = [
    { question: "Have you read and understood the travel advisory?" },

    {
      question:
        "Have you downloaded the International SOS application on your smart phone?",
    },
    { question: "Do you plan on travelling outside of your port of arrival?" },
  ];
  render(<QuestionLabels questionLabels={questionLabels} />);
  const questionElement = screen.getAllByRole("combobox");
  expect(questionElement.length).toBe(3);
});

test("Questions without question labels array", () => {
  const questionLabels: QandA[] = [];
  render(<QuestionLabels questionLabels={questionLabels} />);
  const alertElement = screen.getAllByRole("alert");
  expect(alertElement.length).toBe(1);
});

// test("Question answered", () => {
//   render(<Question QuestionLabel={"are you alright?"} />);
//   const questionElement = screen.getByRole("combobox");
//   fireEvent.change(questionElement, { target: { value: "yes" } });
//   expect(onRun).toHaveBeenCalledWith("yes");
// });
