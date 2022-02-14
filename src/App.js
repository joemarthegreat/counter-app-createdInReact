import React, { Component } from "react"
import "./App.css"
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  render() {
    return (
      <div className="container">
        <div className="counter">
          <h3>Simple Counter App</h3>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Click to Increase</button>
        </div>
      </div>
    )
  }
}