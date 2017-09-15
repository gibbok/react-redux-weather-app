import React from 'react'
import configureStore from 'redux-mock-store'
import NavigationContainer from './NavigationContainer'
import toJson from 'enzyme-to-json'
import {shallow} from 'enzyme'

describe('<NavigationContainer />', () => {
  it('should render', () => {
    const initialState = {
      navigationReducer: {
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
        }}
    }
    const mockStore = configureStore()
    const store = mockStore(initialState)
    const wrapper = shallow(<NavigationContainer store={store} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
