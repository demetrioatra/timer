import { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className = 'App'>

        <img className = 'img' src = { require('./imgs/timer.png') }></img>
        <a className = 'timer'>0.0</a>

        <div className = 'buttons'>
          <a className = 'btn'>START</a>
          <a className = 'btn'>CLEAR</a>
        </div>

      </div>
    )
  }
}

export default App
