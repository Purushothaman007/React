import React from 'react';

function Greet1({ name }) {
  return <h1>Hello, {name || 'Guest'}!</h1>;
}

export default Greet1;
