import React from 'react'
import { createPortal } from 'react-dom'
import { observer } from 'mobx-react-lite'

export const ItemCart = observer(({ things }) => {
  return (
    <>
      {createPortal(
        <style>
          {`
          .item_cart {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 200px;
            font-size: 22px;
            border: #000 solid 5px;
          }
          `}
        </style>,
        document.head
      )}
      <div className="item_cart">{things.selected && things.selected.name}</div>
    </>
  )
})
