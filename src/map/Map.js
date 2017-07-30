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

    var svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve">' +
'<path fill="#156BB1" d="M22.906,10.438c0,4.367-6.281,14.312-7.906,17.031c-1.719-2.75-7.906-12.665-7.906-17.031S10.634,2.531,15,2.531S22.906,6.071,22.906,10.438z"/>' +
'<circle fill="#FFFFFF" cx="15" cy="10.677" r="3.291"/></svg>'

    var markerSvg = new Image()
    markerSvg.src = 'data:image/svg+xml,' + escape(svg)

    let markerStyle = new ol.style.Style({
      image: new ol.style.Icon(({
        anchor: [0, 0],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        img: markerSvg,
        imgSize: [100, 100]
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
