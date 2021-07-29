/**
 * 21-07-29 16:38 Thursday
 * This file used define the module ui/widgets/list-extra-icon functions.
 */

import React from 'react'

export default function ListExtraIcon({ className, clickFunc }) {
  let _clzName = className
    ? `am-list-extra-box ${className}`
    : 'am-list-extra-box'
  return (
    <div className={_clzName}>
      <div className='list-extra-space'></div>
      <div
        className='cust-icon cn-next-seqare'
        onClick={
          typeof clickFunc === 'function'
            ? (e) => {
                e.preventDefault()
                clickFunc()
              }
            : (e) => {
                e.preventDefault()
              }
        }
      ></div>
    </div>
  )
}
