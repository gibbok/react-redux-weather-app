import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import CustomTooltip from './CustomTooltip'

describe('<CustomTooltip />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <CustomTooltip
        payload={
        [
          {
            momentId: '2017:8:14:4',
            timespan: 1505401200,
            temp: 23,
            weatherIconCode: 500,
            rain: 0.15,
            day: 'Thu, Sep 14',
            hour: '05 PM'
          }
        ]}
     />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
