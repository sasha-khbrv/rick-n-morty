import React from 'react';
import InnerSVG from '../InnerSVG/InnerSVG';

const Packer = function(w, h) { 
  this.init(w, h);
};

Packer.prototype = {

  init: function(w, h) {
    this.root = { x: 0, y: 0, w: w, h: h };
  },

  //считаем размеры блоков

  fit: function(blocks) {
    let i, childRoot, block;
    for (i = 0; i < blocks.length; i++) {
      block = blocks[i];      
      if ((childRoot = this.findChildRoot(this.root, block.w, block.h))){
        block.fit = this.splitChildRoot(childRoot, block.w, block.h);
      }
    }
  },

  findChildRoot: function(root, w, h) {    
    if (root.used)
      return this.findChildRoot(root.right, w, h) || this.findChildRoot(root.down, w, h);
    else if ((w <= root.w) && (h <= root.h))
      return root;
    else
    //уменьшаем коэфициент на какой-то шаг и заново запускаем фитб в котором запускает перерасчет размеров блоков
      return null;
  },

  splitChildRoot: function(childRoot, w, h) {
    childRoot.used = true;
    childRoot.down  = { x: childRoot.x,     y: childRoot.y + h, w: childRoot.w,     h: childRoot.h - h };
    childRoot.right = { x: childRoot.x + w, y: childRoot.y,     w: childRoot.w - w, h: h          };
    return childRoot;
  }
}


export default class Location extends React.Component {
  state = { 
    width: document.documentElement.clientWidth, 
    height: document.documentElement.clientHeight,
    planetRenderFull: []
  };

  setPlanetSize(planets, areaPerResident) {
    return planets.map(planet => { //создаем объект из планет
      let itemSize;
      planet.residents.length > 5
        ? itemSize = Math.floor(Math.sqrt(planet.residents.length * areaPerResident))
        : itemSize = 20;

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
    const areaPerResident = Math.floor( (this.state.width * this.state.height) / allResidents);
    console.log(areaPerResident);

    const planetRender = this.setPlanetSize(planets, areaPerResident);    
    const packer = new Packer(this.state.width, this.state.height);
    packer.fit(planetRender);

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
