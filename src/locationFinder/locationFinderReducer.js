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
    data: {
      byId: {
        // data list of cities
        2643743: {
          name: 'London',
          country: 'GB'
        },
        4119617: {
          name: 'London',
          country: 'US'
        },
        4298960: {
          name: 'London',
          country: 'US'
        },
        4517009: {
          name: 'London',
          country: 'US'
        }
      },
      allIds: [2643743, 4119617, 4298960, 4517009]
    },
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



function locationFinderReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_FIND_FULFILLED':
      const locations = action.payload.list.reduce((acc, value) => {
        let location = {
          name: value.name,
          country: value.sys.country
        };
        let id = value.id;
        acc[id] = location;
        return acc;
      }, {})
      return dotProp.set(state, 'locationFinder.data.byId', locations);
    case 'SET_FIND_VALUE':
      //TODO read docs https://github.com/debitoor/dot-prop-immutable
      return dotProp.set(state, 'locationFinder.ui.inputValue', action.payload);
    default:
      return state
  }
}

export default locationFinderReducer
