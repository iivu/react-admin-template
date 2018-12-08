import React, {Component,Suspense} from 'react'
import {Layout} from 'antd'
import styles from './BaseLayout.module.scss'
import {menuConfig} from '@/config/menu.config'

import LoadingSpin from '@/components/LoadingSpin'
import SiderMenu from './SiderMenu'
import MainHeader from './MainHeader'

const {Header, Footer, Sider, Content} = Layout

function generateRoute () {

}


export default class BaseLayout extends Component {

  state = {
    collapsed: false
  }

  toggleSider = () => this.setState({collapsed:!this.state.collapsed})

  render () {
    const {collapsed} = this.state
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
            <Suspense fallback={<LoadingSpin/>}>
              <Content className={styles['main-content']}>
                Content
              </Content>
            </Suspense>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }

}