import React, { Component } from 'react'

import { Redirect, Switch, Route } from 'react-router-dom'

import { WhiteSpace, WingBlank } from 'antd-mobile'

import { RouteFallRedirectRoot } from '~Router'

import comboRoutes, {
  PAGE_NESTED_ROOT,
  ABOUT_TEMP_NESTED,
  ABOUT_INFO_NESTED,
  CUSTOMER_SERVICE_NESTED,
  ISSUE_NESTED,
} from '~Router/routes-cnsts'

import { AboutInfo } from './info'
import { CustomService } from './cust-service'
import { IssuePage } from './issue'

import bgImg from '~Assets/images/bg@3x.png'

export default class TemplateComp extends Component {
  state = {}

  renderHeader() {
    return (
      <WingBlank className='about-template__header' size='lg'>
        <WhiteSpace size='lg' />
        <div className='about-header-logo'></div>
        <WhiteSpace size='lg' />
      </WingBlank>
    )
  }

  renderRooutes() {
    return <div className='template__content'></div>
  }

  renderFooter() {
    return (
      <Switch>
        <Route
          path={comboRoutes(
            PAGE_NESTED_ROOT,
            ABOUT_TEMP_NESTED,
            ABOUT_INFO_NESTED
          )}
          component={AboutInfo}
          exact
        />
        <Route
          path={comboRoutes(
            PAGE_NESTED_ROOT,
            ABOUT_TEMP_NESTED,
            CUSTOMER_SERVICE_NESTED
          )}
          component={CustomService}
          exact
        />
        <Route
          path={comboRoutes(PAGE_NESTED_ROOT, ABOUT_TEMP_NESTED, ISSUE_NESTED)}
          component={IssuePage}
          exact
        />
        <Route Component={RouteFallRedirectRoot} />
      </Switch>
    )
  }

  render() {
    // const { xxx } = this.props

    return (
      <div className='about-template'>
        <div className='inner-container'>
          {this.renderHeader()}
          {this.renderRooutes()}
          {this.renderFooter()}
        </div>
      </div>
    )
  }
}
