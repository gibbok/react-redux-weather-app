import navigationReducer from './navigationReducer'
import * as types from './navigationActionTypes'
// import {setActive} from './navigationActions'
// import { createMomentId } from '../../app/utility'
// import location from '../../app/location'

describe('navigationReducer', () => {
  it('should return the initial state', () => {
    const dataInitialState = {
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

    expect(navigationReducer(undefined, {})).toEqual(dataInitialState)
  })

  it('should render action SET_ACTIVE', () => {
    const dataNextState = {
      navigation: {
        data: [
          {
            id: 'home',
            title: 'Weather',
            tooltip: 'Weather',
            isActive: false,
            url: '/'
          },
          {
            id: 'map',
            title: 'Map',
            tooltip: 'Weather map',
            isActive: true,
            url: '/map'
          }
        ],
        ui: {
          active: 'map'
        }
      }
    }

    expect(navigationReducer(undefined, {
      type: types.SET_ACTIVE,
      payload: 'map'
    })).toEqual(dataNextState)
  })
})
