import React from 'react'

function Let() {
  let name = "chris";
  const secondname="hemsworth";

  function changeName() {
    name = "thor";
  }
  return (
    <div>
      <h1>{name}</h1>
      <h1>{secondname}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default Let
