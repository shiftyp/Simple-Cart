import React from 'react'
import { createPortal } from 'react-dom'
import { Thing } from '../Observables/Things'

export const ThingsItem = ({ item, onClick }: {
  item: Thing,
  onClick: () => void
}) => {
  return (<>
  {createPortal((
    <style>
      {`
      .things_item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border: #000 solid 3px;
        cursor: pointer;
      }
      `}
    </style>
    ), document.head)}
    <div onClick={onClick} className="things_item">
      {item.name}
    </div>
  </>)
}