const stateDefault = {
    app: {
        config: {}
    },
    //locationFinder: {
    //    data: [],   // domain data
    //    app: {},    // app state that is specific to the application's behavior
    //    ui: {}      // data that represents how the UI is currently displayed
    //},
    locationFinder: {
        data: {
            byId: {
                // data list of cities
                2643743: {
                    name: "London",
                    country: "GB"
                },
                4119617: {
                    name: "London",
                    country: "US"
                },
                4298960: {
                    name: "London",
                    country: "US"
                },
                4517009: {
                    name: "London",
                    country: "US"
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
};

function app(state = stateDefault, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default app