import * as types from './mapActionTypes'

const setRegion = value => ({
  type: types.SET_MAP_REGION,
  payload: value
})

export { setRegion }
