import Question from "./Question";
import { QandA } from "../types";

function QuestionLabels({ questionLabels }: { questionLabels: QandA[] }) {
  return (
    <>
      {questionLabels.length ? (
        questionLabels.map((questionLabel, index) => (
          <Question QuestionLabel={questionLabel.question} key={index} />
        ))
      ) : (
        <h1 role="alert">No further questions</h1>
      )}
    </>
  );
}

export default QuestionLabels;
