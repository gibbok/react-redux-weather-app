import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import DetailsButton from './DetailsButton'

describe('<DetailsButton />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <DetailsButton onClick={() => {}} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
