import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Foo from './Foo'

describe('<Foo />', () => {
  it('render', () => {
    const wrapper = shallow(
      <Foo>
        <p>I am not a very smart component...</p>
      </Foo>
    )

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a <p> with a static text', () => {
    const fn = () => {}
    const wrapper = shallow(<Foo onClick={fn} />)

    expect(wrapper.contains(
      <p onClick={fn}>I am not a very smart component...</p>
    )).toBe(true)
  })
})
