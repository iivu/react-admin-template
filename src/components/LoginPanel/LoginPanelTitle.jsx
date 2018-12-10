import React from 'react'
import {Link} from 'react-router-dom'
import styles from './LoginPanel.module.scss'

export default function LoginPanelTitle ({title}) {
  return (
    <div className={styles.title}>{title}</div>
  )
}

LoginPanelTitle.defaultProps = {
  title: 'Admin-Template',
}
