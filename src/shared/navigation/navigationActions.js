import 'isomorphic-fetch'
import * as types from './navigationActionTypes'

const setActive = (value) => ({
  type: types.SET_ACTIVE,
  payload: value
})

export { setActive }
