import React from 'react'
import PromiseComponent from './PromiseComponent'

/**
 * 权限检查函数
 */
export default function checkPermission (auth, target, noMatch) {

  if (!auth) return target

  if (typeof auth === 'boolean') {
    return auth ? target : noMatch
  }

  if(typeof auth === 'function') {
    if(isPromise(auth())) {
      return <PromiseComponent promise={auth()} target={target} noMatch={noMatch}/>
    } else {
      return auth() ? target : noMatch
    }
  }

  if(isPromise(auth)) {
    return <PromiseComponent promise={auth} target={target} noMatch={noMatch}/>
  }



}


function isPromise (obj) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  )
}