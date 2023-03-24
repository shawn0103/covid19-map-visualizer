import React, { useRef, useEffect, useState, memo } from 'react';
import './map.css'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const Map = (props) => {
  
  
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(17.67);
    const [lat, setLat] = useState(30.08);
    const [zoom, setZoom] = useState(1.75);
    
    const [totalDeaths, loadTotalDeaths] = useState(props.totalDeaths);
    const [case_fatality, loadCase_fatality] = useState(props.case_fatality);
    

    useEffect(() => {
      if (map.current) return;
      console.log(`Death prop: ${totalDeaths}`);
      console.log(`Case fatality prop: ${case_fatality}`)
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v9',
      //For globe style:
      //style: 'mapbox://styles/mapbox/dark-v11',
      center: [lng, lat],
      zoom: zoom,
      maxZoom: 6,
      minZoom: 1.75
      });
      console.log(`not event zoom: ${map.current.getZoom()}`)
      map.current.on('load', () => {
        map.current.addSource('covid', {
          type: 'geojson',
          ...(case_fatality && { data: "http://localhost:4000/fetchCaseFatality" }),
          ...(totalDeaths && { data: "http://localhost:4000/fetchTotalDeaths" }),
          cluster: true,
          clusterMaxZoom: 14, 
          clusterRadius: 50 
          });
  
          map.current.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'covid',
            filter: ['has', 'point_count'],
            ...(case_fatality && { paint: {
              'circle-color': [
              'step',
              ['get', 'point_count'],
              '#88C0D0',
              100,
              '#EBCB8B',
              500,
              '#D08770',
              1000,
              '#BF616A' 
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
              }}),
            ...(totalDeaths && { paint:{
              'circle-color': [
              'step',
              ['get', 'point_count'],
              '#88C0D0',
              380,
              '#EBCB8B',
              3164,
              '#D08770',
              18506,
              '#BF616A' 
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
              } })
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

      map.current.on('zoom', () =>{
        console.log(`event zoom: ${map.current.getZoom()}`);
        if(map.current.getZoom() > 4){
          
          map.current.removeLayer('clusters');
          
          map.current.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'covid',
            filter: ['has', 'point_count'],
            ...(case_fatality && { paint: {
              'circle-color': [
              'step',
              ['get', 'point_count'],
              '#88C0D0',
              100,
              '#EBCB8B',
              500,
              '#D08770',
              1000,
              '#BF616A' 
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
              }}),
            ...(totalDeaths && { paint:{
              'circle-color': [
              'step',
              ['get', 'point_count'],
              '#88C0D0',
              167,
              '#EBCB8B',
              1388,
              '#D08770',
              8117,
              '#BF616A' 
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
              } })
            });
            
            map.current.removeLayer('cluster-count');
            
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
              
              map.current.removeLayer('unclustered-point'); 
              
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
        }else {
          
          map.current.removeLayer('clusters');
          
          map.current.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'covid',
            filter: ['has', 'point_count'],
            ...(case_fatality && { paint: {
              'circle-color': [
              'step',
              ['get', 'point_count'],
              '#88C0D0',
              100,
              '#EBCB8B',
              500,
              '#D08770',
              1000,
              '#BF616A' 
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
              }}),
            ...(totalDeaths && { paint:{
              'circle-color': [
              'step',
              ['get', 'point_count'],
              '#88C0D0',
              380,
              '#EBCB8B',
              3164,
              '#D08770',
              18506,
              '#BF616A' 
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
              } })
            });
            
            map.current.removeLayer('cluster-count');
            
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
              
              map.current.removeLayer('unclustered-point'); 
              
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
        }
      })
     // map.current.legendControl.addLegend(document.getElementById('legend').innerHTML);
      });
    return (
      <div ref={mapContainer} className="map-container" />
  )
}

export default Map