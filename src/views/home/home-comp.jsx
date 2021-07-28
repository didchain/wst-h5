import React, { Component } from 'react'

import locationIcon from '~Assets/icons/location_on.png'
import qrcodeImg from '~Assets/images/qr-placeholder.jpg'

export default class IndexComp extends Component {
  state = {}

  renderHeader() {
    return (
      <div className='home-page__header'>
        <div className='app-header-title'>区块链身份证</div>
        <div className='app-header-location'>
          <img src={locationIcon} alt='' />
          <span>北京</span>
        </div>
      </div>
    )
  }

  renderIdAddress() {
    return (
      <div className='home-page__address'>
        <span className='id-label'>身份地址:</span>
        <span className='id-address'>
          0x01dc42c9A940a2517b23fd9a3C26C2F30935da59
        </span>
      </div>
    )
  }

  renderQRContainer() {
    return (
      <div className='home-qrcode__container'>
        <div className='qrcode-box'>
          <div className='inner-box'>
            <img className='qrcode-img' src={qrcodeImg} />
          </div>
        </div>
        <div className='qrcode-tips'>
          <span>身份证二维码被锁定请输入二维码解锁</span>
        </div>
      </div>
    )
  }

  renderFooter(className) {
    return (
      <div className={`${className} home-page__footer`}>
        <div className='card-title'>
          <span>便民服务</span>
        </div>
        <div className='card-split'></div>
        <div className='home-card-body'>
          <div>
            <div className='serv-icon serv-icon-notice'></div>
            <span className='serv-item-title'>公告</span>
          </div>
          <div>
            <div className='serv-icon serv-icon-hospital'></div>
            <span className='serv-item-title'>挂号预约</span>
          </div>
          <div>
            <div className='serv-icon serv-icon-hotel'></div>
            <span className='serv-item-title'>酒店预约</span>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { className } = this.props

    console.log('>>>>>>>>>>>', className)
    return (
      <>
        <div className={className}>
          {this.renderHeader()}
          {this.renderIdAddress()}
          {this.renderQRContainer()}
        </div>
        <div style={{ height: '1em' }}></div>
        {this.renderFooter(className)}
      </>
    )
  }
}
