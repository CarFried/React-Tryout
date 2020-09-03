import React from 'react'
import colors from './circleColor'
import CircleSmall from '../circleSmall/CircleSmall'

function CircleList() {
    return (
      <div className="circleList">
          
            {colors.map(color => (
              <ul style={{paddingLeft: 0}}>
                <CircleSmall color={color}/>
              </ul>
            ))}
    
    
      </div>
    );
  }
  
  export default CircleList;