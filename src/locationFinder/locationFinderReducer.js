import dotProp from 'dot-prop-immutable'
import * as types from './locationFinderActionTypes'
// locationFinder: {
//    data: [],   // domain data
//    app: {},    // app state that is specific to the application's behavior
//    ui: {}      // data that represents how the UI is currently displayed
// },

// const initialState = {
//   app: {
//     config: {}
//   },
//   locationFinder: {
//     data: [
//     ],
//     app: {
//       isFetching: false
//     },
//     ui: {
//       inputValue: ''
//     }
//   },
//   weather: {
//     data: [],
//     app: {},
//     ui: {}
//   },
//   weatherDetails: {
//     data: [],
//     app: {},
//     ui: {}
//   },
//   forecastDaily: {
//     data: [],
//     app: {},
//     ui: {}
//   },
//   forecastHourly: {
//     data: [],
//     app: {},
//     ui: {}
//   }
// }

const initialState = {
  locationFinder: {
    data: [
    ],
    app: {
      isFetching: false
    },
    ui: {
      inputValue: ''
    }
  }
}

const updateAppIsFetching = (state, action, value) => {
  return dotProp.set(state, 'locationFinder.app.isFetching', value)
}

const updateData = (state, action) => {
  const locations = action.payload.list.map(({ id, name, sys: { country } }) => ({ id, name, country }))
  return dotProp.set(state, 'locationFinder.data', locations)
}

const updateUiInputValue = (state, action) => {
  return dotProp.set(state, 'locationFinder.ui.inputValue', action.payload)
}

function locationFinderReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_LOCATIONS_PENDING:
      return updateAppIsFetching(state, action, true)
    case types.GET_LOCATIONS_FULFILLED:
      updateAppIsFetching(state, action, false)
      return updateData(state, action)
    case types.SET_SEARCHVALUE:
      return updateUiInputValue(state, action)
    default:
      return state
  }
}

export default locationFinderReducer
