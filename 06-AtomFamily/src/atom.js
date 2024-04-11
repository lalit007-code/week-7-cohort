import { atomFamily } from "recoil";

const TODOS = [
  {
    id: 1,
    title: "go to gym",
    description: "hit the gym",
  },
  {
    id: 2,
    title: "go to bed",
    description: "good night",
  },
];

//dynmically create mulitple atom
export const todoAtomFamily = atomFamily({
  key: "atomFamily",
  default: (id) => {
    return TODOS.find((x) => x.id === id);
  },
});
