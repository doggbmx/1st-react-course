import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0); // THIS IS A HOOK

  useEffect(() => {
    console.log("useEffect called");
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
