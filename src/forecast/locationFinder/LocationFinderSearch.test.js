import React from 'react'
import { mount, shallow } from 'enzyme'
import LocationFinderSearch from './LocationFinderSearch'
import sinon from 'sinon'
import toJson from 'enzyme-to-json'

describe('<LocationFinderSearch />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <LocationFinderSearch
        onLocationChange={() => {}}
      />
      )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should mount in a full DOM', () => {
    expect(mount(<LocationFinderSearch />).find('form').length).toBe(1)
    expect(mount(<LocationFinderSearch />).find('input[type=\'text\']').length).toBe(1)
    expect(mount(<LocationFinderSearch />).find('input[type=\'submit\']').length).toBe(1)
  })

  it('should accept change', () => {
    // given
    const change = sinon.spy()
    const actualNode = shallow(
      <LocationFinderSearch
        onLocationChange={change}
    />)
    // when
    actualNode.find('input[type=\'text\']').simulate('change')
    // then
    sinon.assert.called(change)
  })

  it('should accept click on submit', () => {
    const onInputClick = sinon.spy()
    const actualNode = shallow(
      <LocationFinderSearch
        onSearchClick={onInputClick}
    />)
    actualNode.find('input[type=\'submit\']').simulate('click')
    sinon.assert.called(onInputClick)
  })
})
