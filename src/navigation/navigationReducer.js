import dotProp from 'dot-prop-immutable'
import * as types from './navigationActionTypes'

const initialState = {
  navigation: {
    data: [
      {
        id: 'home',
        tooltip: 'Weather',
        isActive: true,
        isDefault: false
      },
      {
        id: 'map',
        tooltip: 'Weather map',
        isActive: false,
        isDefault: false
      },
      {
        id: 'news',
        tooltip: 'Weather News',
        isActive: false,
        isDefault: false
      }
    ],
    ui: {
      active: 'home'
    }
  }
}

const updateActive = (state, action) => {
  return dotProp.set(state, 'navigation.ui.active', action.payload)
}

const updateData = (state, action) => {
  const updatedData = state.navigation.data.map((x) => {
    x.isActive = x.id === action.payload
    return x
  })
  return dotProp.set(state, 'navigation.data', updatedData)
}

function navigationReducer (state = initialState, action) {
  console.log(action.type)
  switch (action.type) {
    case types.SET_SEARCHVALUE:
      updateActive(state, action)
      return updateData(state, action)
    default:
      return state
  }
}

export default navigationReducer
