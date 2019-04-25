import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div>
        <div>Contador: <span>{this.props.counter}</span></div>
        <button onClick={this.props.incrementar}>+</button>
        <button onClick={this.props.decrementar}>-</button>
      </div>
    )
  }
}

export default Counter
