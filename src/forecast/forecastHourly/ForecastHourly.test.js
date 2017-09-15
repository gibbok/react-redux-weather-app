import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import ForecastHourly from './ForecastHourly'
import SummaryButton from './SummaryButton'
import DetailsButton from './DetailsButton'
import Details from './Details'
import SummaryChart from './SummaryChart'

describe('<ForecastHourly />', () => {
  it('should render', () => {
    const wrapper = shallow(<ForecastHourly activeTypeReport={'summary'} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should contain SummaryButton', () => {
    const wrapper = shallow(<ForecastHourly />)
    expect(wrapper.find(SummaryButton).length).toBe(1)
    expect(wrapper.find(DetailsButton).length).toBe(1)
    expect(wrapper.find(Details).length).toBe(1)
  })

  it('should render SummaryChart when activeTypeReport is summary', () => {
    const wrapper = shallow(<ForecastHourly activeTypeReport={'summary'} />)
    expect(wrapper.find(SummaryChart).length).toBe(1)
  })
  it('should render Details when activeTypeReport is not summary', () => {
    const wrapper = shallow(<ForecastHourly />)
    expect(wrapper.find(Details).length).toBe(1)
  })
})
