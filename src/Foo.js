import React from 'react'

const Foo = React.createClass({
  render () {
    return (
      <p onClick={this.props.onClick}>I am not a very smart component...</p>
    )
  }
})

export default Foo
