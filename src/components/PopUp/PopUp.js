import React from 'react';
import styled from 'styled-components';

const PopUpContainer = styled.div`
box-sizing: border-box;
width: 380px;
height: 200px;
position: absolute;
background-color: #FFFFFF;
border-radius: 5px;
padding: 20px 40px 40px;
box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
z-index: 99;
pointer-events: none;
`;

const PopUp = ({state: {planetsList, planetId, pageX, pageY}}) => {
 
  const planet = planetsList.filter(planet => planet.id === +planetId)

  const pageW = document.documentElement.clientWidth;
  const pageH = document.documentElement.clientHeight;
  let horPosition, vertPosition;

  if (pageW - (pageX + 400) > 0) {
    horPosition = pageX + 20;
  } else {
    horPosition = pageX - 400;
  }

  if (pageH - (pageY + 220) > 0) {
    vertPosition = pageY + 20;
  } else {
    vertPosition = pageY - 220;
  }

  const popupPosition = {
    top: vertPosition,
    left: horPosition,
  }  

  return (
      <PopUpContainer style={popupPosition}>
        <h2>{planet[0].name}</h2>
        <p><b>Type:</b> {planet[0].type}</p>
        <p><b>Dimension:</b> {planet[0].dimension}</p>
        <p><b>Residents:</b> {planet[0].residents.length}</p>
      </PopUpContainer>      
  )

}

export default PopUp;