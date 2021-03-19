import React from 'react';
import InnerSVG from '../InnerSVG/InnerSVG';
import Packer from '../../packer';


export default class Location extends React.Component {
  state = { 
    width: document.documentElement.clientWidth, 
    height: document.documentElement.clientHeight,
    planetRenderFull: []
  };

  setPlanetSize(planets, areaPerResident) {
    return planets.map(planet => {
      let itemSize;
      planet.residents.length > 5
        ? itemSize = Math.floor(Math.sqrt(planet.residents.length * areaPerResident))
        : itemSize = planet.residents.length + 20; 

      return (
        {
          id: planet.id,
          residents: planet.residents.length,
          w: itemSize,
          h: itemSize,
        }
      )
    })
  }
  
  componentDidMount() {    
    window.addEventListener('resize', this.updateDimensions);

    const planets = this.props.planetsList.sort((a, b) => b.residents.length - a.residents.length); //сортируем планеты от макс к мин по количеству жителей
    const allResidents = planets.map(planet => planet.residents.length).reduce((total, item) => total + item);
    const areaPerResident = Math.floor( (this.state.width * this.state.height) / allResidents / 1.5);
    
    const planetRender = this.setPlanetSize(planets, areaPerResident);    

    const packer = new Packer(this.state.width, this.state.height);
    packer.fit(planetRender, areaPerResident);

    this.setState({
      planetRenderFull: planetRender.map(planet => ({
        ...planet,
        x: planet.fit ? planet.fit.x : 0,
        y: planet.fit ? planet.fit.y : 0,
      }))
    });
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {    
    this.setState({ 
      width: document.documentElement.clientWidth, 
      height: document.documentElement.clientHeight,
      rate: (document.documentElement.clientWidth * document.documentElement.clientHeight) / this.numOfPlanets
    });

  };

  render() {
    return (
      <svg width={this.state.width} height={this.state.height}>
        {this.state.planetRenderFull.length > 0 && this.state.planetRenderFull.map(planet => 
          <InnerSVG
            showPlanetInfo={this.props.showPlanetInfo}
            hidePlanetInfo={this.props.hidePlanetInfo}
            planetsList={this.props.planetsList}
            key={planet.id}
            id={planet.id}
            residents={planet.residents}
            width={planet.w} 
            height={planet.h}
            x={planet.x}
            y={planet.y}
          />
        )}
      </svg>
    )
  }
}
