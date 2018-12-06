import React from 'react'
import {Link} from 'react-router-dom'
import styles from './LoginPanel.module.scss'

export default function LoginPanelTitle ({title}) {
  return (
    <Link to="/">
      <span className={styles.title}>{title}</span>
    </Link>
  )
}

LoginPanelTitle.defaultProps = {
  title:'Admin-Template',
}
