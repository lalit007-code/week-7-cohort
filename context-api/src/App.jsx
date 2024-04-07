import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount}></Count>
      </CountContext.Provider>
    </div>
  );
}
function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}
function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        increae
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        decrese
      </button>
    </div>
  );
}

export default App;
