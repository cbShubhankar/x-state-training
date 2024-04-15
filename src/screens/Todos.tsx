import { useMachine } from "@xstate/react";
import { todoMachine } from "../xState/myFirstMachine";

function Todos() {
  const [state, send] = useMachine(todoMachine);
  const handleAddTodo = (text: string) => {
    send({ type: "ADD", text });
  };

  const handleToggleTodo = (id: number) => {
    send({ type: "TOGGLE", id });
  };

  const handleRemoveTodo = (id: number) => {
    send({ type: "REMOVE", id });
  };

  // add routes in this file?
  return (
    <div className="app">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2>Add Todo</h2>
          <button
            className="bg-red-600 px-2 py-1 rounded-lg hover:text-white"
            onClick={() => window.open(process.env.REACT_APP_REDIRECT_URL)}
          >
            Redirect
          </button>
        </div>
        <input
          type="text"
          placeholder="Add todo..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.target as HTMLInputElement).value) {
              handleAddTodo((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = "";
            }
          }}
        />
        <h2>Todos List</h2>
        {state.context.todos.length > 0 ? (
          <ul>
            {state.context.todos.map((todo) => (
              <li key={todo.id}>
                <div className="todo-item">
                  <div
                    onClick={() => handleToggleTodo(todo.id)}
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      cursor: "pointer",
                    }}
                  >
                    {todo.text}
                  </div>
                  {todo.completed && (
                    <button onClick={() => handleRemoveTodo(todo.id)}>
                      Remove
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Yay! No todos! Enjoy your free time!</p>
        )}
      </div>
    </div>
  );
}

export default Todos;
