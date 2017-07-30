import React from 'react'
import * as ol from 'openlayers'
import * as api from '../app/api'
import RegionsSelect from './RegionsSelect'
import TypesSelect from './TypesSelect'
import styles from '../../node_modules/openlayers/css/ol.css' // eslint-disable-line no-unused-vars

const Map = React.createClass({
  componentDidMount () {
    this.renderMapOpenLayer()
  },
  render () {
    return (
      <div>
        <RegionsSelect regions={this.props.regions} onRegionsChange={this.props.onRegionsChange} />
        <TypesSelect types={this.props.types} onTypesChange={this.props.onTypesChange} />
        <div id='map' className='map' />
      </div>
    )
  },
  renderMapOpenLayer () {
    // render marker vector
    let markerFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.transform([-72.0704, 46.678], 'EPSG:4326', 'EPSG:3857')) // TODO // take lat long from openweather api which should be sotred in the state
    })

    let markerSource = new ol.source.Vector({
      features: [markerFeature]
    })

    let markerStyle = new ol.style.Style({
      image: new ol.style.Icon(({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'https://mt.googleapis.com/vt/icon/name=icons/onion/157-yellow-dot.png'
      }))
    })

    let markerLayer = new ol.layer.Vector({
      source: markerSource,
      style: markerStyle
    })

    // render OpenStreetMap tile server
    var tileLayer = new ol.layer.Tile({
      source: new ol.source.OSM()
    }, new ol.layer.Vector({
      source: new ol.source.Vector({ features: [], projection: 'EPSG:4326' })
    }))

    // render cloud tile
    let cloudLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: api.mapTemperature()
      })
    })

    let map = new ol.Map({
      target: 'map',
      layers: [
        tileLayer,
        markerLayer,
        cloudLayer
      ],
      view: new ol.View({
        center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
        zoom: 4
      })
    })
  }
})

export default Map
