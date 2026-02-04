import { useEffect, useState } from "react";
import TodoLists from "./components/TodoLists";
import AddTodo from "./components/AddTodo";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    // async await
    const getTodos = async () => {
      setIsLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();

      setTodoLists(data);

      setIsLoading(false);
    };

    getTodos();

    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => {
    //     console.log(response);

    //     return response.json();
    //   })
    //   .then((data) => setTodoLists(data));
  }, []);

  return (
    <>
      {isLoading && <h1 className="text-2xl text-center">Loading</h1>}
      <AddTodo todoLists={todoLists} setTodoLists={setTodoLists} />
      <TodoLists todoLists={todoLists} setTodoLists={setTodoLists} />
    </>
  );
}

export default App;
