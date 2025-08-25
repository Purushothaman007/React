import React, { useState } from 'react'
import '../App.css'

function Greet() {
  const [name, setName] = useState('')
  const [animate, setAnimate] = useState(false)

  const handleInputChange = (e) => {
    setName(e.target.value)
    setAnimate(true)
  }

  const handleAnimationEnd = () => {
    setAnimate(false)
  }

  return (
    <div id="greet">
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      <h1
        className={animate ? 'greet-animate' : ''}
        onAnimationEnd={handleAnimationEnd}
      >
        Hello, {name}
      </h1>
    </div>
  )
}

export default Greet