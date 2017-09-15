import React from 'react'
import {shallow, mount} from 'enzyme'
import toJson from 'enzyme-to-json'
import ForecastDay from './ForecastDay'
import IconWeather from '../../shared/icon/IconWeather'
import sinon from 'sinon'

describe('<ForecastDay />', () => {
  // it('simulate click events', () => {
  //   const onButtonClick = sinon.spy()
  //   const wrapper = mount((
  //     <ForecastDay
  //       onClick={onButtonClick}
  //       date={1504811633838}
  //       tempMin={10}
  //       tempMax={15}
  //       iconCode={200}
  //       weatherDescription={'storm showers'}
  //   />
  //   ))
  //   wrapper.find('button').simulate('click')
  //   expect(onButtonClick.calledOnce).to.equal(true)
  // })

  it('should render', () => {
    const wrapper = shallow(
      <ForecastDay
        onClick={() => {}}
        date={1504811633838}
        tempMin={10}
        tempMax={15}
        iconCode={200}
        weatherDescription={'storm showers'}
      />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should contain a IconWeather component', () => {
    const wrapper = shallow(
      <ForecastDay
        onClick={() => {}}
        date={1504811633838}
        tempMin={10}
        tempMax={15}
        iconCode={200}
        weatherDescription={'storm showers'}
        />
      )
    expect(wrapper.find(IconWeather).length).toBe(1)
  })
})
