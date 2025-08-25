import React , { useState}from 'react'

function Feedback() {
  const [name,setName] =useState('');
  const [feedback,setfeedback]=useState('');

  function display(e)
  {
    e.preventDefault();
    document.getElementById("thank").textContent=` Thank you ${name}!!!`
  }

  return (
    <div>
       <form onSubmit={display}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>
        
        <label>Feedback:</label>
        <input type="text" value={feedback} onChange={(e)=>{setfeedback(e.target.value)}}/><br></br>

        <button type="submit">Submit</button>
        </form>    

        <label id="thank"></label>
    </div>
  )
}

export default Feedback
