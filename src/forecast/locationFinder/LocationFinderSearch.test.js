import React from 'react'
// import { render, mount, shallow } from 'enzyme'
import { mount, shallow } from 'enzyme'
import LocationFinderSearch from './LocationFinderSearch'
import sinon from 'sinon'

describe('<LocationFinderSearch />', () => {
  it('should mount in a full DOM', () => {
    expect(mount(<LocationFinderSearch />).find('form').length).toBe(1)
    expect(mount(<LocationFinderSearch />).find('input[type=\'text\']').length).toBe(1)
    expect(mount(<LocationFinderSearch />).find('input[type=\'submit\']').length).toBe(1)
  })

  it('should accept change', () => {
    // given
    const change = sinon.spy()
    const click = sinon.spy()
    const actualNode = shallow(
      <LocationFinderSearch
        onLocationChange={change}
        onSearchClick={click}
    />)

    // when
    actualNode.find('input[type=\'text\']').simulate('change')
    actualNode.find('input[type=\'submit\']').simulate('click')

    // then
    sinon.assert.called(change)
    sinon.assert.called(click)
  })
})
