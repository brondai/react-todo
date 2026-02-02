import { useState } from "react";

const AddTodo = ({ setTodoLists, todoLists }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg gap-3">
      <h2 className="text-xl font-bold text-blue-700 mb-2">Add a New Todo</h2>
      <input
        type="text"
        className="border border-blue-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="Todo title (required)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition disabled:bg-blue-200 disabled:cursor-not-allowed"
        disabled={!title.trim()}
        onClick={() => {
          if (!title.trim()) return;
          setTodoLists([
            ...todoLists,
            { title, description, completed: false },
          ]);
          setTitle("");
          setDescription("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
