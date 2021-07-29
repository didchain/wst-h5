/**
 * 21-07-28 11:04 Wednesday
 * This file used define the module layouts/page-layout functions.
 */

import React from 'react'

import { useHistory, Redirect, Switch, Route } from 'react-router-dom'

import { NavBar, Icon, Flex } from 'antd-mobile'

import { RouteFallRedirectRoot } from '~Router'

import DEF_ROOT, {
  PAGE_NESTED_ROOT,
  SETT_NESTED_ROOT,
  PRIVACY_POLICY_NESTED,
  ABOUT_TEMP_NESTED,
} from '~Router/routes-cnsts'

import SettIndexPage from '~Views/sett'

import { PrivacyPolicy } from '~/views/privacy-policy'
import AboutTempRouter from '~Views/about'

export default function PageLayout(props) {
  let history = useHistory()

  return (
    <div className='page-layout'>
      <NavBar
        className='page-navbar'
        mode='light'
        icon={<Icon type='left' color='#000000' />}
        onLeftClick={() => {
          console.log('goback')
          history.go(-1)
        }}
      >
        Title
      </NavBar>

      <Switch>
        <Route
          path={`${PAGE_NESTED_ROOT}${SETT_NESTED_ROOT}`}
          component={SettIndexPage}
        />
        <Route
          path={`${PAGE_NESTED_ROOT}${PRIVACY_POLICY_NESTED}`}
          exact
          component={PrivacyPolicy}
        />
        <Route
          path={`${PAGE_NESTED_ROOT}${ABOUT_TEMP_NESTED}`}
          component={AboutTempRouter}
        />
        <Route component={RouteFallRedirectRoot} />
      </Switch>
    </div>
  )
}
