import React from 'react'
import LoginPanel from '@/components/LoginPanel'

import {actions} from './models'

export default function Login({loginModel, dispatch}) {

  function login(values) {
    dispatch(actions.login(values))
  }


  return (
    <LoginPanel login={login}/>
  )
}
