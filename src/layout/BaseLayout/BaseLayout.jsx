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

  render () {
    return (
      <div>
        <Layout>
          <Sider width={256} trigger={null} className={styles[`main-sider`]}>
            <SiderMenu/>
          </Sider>
          <Layout className={styles['main-layout']}>
            <Header className={styles['main-header']}>
              <MainHeader/>
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