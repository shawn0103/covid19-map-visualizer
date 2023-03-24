import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Map from '../Components/Map';
import PieChart from '../Components/PieChart';
import BarChart from '../Components/BarChart';
import {Link} from 'react-router-dom';


function Deaths() {


  
 const [totalDeaths, loadTotalDeaths] = useState(false);
  const [case_fatality, loadCase_fatality] = useState(true);
  const [mapKey, setMapKey] = useState(0);
  const [showMap, setShowMap] = useState(true);
  
  const renderDeaths = () => {
    //loadCase_fatality(false);
    //loadTotalDeaths(true);
    //console.log(`rendering deaths value: ${totalDeaths}`);
    //setMapKey((prevKey) => prevKey + 1);
  }

  const renderCasefatality = () => {
    loadTotalDeaths(false);
    loadCase_fatality(true);
    setMapKey((prevKey) => prevKey + 1);
    //console.log(`rendering case fatality ${case_fatality}`);
  }

  
  return (
    <div className="App">
      <div className='NavBar'>
        <h1>COVID-19 Dashboard</h1>
      </div>
        <div className='Map-Selection'>
            <a href="/deaths">
                <button className='btn' onClick={() => window.location.reload(true)}>Total Deaths</button>
            </a>
            <a href="/">
                <button className='btn' onClick={() => window.location.reload(true)}>Case fatality ratio</button>
            </a>

          </div>
        <div className='Visualiztion-Row'>
          <div className='Stats'>
            <div className='card'>
              <h3> Total Cases </h3>
              <h1> 123 </h1>
            </div>
            <div className='card'>
              <h3> Total Deaths </h3>
              <h1> 123 </h1>
            </div>
            <div className='card'>
              <h3> Cases per 1000 people </h3>
              <h1> 123 </h1>
            </div>
            <div className='card'>
              <h3> Last Updated </h3>
              <h1>22/3/2023</h1>
            </div>
          </div>
          <div className='Map-Component-Container'>
            <Map totalDeaths={true} case_fatality={false} key={mapKey}/>
          </div>
          <div className='Stats'>
            <div className='Bar'>
              <BarChart/>
            </div>
            <div className='Pie'>
              <PieChart/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Deaths;
