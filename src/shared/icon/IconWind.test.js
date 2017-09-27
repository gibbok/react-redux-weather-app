// @flow
import React from 'react'
import IconWind from './IconWind'
import {shallow} from 'enzyme'

describe('<IconWind />', () => {
  it('should render', () => {
    const style = {
      display: 'inline-block',
      transform: `rotate(0deg)`
    }
    const wrapper = shallow(<IconWind degree={90} />)
    expect(wrapper.contains(<span style={style}>&#10148;</span>)).toBe(true)
  })
})
