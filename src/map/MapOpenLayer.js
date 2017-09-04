import React from 'react'
import * as ol from 'openlayers'
import * as api from '../app/api'

/*
 * Open Layer interactive world map.
 */
const MapOpenLayer = React.createClass({
  olMap: undefined,
  getInitialState () {
    return {
      activeRegion: 'currentLocation',
      activeType: 'temperature'
    }
  },
  componentDidMount () {
    this.olMapInit()
  },
  componentDidUpdate (prevProps) {
    let activeRegion = Object.assign({}, this.props.regions.find(region => region.isActive))
    let activeType = Object.assign({}, this.props.types.find(mapType => mapType.isActive))

    if (activeRegion.id !== this.state.activeRegion) {
      this.moveMapCenterToRegion(this.props)
      this.state.activeRegion = activeRegion.id
    }

    if (activeType.id !== this.state.activeType) {
      this.changeLayerOlMap(activeType.id)
      this.state.activeType = activeType.id
    }
  },
/*
 * Initialize and draw on screen the Open Layer world map.
 */
  olMapInit () {
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
    let tileLayer = new ol.layer.Tile({
      source: new ol.source.OSM()
    }, new ol.layer.Vector({
      source: new ol.source.Vector({ features: [], projection: 'EPSG:4326' })
    }))

    // create map
    this.olMap = new ol.Map({
      target: 'map',
      layers: [
        tileLayer,
        markerLayer,
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: api.mapTemperature()
          })
        })
      ],
      view: new ol.View({
        center: ol.proj.transform(geo, 'EPSG:4326', 'EPSG:3857'),
        zoom: 4
      })
    })
  },
/*
 * Change the layer information on the map, allowing user to chose different weather information.
 */
  changeLayerOlMap (name) {
    let url
    switch (name) {
      case 'default':
      case 'temperature':
        url = api.mapTemperature()
        break
      case 'precipitation':
        url = api.mapPrecipitation()
        break
      case 'pressure':
        url = api.mapPressure()
        break
      case 'wind':
        url = api.mapWind()
        break
      case 'cloud':
        url = api.mapCloud()
        break
    }
    let tile = new ol.source.XYZ({
      url: url
    })
    let layer = this.olMap.getLayers().getArray()[2]
    layer.setSource(tile)
  },
  /*
   * Move the center of the map to a different world region.
   */
  moveMapCenterToRegion () {
    let nextActiveRegion = this.props.regions.find(region => region.isActive)
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

    let view = this.olMap.getView()
    view.animate({
      center: ol.proj.fromLonLat(newCenterMap),
      duration: 1000,
      zoom: 4
    })
  },
  render () {
    return (
      <div id='map' className='map' />
    )
  }
})

export default MapOpenLayer
