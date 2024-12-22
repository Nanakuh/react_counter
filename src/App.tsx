import React, { useState, useEffect } from "react";
import Button from "./components/button/button";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [error, setError] = useState("");

  useEffect(() => {
    if (count < min) {
      setError("The count is below the minimum value!");
    } else if (count > max) {
      setError("The count exceeds the maximum value!");
    } else {
      setError("");
    }
  }, [count, min, max]);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setMin(isNaN(value) || value < 0 ? 0 : value);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setMax(isNaN(value) ? 10 : value);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='p-6 bg-white rounded-lg shadow-lg w-full max-w-sm text-center'>
        <h1 className='text-4xl font-semibold text-gray-800 mb-6'>
          Counter: {count}
        </h1>
        {error && <div className='text-red-500 font-medium mb-4'>{error}</div>}
        <div className='flex justify-center gap-4 mb-4'>
          <Button label='Increment' onClick={increment} />
          <Button label='Decrement' onClick={decrement} />
          <Button label='Reset' onClick={reset} disabled={count === 0} />
        </div>
        <div className='flex justify-between items-center space-x-4'>
          <div className='flex flex-col items-start w-1/2'>
            <label htmlFor='min' className='text-gray-700 font-medium'>
              Minimum:
            </label>
            <input
              id='min'
              type='number'
              value={min}
              onChange={handleMinChange}
              className='w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <div className='flex flex-col items-start w-1/2'>
            <label htmlFor='max' className='text-gray-700 font-medium'>
              Maximum:
            </label>
            <input
              id='max'
              type='number'
              value={max}
              onChange={handleMaxChange}
              className='w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
