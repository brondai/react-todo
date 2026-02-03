import { useEffect, useState } from "react";
import TodoLists from "./components/TodoLists";
import AddTodo from "./components/AddTodo";

// const initialTodoLists = [
//   { title: "Study", description: "Read React docs", completed: false },
//   { title: "Exercise", description: "Go for a run", completed: false },
//   {
//     title: "Grocery Shopping",
//     description: "Buy vegetables",
//     completed: false,
//   },
// ];

function App() {
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodoLists(data));
  }, []);

  return (
    <>
      <AddTodo todoLists={todoLists} setTodoLists={setTodoLists} />
      <TodoLists todoLists={todoLists} setTodoLists={setTodoLists} />
    </>
  );
}

export default App;
