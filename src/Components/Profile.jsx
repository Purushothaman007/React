import React from 'react'
import img from './myimg.jpg'

function Profile() {
  return (
    <div style={{backgroundColor:'lightblue'}}>
      <h1>About Me</h1>
      <img src={img}  style={{borderRadius:'50px',widht:'200px',height:'200px'}}alt="my-image"/>
      <p>Hi, I'm Purushothaman B</p>  
      <p>I'm a student at Coimbatore Institute of Technology, pursuing a B.Tech in Computer Science and Engineering.</p>
      <p>I'm a passionate coder and a quick learner who loves to explore new technologies and work on innovative projects.</p>
       </div>
  )
}

export default Profile
