import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import SummaryButton from './SummaryButton'

describe('<SummaryButton />', () => {
  it('should render', () => {
    const wrapper = shallow(<SummaryButton />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
