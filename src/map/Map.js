import React, {Component} from 'react'
import MapRegions from './MapRegions'
import MapTypes from './MapTypes'
import MapOpenLayer from './MapOpenLayer'
import styles from '../../node_modules/openlayers/css/ol.css' // eslint-disable-line no-unused-vars

/*
 * Render the main weather map, including ui for the selection of a region and map type.
 */
class Map extends Component {
  render () {
    return (
      <div>
        <MapTypes
          types={this.props.types}
          onTypesClick={this.props.onTypesClick}
          />
        <MapRegions
          regions={this.props.regions}
          onRegionsChange={this.props.onRegionsChange}
         />
        <MapOpenLayer
          geo={this.props.geo}
          regions={this.props.regions}
          types={this.props.types}
          />
      </div>
    )
  }
}

export default Map
