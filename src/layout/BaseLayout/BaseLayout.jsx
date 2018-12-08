import React, {Component, Suspense} from 'react'
import {Layout} from 'antd'
import {Route} from 'react-router-dom'
import styles from './BaseLayout.module.scss'
import {menuConfig} from '@/config/menu.config'

import LoadingSpin from '@/components/LoadingSpin'
import AuthorizedRoute from '@/components/AuthorizedRoute'
import SiderMenu from './SiderMenu'
import MainHeader from './MainHeader'

const {Header, Footer, Sider, Content} = Layout

/**
 * 根据菜单配置生成route
 * @return {Array}
 */
function generateRoute (menuConfig) {
  let result = []
  menuConfig.forEach(config => {
    if(!config.hasOwnProperty('children')) {
      if (!config.hasOwnProperty('auth')) {
        //没有权限设置则生成普通路由
        result.push((
          <Route key={config.path} path={config.path} component={config.component}/>
        ))
      } else {
        //有权限设置则生成权限路由
        result.push((<AuthorizedRoute config={config} key={config.path}/>))
      }
    } else {
      result = [...result,...generateRoute(config.children)]
    }
  })
  return result
}

export default class BaseLayout extends Component {

  state = {
    collapsed: false
  }

  toggleSider = () => this.setState({collapsed: !this.state.collapsed})

  render () {
    const {collapsed} = this.state
    const {match} = this.props
    return (
      <div>
        <Layout>
          <Sider width={256} trigger={null} className={styles[`main-sider`]} collapsed={collapsed} collapsible>
            <SiderMenu collapsed={collapsed}/>
          </Sider>
          <Layout className={styles['main-layout']}>
            <Header className={styles['main-header']}>
              <MainHeader toggleSider={this.toggleSider} collapsed={collapsed}/>
            </Header>
            <Content className={styles['main-content']} style={{position:'relative'}}>
              <Suspense fallback={<LoadingSpin/>}>
                {generateRoute(menuConfig, match)}
              </Suspense>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }

}