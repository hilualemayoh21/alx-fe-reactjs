import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Current Count: {count} </p>
      <button
        style={{ marginRight: "1.5em" }}
        onClick={() => setCount(count + 1)}
      >
        {" "}
        Increment{" "}
      </button>
      <button
        style={{ marginRight: "1.5em" }}
        onClick={() => setCount(count - 1)}
      >
        {" "}
        Decrement{" "}
      </button>
      <button onClick={() => setCount(0)}> Reset </button>
    </div>
  );
}
