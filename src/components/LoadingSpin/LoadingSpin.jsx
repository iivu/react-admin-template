import React from 'react'
import {Spin} from 'antd'
import styles from './LoadingSpin.module.scss'

export default function LoadingSpin () {
  return (
    <div className={styles['spin-wrap']}>
      <Spin size="large"/>
    </div>
  )
}