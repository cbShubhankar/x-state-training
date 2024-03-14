export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoContext = {
  todos: Todo[];
};

export type TodoEvent =
  | { type: "ADD"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };
