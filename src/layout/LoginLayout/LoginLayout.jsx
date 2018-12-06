import React, {Component} from 'react'
import styles from './LoginLayout.module.scss'

import LoginPanel from '@/components/LoginPanel'

export default class LoginLayout extends Component {

  render () {
    return (
      <div className={styles['wrapper']}>
        <LoginPanel/>
      </div>
    )
  }

}