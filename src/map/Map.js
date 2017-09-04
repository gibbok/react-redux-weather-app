import React from 'react'
import * as ol from 'openlayers'
import RegionsSelect from './RegionsSelect'
import TypesSelect from './TypesSelect'
import MapOpenLayer from './MapOpenLayer'
import styles from '../../node_modules/openlayers/css/ol.css' // eslint-disable-line no-unused-vars

const Map = React.createClass({
  // componentDidUpdate (prevProps) {
  //   this.animateMapToRegion(prevProps)
  // },
  // animateMapToRegion (prevProps) {
  //   let nextActiveRegion = prevProps.map.regions.find(region => region.isActive)
  //   let newCenterMap
  //   switch (nextActiveRegion.id) {
  //     case 'currentLocation':
  //       newCenterMap = this.props.geo
  //       break
  //     case 'northAmerica':
  //       newCenterMap = [-100.7838, 46.8083]
  //       break
  //     case 'southAmerica':
  //       newCenterMap = [-57.6534, -19.0092]
  //       break
  //     case 'europe':
  //       newCenterMap = [8.6833, 50.1167]
  //       break
  //     case 'asia':
  //       newCenterMap = [91.1, 29.65]
  //       break
  //     case 'pacificIslands':
  //       newCenterMap = [156.3159, -7.5559]
  //       break
  //     case 'africa':
  //       newCenterMap = [18.5333, 4.3833]
  //       break
  //   }

  //   let view = mapOpenLayer.map.getView()
  //   view.animate({
  //     center: ol.proj.fromLonLat(newCenterMap),
  //     duration: 1000,
  //     zoom: 4
  //   })
  // },
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
        <MapOpenLayer
          geo={this.props.geo}
          regions={this.props.regions}
          types={this.props.types}
          />
      </div>
    )
  }
})

export default Map
