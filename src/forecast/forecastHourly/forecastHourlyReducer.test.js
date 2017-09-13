import forecastHourlyReducer from './forecastHourlyReducer'
import { createMomentId } from '../../app/utility'
import location from '../../app/location'

describe('forecastHourlyReducer', () => {
  it('should return the initial state', () => {
    const dataInitialState = {
      forecastHourly: {
        data: [],
        app: {
          locationId: location().locationId, // nyc usa
          isFetching: false
        },
        ui: {
          selectedDate: createMomentId(Date.now()),
          activeReportType: 'summary'
        }
      }
    }
    expect(forecastHourlyReducer(undefined, {})).toEqual(dataInitialState)
  })
})
