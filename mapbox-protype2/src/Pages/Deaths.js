import React from 'react';
import './App.css';
import Map from '../Components/Map';
import PieChart from '../Components/PieChart';
import BarChart from '../Components/BarChart';
import stats from '../data/stats.json'
import {BrowserView, MobileView} from 'react-device-detect';

function Deaths() {
  
  return (
    <div className="App">
      <BrowserView>
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
            <a href="/casesper1000">
            <button className='btn' onClick={() => window.location.reload(true)}>Cases per 1000 people</button>
            </a>
          </div>
          <div className='disclaimer'>Disclaimer: This visualization may take time to load as the dataset is roughly 200mb in size</div>
        <div className='Visualiztion-Row'>
          <div className='Stats'>
          <div className='card'>
              <div className='card-text-container'>
              <h3 className='card-title'> How are the metrics calculated?</h3>
                <h4>Each recorded death is grouped into clusters. The colors and sizes of the clusters represent their density.</h4>
              </div>
            </div>
            <div className='card'>
              <h3> Total Cases </h3>
              <h1> {`${stats.totalCases}`} </h1>
            </div>
            <div className='card'>
              <h3> Total Deaths </h3>
              <h1> {`${stats.totalDeaths}`} </h1>
            </div>
            <div className='card'>
              <h3> Last Updated </h3>
              <h1>{`${stats.lastUpdated}`}</h1>
            </div>
          </div>
          <div className='Map-Component-Container'>
            <Map totalDeaths={true} case_fatality={false}/>
          </div>
          <div className='Stats'>
          <div className='stats-heading'>
              <h3>Vaccination Statistics</h3>
            </div>
            <div className='Bar'>
              <BarChart/>
            </div>
            <div className='Pie'>
              <PieChart/>
              <h5>Click on the boxes to interact!</h5>
            </div>
          </div>
        </div>
        </BrowserView>
        <MobileView>
        <div className='mobile-container'>
          <h3>Unfortunately the COVID-19 Dashboard does not support mobile devices due to hardware limitations. Please try again using a desktop computer.</h3>
          </div>
        </MobileView>
      </div>
  );
}

export default Deaths;
