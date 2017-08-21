import * as types from './mapActionTypes'

const setRegion = value => ({
  type: types.SET_MAP_REGION,
  payload: value
})

const setType = value => ({
  type: types.SET_MAP_TYPE,
  payload: value
})

export { setRegion, setType}
