import React from 'react'

const Foo = () => ({
  render () {
    return (
      <p onClick={this.props.onClick}>I am not a very smart component...</p>
    )
  }
})

export default Foo
