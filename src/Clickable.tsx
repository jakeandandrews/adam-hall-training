import { useState } from "react";

export default function Clickable({ buttonText }: ClickableProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((a) => a + 1);
  };
  return (
    <div>
      <button id="btn" onClick={handleClick}>
        {count}
      </button>
      {count > 5 && <p> this has been clicked more than 5 times </p>}
    </div>
  );
}

type ClickableProps = {
  buttonText: "Go" | "Hit";
};
