import React from 'react';

export default class Location extends React.Component {

  state = { 
    width: document.documentElement.clientWidth, 
    height: document.documentElement.clientHeight
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ 
      width: document.documentElement.clientWidth, 
      height: document.documentElement.clientHeight
    });
  };

  render() {
    const planets = this.props.planetsList;
    return ( 
      <svg width={this.state.width} height={this.state.height}>
        <rect width="100%" height="100%" fill="red" />
      </svg> 
    )
  }
}
