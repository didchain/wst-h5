/**
 * 21-07-29 18:31 Thursday
 * This file used define the module about/cust-service functions.
 */

import React from 'react'

import { useHistory } from 'react-router-dom'

import { WhiteSpace, WingBlank, Flex } from 'antd-mobile'

export default function CustomService(props) {
  let history = useHistory()

  return (
    <WingBlank className='about-custom-service' size='lg'>
      <WhiteSpace size='xl' />
      <h3>域世安(安徽)</h3>
      <WhiteSpace size='md' />
      <p>如使用过程中遇到问题请通过以下方式联系我们:</p>
      <p>ysa@163.com</p>
    </WingBlank>
  )
}
