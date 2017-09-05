import * as types from './mapActionTypes'

/*
 * Action set a region.
 */
const setMapRegion = value => ({
  type: types.SET_MAP_REGION,
  payload: value
})

/*
 * Action set a map type.
 */
const setMapType = value => ({
  type: types.SET_MAP_TYPE,
  payload: value
})

export {setMapRegion, setMapType}
