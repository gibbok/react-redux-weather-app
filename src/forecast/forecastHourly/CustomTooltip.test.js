import React from 'react'
import {mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import CustomTooltip from './CustomTooltip'

describe('<CustomTooltip />', () => {
  it('should mount in a full DOM with rain information', () => {
    const wrapper = mount(
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

  it('should mount in a full DOM without rain information', () => {
    const wrapper = mount(
      <CustomTooltip
        payload={
        [
          {
            momentId: '2017:8:14:4',
            timespan: 1505401200,
            temp: 23,
            weatherIconCode: 500,
            rain: 'N/A',
            day: 'Thu, Sep 14',
            hour: '05 PM'
          }
        ]}
    />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
