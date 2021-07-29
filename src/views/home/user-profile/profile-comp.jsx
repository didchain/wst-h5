import React, { Component } from 'react'

import { WhiteSpace, List, Switch } from 'antd-mobile'

import { PAGE_NESTED_ROOT, SETT_NESTED_ROOT } from '~Router/routes-cnsts'

const { Item } = List

export default class ProfileComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skipSecret: false,
    }
  }

  gotoPage = (nestedPath) => {
    const { history } = this.props

    const { location } = history
    const path = `${PAGE_NESTED_ROOT}${nestedPath}`

    if (location && location.pathname !== path) {
      history.push(path)
    }
  }

  renderHeader() {
    return (
      <div className='user-profile__header'>
        <div>
          <span className='title'>我的</span>
        </div>
        <div
          className='header-img'
          onClick={this.gotoPage.bind(this, SETT_NESTED_ROOT)}
        ></div>
      </div>
    )
  }

  renderProfileInfo() {
    return (
      <div className='user-profile__info'>
        <label className='brave-label' htmlFor='#nick'>
          姓名:
        </label>
        <div className='text-val-show'>
          <span id='nick'>新疆喀什</span>
        </div>

        <label className='brave-label' htmlFor='#idcardno'>
          身份证号:
        </label>
        <div className='text-val-show'>
          <span className='id-address address-break-all' id='idcardno'>
            0x01dc42c9A940a2517b23fd9a3C26C2F30935da59
          </span>
        </div>

        {this.renderAuthorbar()}
      </div>
    )
  }

  renderAuthorbar() {
    return (
      <div className='user-profile__author'>
        <label htmlFor='' className='auth-label'>
          授权他人
        </label>
        <div className='cust-icon cn-next-circle'></div>
      </div>
    )
  }

  renderContentList() {
    return (
      <div className='user-profile-list__container'>
        <List
          renderHeader={() => {
            return (
              <div className='user-profile-list__header'>
                <span className='state-label'>状态</span>
                <span className='state-text'>未认证</span>
              </div>
            )
          }}
          className='user-profile-list'
        >
          <Item
            onClick={() => {}}
            extra={
              <>
                <div className='list-extra-space'></div>
                <div className='cust-icon cn-next-seqare'></div>
              </>
            }
          >
            已授权系统
          </Item>
          <Item
            onClick={() => {}}
            extra={
              <>
                <div className='list-extra-space'></div>
                <div className='cust-icon cn-next-seqare'></div>
              </>
            }
          >
            身份管理
          </Item>
          <Item
            extra={
              <>
                <div className='list-extra-space'></div>
                <Switch
                  className='user-profile-switch'
                  checked={this.state.skipSecret}
                  onChange={() => {
                    this.setState({
                      skipSecret: !this.state.skipSecret,
                    })
                  }}
                />
              </>
            }
          >
            免密
          </Item>
        </List>
      </div>
    )
  }

  render() {
    // const { xxx } = this.props

    return (
      <>
        <div className='user-profile'>
          <div className='inner-box'>
            {this.renderHeader()}
            {this.renderProfileInfo()}
          </div>
        </div>
        <WhiteSpace size='lg' />
        {this.renderContentList()}
      </>
    )
  }
}
