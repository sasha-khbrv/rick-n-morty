import React from 'react';

const InnerSVG = (props) => {
  
  return (
    <svg    
      width={props.width}
      height={props.height}
      x={props.x}
      y={props.y}        
    >
      <rect 
        id={props.id} 
        onMouseEnter={props.showPlanetInfo}
        onMouseLeave={props.hidePlanetInfo}  
        width="100%" 
        height="100%" 
        fill="white" 
        stroke="grey" 
      />
      <text x="5" y="15" width="30px" height="10px" className="svgText">{props.residents}</text>

    </svg>
  )
}

export default InnerSVG;