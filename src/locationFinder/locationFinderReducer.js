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
      {
        id: 2643743,
        name: 'London',
        country: 'GB'
      },
      {
        id: 4119617,
        name: 'London',
        country: 'US'
      },
      {
        id: 4298960,
        name: 'London',
        country: 'US'
      },
      {
        id: 4517009,
        name: 'London',
        country: 'US'
      }
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

const updateLocationFinderData = (state, action) => {
  const locations = action.payload.list.map(({ id, name, sys: { country } }) => ({ id, name, country }));
  return dotProp.set(state, 'locationFinder.data', locations)
}

const updateLocationFinderInputValue = (state, action) => {
  return dotProp.set(state, 'locationFinder.ui.inputValue', action.payload)
}

function locationFinderReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_FIND_FULFILLED':
      return updateLocationFinderData(state, action)
    case 'SET_FIND_VALUE':
      return updateLocationFinderInputValue(state, action)
    default:
      return state
  }
}

export default locationFinderReducer
