import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="count">Count: {count}</p>
      <button data-testid="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
