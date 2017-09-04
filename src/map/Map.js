import React from 'react'
import RegionsSelect from './RegionsSelect'
import TypesSelect from './TypesSelect'
import MapOpenLayer from './MapOpenLayer'
import styles from '../../node_modules/openlayers/css/ol.css' // eslint-disable-line no-unused-vars

/*
 * Render the main weather map, including ui for the selection of a region and map type.
 */
const Map = React.createClass({
  render () {
    return (
      <div>
        <TypesSelect
          types={this.props.types}
          onTypesChange={this.props.onTypesChange}
          />
        <RegionsSelect
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
})

export default Map
