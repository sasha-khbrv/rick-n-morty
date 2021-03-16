import React from 'react';

export default class Location extends React.Component {

  state = { 
    width: window.innerWidth, 
    height: window.innerHeight 
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    });
  };

  render() {
    const planets = this.props.planetsList;
    return (
      <span>Window size: {this.state.width} x {this.state.height}</span>
    )
  }
}
