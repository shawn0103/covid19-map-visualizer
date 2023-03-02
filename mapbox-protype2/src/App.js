import logo from './logo.svg';
import './App.css';
import './map.css'
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

function App() {
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(4);
  
  /* Cluster example */
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [lng, lat],
    zoom: zoom
    });
    map.current.on('load', () => {
      map.current.addSource('covid', {
        type: 'geojson',
        // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
        // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
        data: 'http://localhost:4000/fetchCaseFatality',
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
        });

        map.current.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'covid',
          filter: ['has', 'point_count'],
          paint: {
          // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
          // with three steps to implement three types of circles:
          //   * Blue, 20px circles when point count is less than 100
          //   * Yellow, 30px circles when point count is between 100 and 750
          //   * Pink, 40px circles when point count is greater than or equal to 750
          'circle-color': [
          'step',
          ['get', 'point_count'],
          '#51bbd6',
          100,
          '#f1f075',
          750,
          '#f28cb1'
          ],
          'circle-radius': [
          'step',
          ['get', 'point_count'],
          20,
          100,
          30,
          750,
          40
          ]
          }
          });

          map.current.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'covid',
            filter: ['has', 'point_count'],
            layout: {
            'text-field': ['get', 'point_count_abbreviated'],
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
            }
            });
             
            map.current.addLayer({
            id: 'unclustered-point',
            type: 'circle',
            source: 'covid',
            filter: ['!', ['has', 'point_count']],
            paint: {
            'circle-color': '#11b4da',
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
            }
            });
    })
    });
/*
useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/light-v11',
  zoom: 13,
  center: [-122.447303, 37.753574]
  });
  map.current.on('load', () => {
    map.current.addSource('mapbox-terrain', {
      type: 'vector',
      // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
      // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
      url: 'mapbox://mapbox.mapbox-terrain-v2',
      });

      map.current.addLayer(
        {
        'id': 'terrain-data',
        'type': 'point',
        'source': 'shawn0103.6yke99gz',
        'source-layer': 'contour'
        }
        );
  })
  });
  */
  return (
    <div className="App">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
