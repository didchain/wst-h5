import React, { Component } from 'react'

import { List } from 'antd-mobile'

import { ListExtraIcon } from '~/ui/widgets/list-extra-icon'
import {
  comboRoutes,
  PAGE_NESTED_ROOT,
  PRIVACY_POLICY_NESTED,
  ABOUT_TEMP_NESTED,
  ABOUT_INFO_NESTED,
  CUSTOMER_SERVICE_NESTED,
  ISSUE_NESTED,
} from '~Router/routes-cnsts'

const { Item } = List

export default class IndexComp extends Component {
  state = {}

  renderHeader() {
    return <div className='sett-page__header'></div>
  }

  rightOnclick = (params) => {
    const { history } = this.props
    const { path } = params
    if (path && history) {
      history.push(comboRoutes(PAGE_NESTED_ROOT, ABOUT_TEMP_NESTED, path))
    }
  }

  goPrivacyPolicy = () => {
    const { history } = this.props

    if (history) {
      history.push(`${PAGE_NESTED_ROOT}${PRIVACY_POLICY_NESTED}`)
    }
  }

  renderContent() {
    return (
      <div className='sett-page__content'>
        <List className='sett-page__list'>
          <Item
            className='sett-page__list-item'
            extra={
              <ListExtraIcon
                clickFunc={this.rightOnclick.bind(this, {
                  path: CUSTOMER_SERVICE_NESTED,
                })}
              />
            }
          >
            客服
          </Item>
        </List>
        <List className='sett-page__list'>
          <Item
            className='sett-page__list-item'
            extra={
              <ListExtraIcon
                clickFunc={this.rightOnclick.bind(this, { path: ISSUE_NESTED })}
              />
            }
          >
            意见反馈
          </Item>
        </List>
        <List className='sett-page__list'>
          <Item
            className='sett-page__list-item'
            extra={
              <ListExtraIcon
                clickFunc={this.rightOnclick.bind(this, {
                  path: ABOUT_INFO_NESTED,
                })}
              />
            }
          >
            关于我们
          </Item>
        </List>
      </div>
    )
  }

  renderFooter() {
    return (
      <div className='sett-page__footer'>
        <span
          className='privacy-policy'
          onClick={this.goPrivacyPolicy.bind(this)}
        >
          服务协议和隐私政策
        </span>
      </div>
    )
  }

  render() {
    // const { xxx } = this.props

    return (
      <div className='sett-page'>
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    )
  }
}
