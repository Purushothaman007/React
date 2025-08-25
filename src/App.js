import Greet from './Components/Greet';
import Let from './Components/Let'
import Mybutton from './Components/Mybutton';
import Harish from './Components/Harish';
import Shopping from './Components/Shopping';
import Counter from './Components/Counter';
import Clock from './Components/Clock';
import Profile from './Components/Profile'
import Form from './Components/Form'
import Feedback from './Components/Feedback';
import LIfecycle from './Components/LifecycleDemo'
import AdmissionFrom from './Components/AdmissionFrom';
import React from 'react';
import NotesApp from './Components/NotesApp';
import './App.css';
import LifecycleDemo from './Components/LifecycleDemo';


function App() {

  // function Mybutton(){
  //   return(
  //     <button onClick={display}>I am a button (don't press✌️)</button>
  //   )
  // }
  // function display(){
  //   alert(
  //     "You pressed the button! 😠"
  //   )
  //   document.getElementById("root").style.backgroundColor = "lightblue";
  //   document.getElementById("name").innerHTML = "I told you not to press me 😡";
  // }
  return (
    <>
     
      <center>
       {/* <h1 id="name">hiiiiiiiiii 🙂!!!</h1>
      <Mybutton/>
      <Harish/> 
       <Greet/>
      <Profile/>
      <Clock/>
      <Shopping/> 
      <Counter/>
      <Form/>*/}
      {/* <Feedback/> 
      <AdmissionFrom/>
      <Form/> */}
      
      <NotesApp/>
      {/* <LifecycleDemo/> */}
      </center>
    </>
  );
}

export default App;
