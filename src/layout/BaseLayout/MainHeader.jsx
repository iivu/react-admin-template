import React from 'react'
import {Icon} from 'antd'
import styles from './BaseLayout.module.scss'


function MainHeader () {
  return (
    <div className={styles['main-header-wrap']}>
      <Icon type="menu-fold" className={styles['menu-toggle-icon']}/>
    </div>
  )
}

export default MainHeader