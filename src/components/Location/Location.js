import React from 'react';
import axios from 'axios';

export default class Location extends React.Component {
  state = {
    planets: []
  }

  componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/location`)
      .then(res => {
        const planets = res.data.results
        this.setState({ planets });
      })
  }

  render() {
    return (
      <ul>
        { this.state.planets.map(planet => <li>{planet.name} - {planet.residents.length}</li>)}
      </ul>
    )
  }
}