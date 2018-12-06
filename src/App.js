import React, {Component} from 'react'
import './App.scss'
//import {Switch} from 'react-router-dom'
import LoginLayout from './layout/LoginLayout'

class App extends Component {
  render () {
    return (
      <div className="App">
        <LoginLayout/>
      </div>
    )
  }
}

export default App
