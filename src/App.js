import React, {Component} from 'react'
import './App.scss'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginLayout from './layout/LoginLayout'
import BaseLayout from './layout/BaseLayout'
import {getAuth} from '@/config/authority'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route path="/user" component={LoginLayout}/>
          <Route path="/" render={() => {
            if (getAuth()) {
              return <BaseLayout/>
            } else {
              return <Redirect to="/user/login"/>
            }
          }}/>
        </Switch>
      </div>
    )
  }
}

export default App
