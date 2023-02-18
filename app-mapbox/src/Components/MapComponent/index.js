import * as React from 'react';
import './style.css';
import {Map, Source, Layer} from 'react-map-gl';
import { useState, useRef } from 'react';
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from './layers';
import testData from './covid19.json'
const token = process.env.REACT_APP_MAPBOX_API_KEY;
const fs = require('fs');

function MapComponent() {
  
  const updateData = () => {
    let obj = JSON.parse(testData);
    obj['features'].push({ "geometry": { "type": "Point", "coordinates": [ -151.58, 63.1016, 0.0 ] } });
    let jsonStr = JSON.stringify(obj);
    
    fs.writeFile(testData, jsonStr, function writeJSON(err) {
      if (err) return console.log(err);
      console.log(jsonStr);
      console.log('writing to ' + testData);
    });
  }
  
  
  const mapRef = React.useRef();

  const onClick = event => {
    
    //updateData();
    //console.log(testData.features);
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getSource();

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      mapRef.current.easeTo({
        center: feature.geometry.coordinates,
        zoom,
        duration: 500
      });
    });
  };
  
  return (
    <div className='map'> 
      <div className='mapComponent'>
        <Map 
            initialViewState={{
              latitude: 40.67,
              longitude: -103.59,
              zoom: 3
            }}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxAccessToken={token}
            interactiveLayerIds={[clusterLayer.id]}
            onClick={onClick}
            ref={mapRef}
          >
            <Source
              id="earthquakes"
              type="geojson"
              data={testData}
              cluster={true}
              clusterMaxZoom={14}
              clusterRadius={50}
            >
              <Layer {...clusterLayer} />
              <Layer {...clusterCountLayer} />
              <Layer {...unclusteredPointLayer} />
            </Source>
          </Map>
        </div>
    </div>
  );
}

export default MapComponent;
