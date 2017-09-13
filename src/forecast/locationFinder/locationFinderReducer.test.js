import locationFinderReducer from './locationFinderReducer'

describe('locationFinderReducer', () => {
  it('should return the initial state', () => {
    const dataInitialState = {
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
    expect(locationFinderReducer(undefined, {})).toEqual(dataInitialState)
  })
})
