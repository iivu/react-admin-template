import React, {Component} from 'react'
import {Layout} from 'antd'
import SiderMenu from './SiderMenu'
import styles from './BaseLayout.module.scss'

const {Header, Footer, Sider, Content} = Layout


export default class BaseLayout extends Component {

  render () {
    return (
      <div>
        <Layout>
          <Sider width={256} trigger={null}>
            <SiderMenu/>
          </Sider>
          <Layout className={styles['main-layout']}>
            <Header className={styles['main-header']}>Header</Header>
            <Content className={styles['main-content']}>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }

}