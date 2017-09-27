// @flow
import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import DetailHour from './DetailHour'
import IconWeather from '../../shared/icon/IconWeather'
import IconWind from '../../shared/icon/IconWind'

describe('<DetailHour />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <DetailHour
        momentId={'2017:8:13:3'}
        timespan={1505260800}
        temp={21.57}
        weatherIconCode={803}
        weatherDescription={'Clouds'}
        windDegree={227.007}
        windSpeed={2.56}
        humidityUnit={'%'}
        humidityValue={63}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should contain one IconWeather component', () => {
    const wrapper = shallow(
      <DetailHour
        momentId={'2017:8:13:3'}
        timespan={1505260800}
        temp={21.57}
        weatherIconCode={803}
        weatherDescription={'Clouds'}
        windDegree={227.007}
        windSpeed={2.56}
        humidityUnit={'%'}
        humidityValue={63}
        />
      )
    expect(wrapper.find(IconWeather).length).toBe(1)
  })

  it('should contain one IconWind component', () => {
    const wrapper = shallow(
      <DetailHour
        momentId={'2017:8:13:3'}
        timespan={1505260800}
        temp={21.57}
        weatherIconCode={803}
        weatherDescription={'Clouds'}
        windDegree={227.007}
        windSpeed={2.56}
        humidityUnit={'%'}
        humidityValue={63}
        />
      )
    expect(wrapper.find(IconWind).length).toBe(1)
  })
})
