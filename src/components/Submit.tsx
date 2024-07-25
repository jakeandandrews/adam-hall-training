import { useContext } from "react";
import { questionContext } from "../App";
export default function Submit() {
  const { answers } = useContext(questionContext);
  const handleClick = () => {
    console.log(answers);
  };
  return (
    <div>
      <button id="btn" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}
