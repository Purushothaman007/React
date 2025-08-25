import React, { useState } from 'react'

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function increment1() {
    setCount1(count1 + 1);
  }

  function increment2() {
    setCount2(count2 + 1);
  }

  return (
    <div>
      <h1>Counter 1: {count1}</h1>
      <h1>Counter 2: {count2}</h1>
      <button onClick={increment2} onDoubleClick={alert("meow 🐈")}>Increment 1</button>
      <button onClick={increment1}>Increment 2</button>
      <button onMouseEnter={console.log("Mouse entered")} onMouseLeave={console.log("Mouse left")}>Hover me</button>
      
    </div>
  )
}

export default Counter;