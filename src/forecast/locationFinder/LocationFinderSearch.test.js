// @flow
import React from 'react'
import { shallow } from 'enzyme'
import LocationFinderSearch from './LocationFinderSearch'
import toJson from 'enzyme-to-json'
import {Input, IconButton, Icon} from 'material-ui'

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
    expect(shallow(<LocationFinderSearch />).find(Input).length).toBe(1)
    expect(shallow(<LocationFinderSearch />).find(IconButton).length).toBe(1)
    expect(shallow(<LocationFinderSearch />).find(Icon).length).toBe(1)
  })
})
