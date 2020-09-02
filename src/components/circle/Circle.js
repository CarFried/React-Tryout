import React, {useState} from 'react'
import './circle.css'


function Circle() {

  const [color,setColor]= useState('#8a2be2');

  const changeColor = (e)=> {
    e.preventDefault()
    setColor('#2be29c') 
  }

    return (
      <div className="circle" style ={{backgroundColor: color}} onClick={changeColor}>
      </div>
    );
  }
  
  export default Circle;