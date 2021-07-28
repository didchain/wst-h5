import React, { PureComponent } from 'react'

import { Switch, Route } from 'react-router-dom'

import DEFAULT_ROOT, { ROOT_PATH, PAGE_NESTED_ROOT } from './routes-cnsts'

import HomeLayout from '~Layouts/home-layout'
import { PageLayout } from '~Layouts/page-layout'

export default class RoutesComp extends PureComponent {
  state = {}

  render() {
    return (
      <Switch>
        <Route path={PAGE_NESTED_ROOT} component={PageLayout} />
        <Route path={ROOT_PATH} component={HomeLayout} />
        <Route component={HomeLayout} exact />
      </Switch>
    )
  }
}
