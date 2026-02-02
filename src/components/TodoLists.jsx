const TodoLists = ({ todoLists, setTodoLists }) => {
  return (
    <>
      {todoLists.map((todo, index) => (
        <div key={index} className="border p-2 m-2">
          <p>{todo}</p>
          <p>Description: </p>
          <button
            className="ml-4 text-red-500"
            onClick={() => {
              const newTodoLists = todoLists.filter(
                (item, idx) => idx !== index
              );
              setTodoLists(newTodoLists);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoLists;
