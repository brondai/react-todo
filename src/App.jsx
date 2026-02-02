import { useState } from "react";
import TodoLists from "./components/TodoLists";
import AddTodo from "./components/AddTodo";

const initialTodoLists = ["Study", "Exercise", "Grocery Shopping"];

function App() {
  const [todoLists, setTodoLists] = useState(initialTodoLists);

  return (
    <>
      <AddTodo todoLists={todoLists} setTodoLists={setTodoLists} />

      <TodoLists todoLists={todoLists} setTodoLists={setTodoLists} />
    </>
  );
}

export default App;
