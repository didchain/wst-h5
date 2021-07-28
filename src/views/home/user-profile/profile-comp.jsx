import React, { Component } from 'react'

export default class ProfileComp extends Component {
  state = {}

  renderHeader() {
    return (
      <div className='user-profile__header'>
        <div>
          <span className='title'>我的</span>
        </div>
        <div className='header-img'></div>
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
      </div>
    )
  }

  renderContent() {
    return <div className='user__content'>Profile Content</div>
  }

  renderFooter() {
    return <div className='user__footer'>Profile Footer</div>
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
      </>
    )
  }
}
