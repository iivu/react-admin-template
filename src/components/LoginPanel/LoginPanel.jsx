import React, {Component} from 'react'
import {Form, Tab} from 'antd'
import styles from './LoginPanel.module.scss'

import LoginPanelTitle from './LoginPanelTitle.jsx'

class LoginPanel extends Component {

  render () {
    const {form} = this.props
    return (
      <>
        <LoginPanelTitle/>
        <div className={styles['login-panel-wrapper']}>

        </div>
      </>
    )
  }

}

export default Form.create()(LoginPanel)