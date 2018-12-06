import React from 'react'
import styles from './LoginLayout.module.scss'
import {Route,Redirect,Switch} from 'react-router-dom'

import Login from '@/pages/Login'

export default function LoginLayout ({match}) {

  return (
    <div className={styles['wrapper']}>
      <Switch>
        <Route path={`${match.url}/login`} component={Login}/>
        <Redirect to="/user/login"/>
      </Switch>
    </div>
  )

}