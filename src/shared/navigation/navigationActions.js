// @flow
import {ActionType} from '../../types' // eslint-disable-line no-unused-vars

import 'isomorphic-fetch'
import * as types from './navigationActionTypes'

const setActive = (value:string):ActionType => ({
  type: types.SET_ACTIVE,
  payload: value
})

export { setActive }
