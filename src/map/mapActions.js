// @flow
import {ActionType} from '../../types' // eslint-disable-line no-unused-vars

import * as types from './mapActionTypes'

/*
 * Action set a region.
 */
const setMapRegion = (value:string):ActionType => ({
  type: types.SET_MAP_REGION,
  payload: value
})

/*
 * Action set a map type.
 */
const setMapType = (value:string):ActionType => ({
  type: types.SET_MAP_TYPE,
  payload: value
})

export {setMapRegion, setMapType}
