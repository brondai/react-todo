import { useState } from "react";

const AddTodo = ({ setTodoLists, todoLists }) => {
  const [todo, setTodo] = useState("");

  return (
    <>
      <input
        type="text"
        className="border p-2 m-4"
        placeholder="Add new todo"
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        onClick={() => {
          setTodoLists([...todoLists, todo]);
          setTodo("");
        }}
      >
        Add Todo
      </button>
    </>
  );
};

export default AddTodo;
