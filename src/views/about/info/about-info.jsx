/**
 * 21-07-29 18:29 Thursday
 * This file used define the module about/info functions.
 */

import React from 'react'

import { useHistory } from 'react-router-dom'

import { WhiteSpace, WingBlank, Flex } from 'antd-mobile'

export default function AboutInfo(props) {
  let history = useHistory()

  return (
    <WingBlank className='about-info' size='lg'>
      <WhiteSpace size='xl' />
      <h3>域世安(安徽)</h3>
      <WhiteSpace size='md' />
      <p>致力于通过技术手段解决用户隐私泄露问题.</p>
      <p>提供易用的用户唯一身份识别账号体系.</p>
    </WingBlank>
  )
}
