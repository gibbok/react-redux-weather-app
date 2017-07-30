import React from 'react'
import * as ol from 'openlayers'
import * as api from '../app/api'
import RegionsSelect from './RegionsSelect'
import TypesSelect from './TypesSelect'
import styles from '../../node_modules/openlayers/css/ol.css' // eslint-disable-line no-unused-vars

const Map = React.createClass({
  componentDidMount () {
    let iconFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.transform([-72.0704, 46.678], 'EPSG:4326', 'EPSG:3857'))
    })

    let vectorSource = new ol.source.Vector({
      features: [iconFeature]
    })

    let iconStyle = new ol.style.Style({
      image: new ol.style.Icon(({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/128/Map-Marker-Ball-Right-Pink.png'
      }))
    })

    let vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: iconStyle
    })

    // -------------

    let map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }, new ol.layer.Vector({
          source: new ol.source.Vector({ features: [], projection: 'EPSG:4326' })
        })), vectorLayer
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
        <TypesSelect types={this.props.types} onTypesChange={this.props.onTypesChange} />
        <div id='map' className='map' />
      </div>
    )
  }
})

export default Map
