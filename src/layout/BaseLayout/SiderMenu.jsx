import React from 'react'
import {Menu, Icon} from 'antd'
import styles from './BaseLayout.module.scss'
import {Link} from 'react-router-dom'
import {menuConfig, menuHeaderTitle} from '@/config/menu.config'

const {SubMenu} = Menu

/**
 * 根据路由配置生成侧边栏菜单
 * @return {Array}
 */
function generateMenuItem (menuConfig) {
  const result = []
  menuConfig.forEach(config => {
    //hideInMenu代表该菜单项不出现在菜单栏中
    if (!config.hideInMenu) {
      //有子菜单但隐藏子菜单或者没有子菜单
      if ((config.hasOwnProperty('children') && config.hideChildrenInMenu) || (!config.hasOwnProperty('children'))) {
        result.push((
          <Menu.Item key={config.name}>
            {
              config.icon ? <Icon type={config.icon}/> : null
            }
            {
              config.path && <Link to={config.path} style={{position:'absolute',left:0,top:0,bottom:0,right:0}}/>
            }
            <span>{config.name}</span>
          </Menu.Item>
        ))
        //有子菜单且不隐藏子菜单
      } else if (config.hasOwnProperty('children') && !config.hideChildrenInMenu) {
        result.push((
          <SubMenu key={config.name} title={
            <span>
              {
                config.icon ? <Icon type={config.icon}/> : null
              }
              <span>{config.name}</span>
            </span>
          }>
            {generateMenuItem(config.children)}
          </SubMenu>
        ))
      }
    }
  })
  return result
}

function SiderMenu () {
  return (
    <>
      <div className={styles['sider-menu-header']}>
        {menuHeaderTitle}
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {generateMenuItem(menuConfig)}
      </Menu>
    </>
  )
}

export default SiderMenu