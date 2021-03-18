import React from 'react';
import axios from 'axios';
import Location from './components/Location/Location';
import PopUp from './components/PopUp/PopUp';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.showPlanetInfo = this.showPlanetInfo.bind(this);
    this.hidePlanetInfo = this.hidePlanetInfo.bind(this);
  } 

  state = {
    planetsList: [],
    showPlanetInfo: false,
    planetId: "",
    pageX: "",
    pageY: "",
  }

  componentDidMount() {
      axios.get(`https://rickandmortyapi.com/api/location`)
        .then(res => {
          const data = res.data.results
          this.setState({ planetsList: data });
        })
  }

  showPlanetInfo(e) {
    
    this.setState({
      showPlanetInfo: true,
      planetId: e.target.id,
      pageX: e.pageX,
      pageY: e.pageY
    });
  }

  hidePlanetInfo(e) {
    this.setState({
      showPlanetInfo: false,
      planetId: e.target.id
    });
  }

  render() {
    return (      
      <div className="mainContainer">
        {this.state.showPlanetInfo && <PopUp state={this.state} />}
        {this.state.planetsList.length > 0 
          ? <Location 
            planetsList={this.state.planetsList} 
            showPlanetInfo={this.showPlanetInfo} 
            hidePlanetInfo={this.hidePlanetInfo}/> 
          : 'Loading...'}        
      </div>      
    );
  }
}
