import React from 'react'
import {Icon} from 'antd'

export default {
  username: {
    props: {
      size: 'large',
      prefix: <Icon type="user"/>,
      placeholder: '账号',
    },
    rules: [
      {
        required: true,
        message: '请输入正确的账号',
      },
    ]
  },
  password: {
    props: {
      size: 'large',
      prefix: <Icon type="lock"/>,
      type: 'password',
      placeholder: '密码',
    },
    rules: [
      {
        required: true,
        message: '请输入正确的密码!',
      },
    ],
  },
  picCaptcha: {
    props: {
      size: 'large',
      prefix: <Icon type="safety"/>,
      placeholder: '验证码',
    },
    rules: [
      {
        required: true,
        message: '请输入正确的验证码！',
      },
    ],
  }
}

