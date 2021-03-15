import React from 'react';

const Location = ({planetsList}) => {

  return (
    <ul>
      { planetsList.map(planet => <li key={planet.id}>{planet.name} - {planet.residents.length}</li>)}
    </ul>
  )

}

export default Location;