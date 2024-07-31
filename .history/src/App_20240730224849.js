import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(parseInt(localStorage.getItem('clickCount')) || 0);

  useEffect(() => {
    localStorage.setItem('clickCount', [count]);
  })

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-green-300 to-slate-200 h-screen relative'>
      <h1 className='text-5xl'>Chasing The Clicks - Stavan Patel</h1>
      <h3 className='text-2xl'>Sr Associate Software Development Engineer</h3>
      <h2 className='text-2xl py-5'>Number of Clicks: {count}</h2>
      <button className='border-2 border-black rounded h-10 w-max p-2 bg-gradient-to-tr from-green-600 to-green-500 text-black' onClick={handleClick}>Click Me</button>
      <h3 className='absolute bottom-1 left-auto'>&#169; SESL1 2023 - Stavan Patel</h3>
    </div>
  );
}

export default App;