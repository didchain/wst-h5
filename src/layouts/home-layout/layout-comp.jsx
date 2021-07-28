import React, { Component } from 'react'

import { Flex, TabBar, WhiteSpace } from 'antd-mobile'

import HomePage from '~Views/home'
import { ScanPage } from '~Views/home/scan-page'
import UserProfile from '~Views/home/user-profile'

const iconBaseStyle = {
  width: '22px',
  height: '22px',
  backgroundPosition: 'center center',
  backgroundSize: '21px 21px',
  backgroundRepeat: 'no-repeat',
}

const midIconStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '16px',
  backgroundSize: 'cover',
  background: 'url(assets/icons/qr_tab_on.png) no-repeat center center',
}

export default class LayoutComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'tabHome',
      fullScreen: true,
    }
  }

  render() {
    // const { xxx } = this.props

    return (
      <div
        className='home-root'
        style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}
      >
        <TabBar
          unselectedTintColor='#949494'
          tintColor='#33A3F4'
          barTintColor='white'
        >
          <TabBar.Item
            title='首页'
            key='tabHome'
            icon={
              <div
                style={{
                  ...iconBaseStyle,
                  background: 'url(assets/icons/home_tab_off.png)',
                }}
              />
            }
            selectedIcon={
              <div
                className='brave-tabbar-selected'
                style={{
                  ...iconBaseStyle,
                  background: 'url(assets/icons/home_tab_on.png)',
                }}
              />
            }
            selected={this.state.selectedTab === 'tabHome'}
            // eslint-disable-next-line react/jsx-no-bind
            onPress={() => {
              this.setState({ selectedTab: 'tabHome' })
            }}
          >
            <div className='home-container'>
              <HomePage className='home-layout' />
            </div>
          </TabBar.Item>

          <TabBar.Item
            title=''
            key='tabScan'
            icon={
              <div
                style={{
                  ...midIconStyle,
                }}
              />
            }
            selectedIcon={
              <div
                className='brave-tabbar-selected'
                style={{
                  ...midIconStyle,
                }}
              />
            }
            selected={this.state.selectedTab === 'tabScan'}
            // eslint-disable-next-line react/jsx-no-bind
            onPress={() => {
              this.setState({ selectedTab: 'tabScan' })
            }}
          >
            <ScanPage />
          </TabBar.Item>

          <TabBar.Item
            title='我的'
            key='tabProfile'
            icon={
              <div
                style={{
                  ...iconBaseStyle,
                  background: 'url(assets/icons/user_tab_off.png)',
                }}
              />
            }
            selectedIcon={
              <div
                className='brave-tabbar-selected'
                style={{
                  ...iconBaseStyle,
                  background: 'url(assets/icons/user_tab_on.png)',
                }}
              />
            }
            selected={this.state.selectedTab === 'tabProfile'}
            // eslint-disable-next-line react/jsx-no-bind
            onPress={() => {
              this.setState({ selectedTab: 'tabProfile' })
            }}
          >
            <UserProfile />
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
