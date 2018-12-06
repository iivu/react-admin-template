import React from 'react'
import {Form, Input, Row, Col} from 'antd'
import styles from './LoginPanel.module.scss'

const FormItem = Form.Item

export default function LoginFormItem ({type, config, form}) {

  const {getFieldDecorator} = form
  const {props, ...options} = config

  switch (type) {
    case 'username':
    case 'password':
      return (
        <FormItem>
          {
            getFieldDecorator(type, options)(<Input {...props}/>)
          }
        </FormItem>
      )
    case 'picCaptcha':
      return (
        <FormItem>
          {
            <Row gutter={8}>
              <Col span={16}>
                {
                  getFieldDecorator(type, options)(<Input {...props}/>)
                }
              </Col>
              <Col span={8}>
                <div className={styles.getPicCaptcha}>

                </div>
              </Col>
            </Row>
          }
        </FormItem>
      )
  }

}
