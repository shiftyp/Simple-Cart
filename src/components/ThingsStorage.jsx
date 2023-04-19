import React from 'react'
import { createPortal } from 'react-dom'
import { observer } from 'mobx-react-lite'

import { ThingsItem } from './ThingsItem'

export const ThingsStorage = observer(({ data, select }) => {
  return (
    <>
      {createPortal(
        <style>
          {`
        .things_storage {
          border: #000 solid 5px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          grid-template-rows: auto 1fr;
          justify-content: space-around;
          gap: 10px;
          padding: 10px;
          width: 100%;
          min-height: 500px;
        }
        `}
        </style>
      , document.head)}
      <div className="things_storage">
        {data.map((item) => (
          <ThingsItem key={item.id} item={item} onClick={() => select(item)} />
        ))}
      </div>
    </>
  )
})
