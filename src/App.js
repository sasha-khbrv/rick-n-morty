import { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './components/Location/Location';
import PopUp from './components/PopUp/PopUp';


function App() {
  const pageState = false;

  const [planetsList, setPlanetsList] = useState([]);
   
  useEffect(()  => {
    const fetchData = async () => {
        const result =  await axios('https://rickandmortyapi.com/api/location',);
        setPlanetsList(result.data.results);
    };
    fetchData();
}, []);

  return (    
    <>
    {pageState && <Location planetsList={planetsList}/>}
    <PopUp planetsList={planetsList}/> 
    </>
  );
}

export default App;
