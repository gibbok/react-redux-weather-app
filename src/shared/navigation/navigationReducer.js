// @flow
import {StateType, ActionType} from '../../types' // eslint-disable-line no-unused-vars

import dotProp from 'dot-prop-immutable'
import * as types from './navigationActionTypes'

const initialState:StateType = {
  navigation: {
    data: [
      {
        id: 'home',
        title: 'Weather',
        tooltip: 'Weather',
        isActive: true,
        url: '/'
      },
      {
        id: 'map',
        title: 'Map',
        tooltip: 'Weather map',
        isActive: false,
        url: '/map'
      }
    ],
    ui: {
      active: 'home'
    }
  }
}

const updateUiActive = (state:StateType, action:ActionType) => {
  return dotProp.set(state, 'navigation.ui.active', action.payload)
}

const updateData = (state, action) => {
  const updatedData = state.navigation.data.map((x) => {
    x.isActive = x.id === action.payload
    return x
  })
  return dotProp.set(state, 'navigation.data', updatedData)
}

function navigationReducer (state:StateType = initialState, action:ActionType) {
  switch (action.type) {
    case types.SET_ACTIVE:
      return updateData(updateUiActive(state, action), action)
    default:
      return state
  }
}

export default navigationReducer
