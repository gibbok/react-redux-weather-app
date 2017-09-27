// @flow
import * as React from 'react'
import * as ol from 'openlayers'
import * as api from '../app/api'

/*
 * Open Layer interactive world map.
 */
class MapOpenLayer extends React.Component<any, any> {
  // `Class properties transform`
  // olMap: Object;  // eslint-disable-line no-undef
  // state: Object; // eslint-disable-line no-undef
  constructor (props:Object) {
    super(props)
    // $FlowFixMe: surpress flow error as web-pack throw errors when using `Class properties transform`
    this.olMap = {}
    this.state = {
      activeMapRegion: 'currentLocation',
      activeMapType: 'temperature'
    }
  }
  componentDidMount () {
    this.olMapInit()
  }
  getActiveMapRegion () {
    return this.props.regions.find(mapRegion => mapRegion.isActive)
  }
  getActiveMapType () {
    return this.props.types.find(mapType => mapType.isActive)
  }
  /*
   * When an user select a new region, save region in state and move map center.
   */
  setMapRegion () {
    let activeMapRegion = Object.assign({}, this.getActiveMapRegion())
    if (activeMapRegion.id !== this.state.activeMapRegion) {
      this.moveMapCenterToRegion()
      this.state.activeMapRegion = activeMapRegion.id
    }
  }
  /*
   * When an user select a new map type, save map type in state and render new map tile.
   */
  setMapType () {
    let activeMapType = Object.assign({}, this.getActiveMapType())
    if (activeMapType.id !== this.state.activeMapType) {
      this.changeLayerOlMap(activeMapType.id)
      this.state.activeMapType = activeMapType.id
    }
  }
  componentDidUpdate (prevProps:Object) {
    this.setMapRegion()
    this.setMapType()
  }
/*
 * Initialize and draw on screen the Open Layer world map.
 */
  olMapInit () {
    // render marker vector
    let markerFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.transform([-72.0704, 46.678], 'EPSG:4326', 'EPSG:3857')) // TODO // take lat long from openweather api which should be stored in state
    })

    let markerSource = new ol.source.Vector({
      features: [markerFeature]
    })

    let markerStyle = new ol.style.Style({
      image: new ol.style.Icon(({
        anchor: [0, 0],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 1,
        src: 'assets/pin.svg'
      }))
    })

    let markerLayer = new ol.layer.Vector({
      source: markerSource,
      style: markerStyle
    })

    // render OpenStreetMap tile from their server
    let tileLayer = new ol.layer.Tile({
      source: new ol.source.OSM()
    }, new ol.layer.Vector({
      source: new ol.source.Vector({ features: [], projection: 'EPSG:4326' })
    }))

    // create map
    // $FlowFixMe: suppressing this error until we can refactor
    this.olMap = new ol.Map({
      target: 'map',
      layers: [
        tileLayer,
        new ol.layer.Tile({
          source: new ol.source.XYZ({
            url: api.mapTemperature()
          })
        }),
        markerLayer
      ],
      view: new ol.View({
        center: ol.proj.transform(this.props.geo, 'EPSG:4326', 'EPSG:3857'),
        zoom: 4
      })
    })
  }
/*
 * Change the layer information on the map, allowing user to chose different weather information.
 */
  changeLayerOlMap (name:string) {
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
    // $FlowFixMe
    let layer = this.olMap.getLayers().getArray()[1]
    layer.setSource(tile)
  }
  /*
   * Move the center of the map to a different world region.
   */
  moveMapCenterToRegion () {
    let nextActiveRegion = this.getActiveMapRegion()
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
    // $FlowFixMe
    let view = this.olMap.getView()
    view.animate({
      center: ol.proj.fromLonLat(newCenterMap),
      duration: 1000,
      zoom: 4
    })
  }
  render () {
    return (
      <div id='map' className='map' />
    )
  }
}

export default MapOpenLayer
