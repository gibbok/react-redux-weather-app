// @flow
import React from 'react'
import { shallow } from 'enzyme'
import LocationFinderSearch from './LocationFinderSearch'
import sinon from 'sinon'
import toJson from 'enzyme-to-json'
import {FlatButton, TextField} from 'material-ui'

describe('<LocationFinderSearch />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <LocationFinderSearch
        onLocationChange={() => {}}
      />
      )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render material-ui', () => {
    expect(shallow(<LocationFinderSearch />).find(TextField).length).toBe(1)
    expect(shallow(<LocationFinderSearch />).find(FlatButton).length).toBe(1)
  })

  it('should simulate change event on material-ui TextField', () => {
    const onLocationChange = sinon.spy()
    const wrapper = shallow(<LocationFinderSearch onLocationChange={onLocationChange} />)
    wrapper.find(TextField).simulate('change')
    expect(onLocationChange.called).toEqual(true)
  })

  it('should simulate click event on material-ui FlatButton', () => {
    const onSearchClick = sinon.spy()
    const wrapper = shallow(<LocationFinderSearch onSearchClick={onSearchClick} />)
    wrapper.find(FlatButton).simulate('click')
    expect(onSearchClick.called).toEqual(true)
  })

  it('should simulate onKeyPress event on material-ui TextField', () => {
    const onLocationKeyPress = sinon.spy()
    const wrapper = shallow(<LocationFinderSearch onLocationKeyPress={onLocationKeyPress} />)
    wrapper.find(TextField).simulate('keypress')
    expect(onLocationKeyPress.called).toEqual(true)
  })
})
