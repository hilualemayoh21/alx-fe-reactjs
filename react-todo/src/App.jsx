import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./components/TodoList"; // Import TodoList
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <div>
        <TodoList /> {/* Render the TodoList */}
      </div>
    </>
  );
}

export default App;
