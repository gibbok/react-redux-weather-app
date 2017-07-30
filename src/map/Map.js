import React from 'react'
import * as ol from 'openlayers'
import * as api from '../app/api'
import RegionsSelect from './RegionsSelect'
import styles from '../../node_modules/openlayers/css/ol.css' // eslint-disable-line no-unused-vars

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
        url: api.mapTemperature()
      })
    })
    map.addLayer(layerCloud)
  },
  render () {
    return (
      <div>
        <RegionsSelect regions={this.props.regions} onRegionsChange={this.props.onRegionsChange} />
        <div id='map' className='map' />
      </div>
    )
  }
})

export default Map
