import React, {Component} from 'react'
import './App.scss'
import {Switch,Route} from 'react-router-dom'
import LoginLayout from './layout/LoginLayout'
import BaseLayout from './layout/BaseLayout'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route path="/user" component={LoginLayout}/>
          <Route path="/" component={BaseLayout}/>
        </Switch>
      </div>
    )
  }
}

export default App
