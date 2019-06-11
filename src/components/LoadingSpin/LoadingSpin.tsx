import React from 'react'
import { Spin } from 'antd'

const styles = require('./LoadingSpin.moduls.scss')

export default function LoadingSpin(): React.ReactElement {

  return (
    <div className={styles['spin-wrap']}>
      <Spin size="large"/>
    </div>
  )

}
