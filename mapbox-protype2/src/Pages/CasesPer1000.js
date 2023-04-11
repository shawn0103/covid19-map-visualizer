import React from 'react';
import './App.css';
import Map from '../Components/Map';
import PieChart from '../Components/PieChart';
import BarChart from '../Components/BarChart';
import stats from '../data/stats.json'
import {BrowserView, MobileView} from 'react-device-detect';
import { Tooltip } from 'react-tooltip'

function CasesPer1000() {

  return (
    <div className="App">
      <BrowserView>
      <div className='NavBar'>
        <h1>COVID-19 across the world</h1>
      </div>
        <div className='Map-Selection'>
            <a href="/deaths">
                <button data-tooltip-id="btn2" data-tooltip-content="Total COVID-19 Deaths" data-tooltip-place="bottom" className='btn' onClick={() => window.location.reload(true)}>Total Deaths</button>
            </a>
            <a href="/">
                <button data-tooltip-id="btn2" data-tooltip-content="A ratio of cases per death" data-tooltip-place="bottom" className='btn' onClick={() => window.location.reload(true)}>Case fatality ratio</button>
            </a>
            <a href="/casesper1000">
            <button data-tooltip-id="btn2" data-tooltip-content="Number of cases per 1000 people" data-tooltip-place="bottom" className='btn-current' onClick={() => window.location.reload(true)}>Cases per 1000 people</button>
            </a>

        </div>
          <div className='disclaimer'></div>
        <div className='Visualiztion-Row'>
          <div className='Stats'>
          <div className='card'>
              <div className='card-text-container'>
                <div className='line-container'>
                  <div className='line'>
                    <span className="dot-good"></span>
                    <h3 id='left'>- Good</h3>
                  </div>
                  <div className='line'>
                    <span className="dot-average"></span>
                    <h3>- Average</h3>
                  </div>
                </div>
                <div className='line-container'>
                <div className='line'>
                    <span className="dot-bad"></span>
                    <h3 id='left'>- Bad</h3>
                  </div>
                  <div className='line'>
                    <span className="dot-extreme"></span>
                    <h3>- Extreme</h3>
                  </div>
                </div>
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
            <Map totalDeaths={false} case_fatality={false} cases_per_1000 ={true}/>
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
        <Tooltip id='btn2'/>
      </div>
  );
}

export default CasesPer1000;
