import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up the interval
    const intervalId = setInterval(() => {
      // Use the functional update form of setCount to get the latest value
      setCount((prevCount) => prevCount + 1);
    }, 1000); // 1000 milliseconds = 1 second

    // Cleanup function: runs when the component unmounts or the effect re-runs
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <h1 className="text-2xl font-bold ml-4">Name: {name}</h1>

      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
