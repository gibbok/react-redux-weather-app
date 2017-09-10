import React from 'react'
import {shallow} from 'enzyme'
import Navigation from './Navigation'
import { NavLink } from 'react-router-dom'

describe('<Navigation />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Navigation
        onClick={'test'}
        id={1}
        title={'test title'}
        tooltip={'test tooltop'}
        url={'/map'}
       />
      )
    expect(wrapper.contains(
      <div onClick='test' alt='test tooltop'>
        <NavLink to='/map'
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
          activeClassName='active'>
          test title
        </NavLink>
      </div>
    )).toBe(true)
  })

  it('should should render one <NavLink /> component', () => {
    const wrapper = shallow(
      <Navigation
        onClick={'test'}
        id={1}
        title={'test title'}
        tooltip={'test tooltop'}
        url={'/map'}
     />
    )
    expect(wrapper.find(NavLink).length).toBe(1)
  })
})
