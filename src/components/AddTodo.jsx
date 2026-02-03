import { useState } from "react";

const AddTodo = ({ setTodoLists, todoLists }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "hello",
    completed: false,
  });

  return (
    <form onSubmit={() => {}}>
      <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg gap-3">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Add a New Todo</h2>
        <input
          type="text"
          className="border border-blue-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="Todo title (required)"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Description (optional)"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition disabled:bg-blue-200 disabled:cursor-not-allowed"
          onClick={() => {
            setTodoLists([
              ...todoLists,
              {
                title: todo.title,
                description: todo.description,
                completed: false,
              },
            ]);
            setTodo({ title: "", description: "", completed: false });
          }}
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
