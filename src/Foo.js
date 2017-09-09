import React from 'react'

const propTypes = {}

const defaultProps = {}

class Foo extends React.Component {
  render () {
    return (
      <div className='foo'>
        Bar
      </div>
    )
  }
}

Foo.propTypes = propTypes
Foo.defaultProps = defaultProps

export default Foo
