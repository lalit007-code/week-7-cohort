import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { todoFamily } from "./store";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todoFamily(id));
  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}

export default App;
