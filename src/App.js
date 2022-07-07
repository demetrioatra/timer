import { Component } from 'react'
import './App.css'

class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      number: 0,
      text: 'START'
    }

    // Atributos da classe
    this.timer = null

    // Bind de métodos
    this.start = this.start.bind(this)
    this.clear = this.clear.bind(this)
  }

  start () {
    // Guarda a state
    let state = this.state

    if (this.timer == null) {
      this.timer = setInterval( () => {
        state.number += 0.1
        this.setState(state)
      }, 100)
      state.text = 'PAUSE'
    } else {
      clearInterval(this.timer)
      this.timer = null
      state.text = 'START'
    }

    this.setState(state)
  }

  clear () {
    // Guarda a state
    let state = this.state

    if (this.timer !== null) {
      this.clearInterval(this.timer)
      this.timer = null
    }

    state.number = 0
    state.text = 'START'

    this.setState(this.state)
  }

  render () {
    return (
      <div className = 'App'>

        <img className = 'img' src = { require('./imgs/timer.png') }></img>
        <a className = 'timer'>{ this.state.number.toFixed(1) }</a>

        <div className = 'buttons'>
          <a className = 'btn' onClick = { this.start }>{ this.state.text }</a>
          <a className = 'btn' onClick = { this.clear }>CLEAR</a>
        </div>

      </div>
    )
  }
}

export default App
