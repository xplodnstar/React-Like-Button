import React, { Component } from 'react'
import archer from './archer.gif'
import still from './archer.jpg'
import './App.css'

class App extends Component {
  state = {
    gulp: 0,
    tag: 'gulps',
    archer: still
  }

  handleClick = () => {
    if (this.state.gulp === 0) {
      this.setState({
        tag: 'gulp'
      })
    } else {
      this.setState({
        tag: 'gulps'
      })
    }
    let drinks = Number(this.state.gulp + 1)
    this.setState({
      gulp: drinks,
      archer: archer
    })

    setTimeout(() => {
      this.setState({
        archer: still
      })
    }, 3000)
  }

  render() {
    return (
      <div className="isis">
        <img src={this.state.archer} className="App-gif" alt="Archer" id="gif" />
        <p>
          Click to take a drink.
        </p>
        <button onClick={this.handleClick}>{this.state.gulp} {this.state.tag}</button>
      </div >
    );
  }
}

export default App;
