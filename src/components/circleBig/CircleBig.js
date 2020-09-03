import React, {useState} from 'react'
import './circleBig.css'


function Circle() {

  const [color,setColor]= useState('#8a2be2');

  const changeColor = (e)=> {
    e.preventDefault()
    const checkColor = color === '#8a2be2'? '#2be29c':'#8a2be2'
    setColor(checkColor) 
  }

    return (
      <div className="circle" style ={{backgroundColor: color}} onClick={changeColor}>
      </div>
    );
  }
  
  export default Circle;