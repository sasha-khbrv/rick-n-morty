import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUpContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 30px 60px 60px;
  box-shadow: 0px 60px 120px rgba(0, 0, 0, 0.3);
`;

const PopUp = ({planetsList}) => {

    return (
      <Wrapper>
        <PopUpContainer>
          <h2>{planetsList[0].name}</h2>
          <p><b>Type:</b> {planetsList[0].type}</p>
          <p><b>Dimension:</b> {planetsList[0].dimension}</p>
          <p><b>Residents:</b> {planetsList[0].residents.length}</p>
        </PopUpContainer>      
      </Wrapper>
    )

}

export default PopUp;