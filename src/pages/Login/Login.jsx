import React from 'react'
import LoginPanel from '@/components/LoginPanel'

export default function Login ({loginModel}) {

  function login(values) {
    console.log(values)
  }

  console.log(loginModel)

  return (
    <LoginPanel login={login}/>
  )
}
