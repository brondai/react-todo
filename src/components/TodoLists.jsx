const TodoLists = ({ todoLists, setTodoLists }) => {
  return (
    <div className="max-w-md mx-auto mt-8">
      {todoLists.length === 0 ? (
        <p className="text-center text-gray-500">
          No todos yet. Add one above!
        </p>
      ) : (
        todoLists.map((todo, index) => (
          <div key={index} className="border rounded-lg p-4 m-2 gap-2 bg-white">
            <p className="font-bold text-lg text-blue-700">{todo.title}</p>
            <p className="text-gray-700">
              Description:{" "}
              <span className="italic">
                {todo.description || "No description"}
              </span>
            </p>
            <p>
              Status:{" "}
              <span
                className={
                  todo.completed
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {todo.completed ? "Completed" : "Incomplete"}
              </span>
            </p>
            <div className="flex gap-2 mt-2">
              <button
                className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                onClick={() => {
                  const newTodoLists = todoLists.filter(
                    (item, idx) => idx !== index
                  );
                  setTodoLists(newTodoLists);
                }}
              >
                Delete
              </button>
              <button
                className={`px-3 py-1 rounded ${
                  todo.completed
                    ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
                onClick={() => {
                  const newTodoLists = todoLists.map((item, idx) =>
                    idx === index
                      ? { ...item, completed: !item.completed }
                      : item
                  );
                  setTodoLists(newTodoLists);
                }}
              >
                {todo.completed ? "Mark Incomplete" : "Mark Completed"}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoLists;
