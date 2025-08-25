import React ,{useState} from 'react'

function Form() {
  const [email,setEmail]=useState('');

  function validate(e)
  {
    e.preventDefault();
    if(email.includes('@'))
    {
      alert("Accepted")
    }
    else
    {
      alert("Rejected")
    }
  }
  return (
    <div>
      <form onSubmit={validate}>
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button type="submit">Submit</button>
       </form> 
    </div>
  )
}

export default Form
