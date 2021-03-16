import React from 'react';
import axios from 'axios';
import Location from './components/Location/Location';

export default class App extends React.Component {
  state = {
    planetsList: []
  }

  componentDidMount() {
      axios.get(`https://rickandmortyapi.com/api/location`)
        .then(res => {
          const data = res.data.results
          this.setState({ planetsList: data });
        })
  }


  render() {
    return (    
      <div className="mainContainer">
        {this.state.planetsList.length > 0 ? <Location planetsList={this.state.planetsList}/> : 'Loading...'}
      </div>
    );
  }
}
