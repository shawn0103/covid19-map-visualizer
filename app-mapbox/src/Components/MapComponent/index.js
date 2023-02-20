import * as React from 'react';
import './style.css';
import {Map, Source, Layer} from 'react-map-gl';
import { useState, useRef } from 'react';
import {clusterLayer, clusterCountLayer, unclusteredPointLayer, clusterLayer2, clusterCountLayer2, unclusteredPointLayer2} from './layers';
import testData from './testData.json'
import testDataAfghanistan from './testDataAfghanistan.json'
import testDataAlbania from './testDataAlbania.json'
const token = process.env.REACT_APP_MAPBOX_API_KEY;
const fs = require('fs');

function MapComponent() {
  
 
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
              type="geojson"
              data={testDataAfghanistan}
              cluster={true}
              clusterMaxZoom={14}
              clusterRadius={50}
            >
              <Layer {...clusterLayer} />
              <Layer {...clusterCountLayer} />
              <Layer {...unclusteredPointLayer} />
            </Source>
            <Source
              type="geojson"
              data={testDataAlbania}
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
