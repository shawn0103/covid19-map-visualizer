import React from 'react'
import mapHtml from '../../Assets/map.html'
import { MapDiv } from './Styled/MapDiv'
import { Parser } from 'html-to-react'
const style = {
  height: '100%',
  width: '70vw'
}
//const safeMapHtml = DOMPurify.sanitize(mapHtml);



var htmlDoc = {__html: mapHtml};
function Map() {
  return (
    <MapDiv dangerouslySetInnerHTML={htmlDoc}/>
  )
}

export default Map