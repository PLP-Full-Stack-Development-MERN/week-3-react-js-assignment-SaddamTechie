import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Counter</h2>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
      >
        Increment
      </button>
    </div>
  );
};
export default Counter;