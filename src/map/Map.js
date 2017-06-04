import React from 'react'
import * as ol from 'openlayers'
import styles from '../../node_modules/openlayers/css/ol.css'

const Map = React.createClass({
  componentDidMount () {
    let map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
        zoom: 4
      })
    })
    let layerCloud = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=9f585babc59bf435c42319b4e9b69766'
      })
    })
    map.addLayer(layerCloud)
  },
  render () {
    return (
      <div id='map' className='map' />
    )
  }
})

export default Map
