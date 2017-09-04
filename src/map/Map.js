import React from 'react'
import * as ol from 'openlayers'
import RegionsSelect from './RegionsSelect'
import TypesSelect from './TypesSelect'
import MapOpenLayer from './MapOpenLayer'
import styles from '../../node_modules/openlayers/css/ol.css' // eslint-disable-line no-unused-vars

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
