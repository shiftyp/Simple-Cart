import React from 'react'
import { createPortal } from 'react-dom'
import { observer } from 'mobx-react-lite'

import { ThingsItem } from './ThingsItem'

export const ThingsCart = observer(({ things }) => {
  return (
    <>
      {createPortal(
        <style>
          {`
          .things_cart {
            position: relative;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            grid-template-rows: auto 1fr;
            justify-content: space-around;
            gap: 10px;
            padding: 10px;
            width: 350px;
            min-height: 300px;
            border: #000 solid 5px;
          }
          .selected_info {
            position: absolute;
            margin: 0 auto;
            left: 0;
            right: 0;
            bottom: 0;
            text-align: center;
          }
          `}
        </style>,
        document.head
      )}
      <div className="things_cart">
        {things.userThingsCart.map((item) => (
          <ThingsItem
            item={item}
            onClick={() => things.removeFromUserCart(item)}
          />
        ))}
        <div className="selected_info">
          selected: {things.userThingsCart.length || 'N/M'}
        </div>
      </div>
    </>
  )
})
