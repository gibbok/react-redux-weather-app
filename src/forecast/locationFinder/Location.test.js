import React from 'react'
import { render, mount, shallow } from 'enzyme'
import Location from './Location'

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
})
