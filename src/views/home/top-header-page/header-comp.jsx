import React, { Component } from 'react'

export default class HeaderComp extends Component {
  state = {}

  renderHeader() {
    return <div className='top__header'> Header Header</div>
  }

  renderContent() {
    return <div className='top__content'>Header Content</div>
  }

  renderFooter() {
    return <div className='top__footer'>Header Footer</div>
  }

  render() {
    // const { xxx } = this.props

    return (
      <div className='top'>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    )
  }
}
