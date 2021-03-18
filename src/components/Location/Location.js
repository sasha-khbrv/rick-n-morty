import React from 'react';

const Packer = function(w, h) { 
  this.init(w, h);
};

Packer.prototype = {
  init: function(w, h) {
    this.root = { x: 0, y: 0, w: w, h: h };
  },

  fit: function(blocks) {
    let i, childRoot, block;
    for (i = 0; i < blocks.length; i++) {
      block = blocks[i];      
      if ((childRoot = this.findChildRoot(this.root, block.w, block.h)))
        block.fit = this.splitChildRoot(childRoot, block.w, block.h);
    }
  },

  findChildRoot: function(root, w, h) {
    if (root.used)
      return this.findChildRoot(root.right, w, h) || this.findChildRoot(root.down, w, h);
    else if ((w <= root.w) && (h <= root.h))
      return root;
    else
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

  packer = new Packer(this.state.width, this.state.height); // создаем контейнер и задаем размеры окна
  

  planets = this.props.planetsList.sort((a, b) => b.residents.length - a.residents.length); //сортируем планеты от макс к мин по количеству жителей

  planetRender = this.planets.map(planet => {
    const itemSize = (planet.residents.length + 10) * 2; // сторона квадрата + 10
    return (
      {
        id: planet.id,
        w: itemSize,
        h: itemSize,
      }
    )
  })

  componentDidMount() {    
    window.addEventListener('resize', this.updateDimensions);
    this.packer.fit(this.planetRender);
    this.setState({
      planetRenderFull: this.planetRender.map(planet => ({
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
          <rect 
            key={planet.id}
            width={planet.w} 
            height={planet.h}
            x={planet.x}
            y={planet.y}
            fill="none"
            stroke="grey"
          />
        )}
      </svg>
    )
  }
}
