import React from 'react'
import {Icon} from 'antd'
import styles from './BaseLayout.module.scss'


function MainHeader ({toggleSider,collapsed}) {
  return (
    <div className={styles['main-header-wrap']}>
      <Icon type={collapsed ? 'menu-unfold':'menu-fold'} className={styles['menu-toggle-icon']} onClick={toggleSider}/>
    </div>
  )
}

export default MainHeader