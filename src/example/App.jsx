import { Component } from 'react'

import { Flex, TabBar, WhiteSpace } from 'antd-mobile'

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

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'tabHome',
      fullScreen: true,
    }
  }

  setTabState = (tabKey) => {
    console.log('>>>>>>>>>>>>>>>', tabKey)
    this.setState({ selectedTab: tabKey })
  }

  renderContent() {
    return (
      <div className='example'>
        <div className='example-header'>
          <h3>Hello</h3>
        </div>
        <div className='example-content'>
          <div>Content</div>
        </div>
      </div>
    )
  }

  renderTabBar() {
    return <div></div>
  }

  render() {
    return (
      <div
        className='example-root'
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
            <div className='home'>Home</div>
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
            <div className='home'>San</div>
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
            <div className='home'>我的</div>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
