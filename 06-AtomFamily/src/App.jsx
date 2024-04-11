import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currenTodo = useRecoilValue(todoAtomFamily(id));
  return (
    <>
      {currenTodo.title}
      {currenTodo.description}
      <br/>
    </>
  );
}

export default App;
