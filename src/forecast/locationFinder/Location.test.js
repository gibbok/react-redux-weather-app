import React from 'react'
import { render, mount, shallow } from 'enzyme'
import Location from './Location'
import sinon from 'sinon'
import toJson from 'enzyme-to-json'

describe('<Location />', () => {
  it('should render', () => {
    expect(shallow(
      <Location
        id={3067696}
        name='Prague'
        country='CZ'
        onLocationClick='test'
      />).contains(<li><a onClick='test'>Prague, CZ</a></li>)).toBe(true)
  })

  it('should render (snapshot)', () => {
    const wrapper = shallow(
      <Location
        id={3067696}
        name='Prague'
        country='CZ'
        onLocationClick='test'
    />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render to static HTML', function () {
    expect(render(
      <Location
        id={3067696}
        name='Prague'
        country='CZ'
        onLocationClick='test'
      />).text()).toEqual(`Prague, CZ`)
  })

  it('should mount in a full DOM', function () {
    expect(mount(
      <Location
        id={3067696}
        name='Prague'
        country='CZ'
        onLocationClick={() => {}}
      />
    ).find('li > a').length).toBe(1)
  })

  it('should simulate click event', () => {
    const onLinkClick = sinon.spy()
    let wrapper = shallow(<Location onLocationClick={onLinkClick} />)
    wrapper.find('a').simulate('click')
    expect(onLinkClick.called).toEqual(true)
  })
})
