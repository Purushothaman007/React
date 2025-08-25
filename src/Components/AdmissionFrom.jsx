import React from 'react'

function AdmissionFrom() {


  function display(e){
    e.preventDefault();
    var roomnum=Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    document.getElementById("thank").textContent = "Thank you for submitting the form!"+"Allocated Room Number: "+roomnum;
  }
  return (
    <div>
      <form onSubmit={display} className='form-container'>
        <label>Hostel Admission Form</label><br />
        <label>Name:</label>
        <input type="text" name="name" required /><br />
        <label>Age:</label>
        <input type="number" name="age" required /><br />
        
        <label>Phone number:</label>
        <input type="tel" name="phone" required pattern="[0-9]{10}" /><br />
        <label>Room type:</label>
        <select name="roomType" required>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="triple">Triple</option>
        </select><br />
        <button type="submit">Submit</button><br/>
        <label id="thank"></label>
      </form>
    </div>
  )
}

export default AdmissionFrom
