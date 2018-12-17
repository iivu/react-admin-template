import React from 'react'
import LoginPanel from '@/components/LoginPanel'

import {actions} from './models'

export default function Login({loginModel, dispatch}) {

  const {loading} = loginModel

  function login(values) {
    dispatch(actions.login(values))
  }


  return (
    <LoginPanel login={login} loading={loading}/>
  )
}
