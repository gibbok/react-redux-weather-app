import React from 'react'
import * as ol from 'openlayers'
import * as api from '../app/api'
import RegionsSelect from './RegionsSelect'
import TypesSelect from './TypesSelect'
import styles from '../../node_modules/openlayers/css/ol.css' // eslint-disable-line no-unused-vars

const Map = React.createClass({
  map: undefined,
  componentDidMount () {
    this.renderMapOpenLayer()
  },
  componentDidUpdate (prevProps) {
    this.animateMapToRegion(prevProps)
  },
  animateMapToRegion (prevProps) {
    let nextActiveRegion = prevProps.map.regions.find(region => region.isActive)
    let newCenterMap
    switch (nextActiveRegion.id) {
      case 'currentLocation':
        newCenterMap = this.props.geo
        break
      case 'northAmerica':
        newCenterMap = [-100.7838, 46.8083]
        break
      case 'southAmerica':
        newCenterMap = [-57.6534, -19.0092]
        break
      case 'europe':
        newCenterMap = [8.6833, 50.1167]
        break
      case 'asia':
        newCenterMap = [91.1, 29.65]
        break
      case 'pacificIslands':
        newCenterMap = [156.3159, -7.5559]
        break
      case 'africa':
        newCenterMap = [18.5333, 4.3833]
        break
    }

    var view = this.map.getView()
    view.animate({
      center: ol.proj.fromLonLat(newCenterMap),
      duration: 1000,
      zoom: 4
    })
  },
  render () {
    return (
      <div>
        <RegionsSelect
          regions={this.props.regions}
          onRegionsChange={this.props.onRegionsChange}
         />
        <TypesSelect
          types={this.props.types}
          onTypesChange={this.props.onTypesChange}
          />
        <div id='map' className='map' />
      </div>
    )
  },
  renderMapOpenLayer () {
    let geo = this.props.geo

    // render marker vector
    let markerFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.transform([-72.0704, 46.678], 'EPSG:4326', 'EPSG:3857')) // TODO // take lat long from openweather api which should be sotred in the state
    })

    let markerSource = new ol.source.Vector({
      features: [markerFeature]
    })

    let markerStyle = new ol.style.Style({
      image: new ol.style.Icon(({
        anchor: [0, 0],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'assets/pin.svg'
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

    let forecastLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: api.forecast()
      })
    })

    // setTimeout(function () {
    //   // https://gis.stackexchange.com/questions/158187/openlayers3-change-layer-source-url-or-replace-features-loaded-from-another-url
    //   let layer = this.map.getLayers().getArray()[2]
    //   layer.setSource(forecastLayer)
    // }.bind(this), 3000)

    // create map
    this.map = new ol.Map({
      target: 'map',
      layers: [
        tileLayer,
        markerLayer,
        cloudLayer
      ],
      view: new ol.View({
        center: ol.proj.transform(geo, 'EPSG:4326', 'EPSG:3857'),
        zoom: 4
      })
    })
  }
})

export default Map
