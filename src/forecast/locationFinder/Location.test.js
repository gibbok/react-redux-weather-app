import React from 'react'
// import { shallow, mount, render } from 'enzyme'
import { render, mount, shallow } from 'enzyme'

import Location from './Location'

describe('<Location />', () => {
  const location = <Location
    id={3067696}
    name='Prague'
    country='CZ'
    />
  it('should render', () => {
    // use `onClick={undefined}` because `onLocationClick` property is not defined in `<Location />`
    expect(shallow(location).contains(<li><a onClick={undefined}>Prague, CZ</a></li>)).toBe(true)
  })

  it('should render to static HTML', function () {
    expect(render(location).text()).toEqual(`Prague, CZ`)
  })

  it('should mount in a full DOM', function () {
    expect(mount(location).find('li > a').length).toBe(1)
  })
})
