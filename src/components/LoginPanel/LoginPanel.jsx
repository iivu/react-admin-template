import React, {Component} from 'react'
import {Form, Tab, Button} from 'antd'
import styles from './LoginPanel.module.scss'
import FormItemConfig from './FormItemConfig'
import LoginFormItem from './LoginFormItem'

import LoginPanelTitle from './LoginPanelTitle.jsx'
import {login} from '@/services/api'

class LoginPanel extends Component {

  onLogin = event => {
    event.preventDefault()
    const {form} = this.props
    form.validateFieldsAndScroll((error, values) => {
      if (!error) {
        this.login()
      }
    })
  }

  async login () {
    const res = await login().catch(() => false)
    console.log(res)
  }

  render () {
    const {form} = this.props
    const formItemKeys = Object.keys(FormItemConfig)
    return (
      <>
        <LoginPanelTitle/>
        <div className={styles['login-panel-wrapper']}>
          <Form onSubmit={this.onLogin}>
            {
              formItemKeys.map((key, index) => (
                <LoginFormItem type={key} config={FormItemConfig[key]} form={form} key={index}/>
              ))
            }
            <Button htmlType="submit" type="primary" size="large" style={{width: '100%'}}>Log In</Button>
          </Form>
        </div>
      </>
    )
  }

}

export default Form.create()(LoginPanel)