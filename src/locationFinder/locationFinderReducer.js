import dotProp from 'dot-prop-immutable'

const initialState = {
  app: {
    config: {}
  },
  // locationFinder: {
  //    data: [],   // domain data
  //    app: {},    // app state that is specific to the application's behavior
  //    ui: {}      // data that represents how the UI is currently displayed
  // },
  locationFinder: {
    data: [
    ],
    app: {
      isFetching: false
    },
    ui: {
      inputValue: '',
      resultCities: {
        byId: {
          // ui list of cities
        },
        allIds: []
      }
    }
  },
  weather: {
    data: [],
    app: {},
    ui: {}
  },
  weatherDetails: {
    data: [],
    app: {},
    ui: {}
  },
  forecastDaily: {
    data: [],
    app: {},
    ui: {}
  },
  forecastHourly: {
    data: [],
    app: {},
    ui: {}
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
  console.log(action.type)
  switch (action.type) {
    case 'GET_FIND_PENDING':
      return updateAppIsFetching(state, action, true)
    case 'GET_FIND_FULFILLED':
      updateAppIsFetching(state, action, false)
      return updateData(state, action)
    case 'SET_FIND_VALUE':
      return updateUiInputValue(state, action)
    default:
      return state
  }
}

export default locationFinderReducer
