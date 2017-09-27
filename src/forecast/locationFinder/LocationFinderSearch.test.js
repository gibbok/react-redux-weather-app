// @flow
import React from 'react'
import { mount, shallow } from 'enzyme'
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

  // it('should simulate click event on material-ui FlatButton', () => {
  //   const onSearchClick = sinon.spy()
  //   const wrapper = shallow(<FlatButton onClick={onSearchClick} />)
  //   console.log(wrapper.debug())
  //   wrapper.find('FlatButton').dive().find('button').simulate('click')
  //   expect(onSearchClick.called).toEqual(true)
  // })

  // it('should mount in a full DOM', () => {
  //   expect(mount(<LocationFinderSearch />).find('form').length).toBe(1)
  //   expect(mount(<LocationFinderSearch />).find('input[type=\'text\']').length).toBe(1)
  //   expect(mount(<LocationFinderSearch />).find('input[type=\'submit\']').length).toBe(1)
  // })

  // it('should simulate change event on input of type text', () => {
  //   const onLocationChange = sinon.spy()
  //   const wrapper = shallow(<LocationFinderSearch onLocationChange={onLocationChange} />)
  //   wrapper.find('input[type=\'text\']').simulate('change')
  //   expect(onLocationChange.called).toEqual(true)
  // })

  // it('should simulate click event on input of type submit', () => {
  //   const onSearchClick = sinon.spy()
  //   const wrapper = shallow(<LocationFinderSearch onSearchClick={onSearchClick} />)
  //   wrapper.find('input[type=\'submit\']').simulate('click')
  //   expect(onSearchClick.called).toEqual(true)
  // })
})
