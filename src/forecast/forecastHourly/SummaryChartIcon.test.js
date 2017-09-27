// @flow
import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import SummaryChartIcon from './SummaryChartIcon'

describe('<SummaryChartIcon />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <SummaryChartIcon
        payload={{weatherIconCode: 200}} />
      )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
