import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import "./App.css";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  );
}
function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b> {count} </b>

      <EventCountRenderer />
    </div>
  );
}

function EventCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "it is even" : null}</div>;
}
function Button() {
  const [count, setCount] = useRecoilState(countAtom);
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
