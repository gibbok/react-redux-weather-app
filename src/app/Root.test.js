import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Root from './Root'
import store from './store'

describe('<Root />', () => {
  it('should render', () => {
    const wrapper = shallow(<Root store={store} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
