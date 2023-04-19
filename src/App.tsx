/*<script setup>
import { storeToRefs } from 'pinia'
import { useThingsStore } from './stores/ThingsStore'
import ThingsStorage from './components/ThingsStorage.vue'
import ThingsCart from './components/ThingsCart.vue'
import ItemCart from './components/ItemCart.vue'

const thingsStore = useThingsStore()
const { selected, chooseThings, userThings, userThingsCart } = storeToRefs(thingsStore)

const pushToUserCart = (item) => {
  if (userThingsCart.value.length < 6) {
    thingsStore.pushToUserCart(item)
  }
}

const selectedItem = (item) => (selected.value = item)
</script>

<template>
  <div class="things_carts">
    <ThingsCart />
    <ItemCart />
  </div>
  <div class="things_storages">
    <ThingsStorage :items-data="userThings" @select="pushToUserCart" />
    <ThingsStorage :items-data="chooseThings" @select="selectedItem" />
  </div>
</template>
*/
import React, { useMemo } from 'react'
import { createPortal } from 'react-dom'
import { observer } from 'mobx-react-lite'

import { ThingsStorage } from './components/ThingsStorage'
import { ThingsCart } from './components/ThingsCart'
import { ItemCart } from './components/ItemCart'
import { Things } from './Observables/Things'

const things = new Things()

export const App = observer(() => {
  const pushToUserCart = (item) => {
    if (things.userThingsCart.length < 6) {
      things.pushToUserCart(item)
    }
  }
  
  const selectedItem = (item) => (things.selected = item)
  
  return (
    <>
      {createPortal(
        <style>
          {`
          .things_storages {
            display: flex;
            gap: 10px;
            margin-top: 50px;
          }
          
          .things_carts {
            display: flex;
            justify-content: space-between;
            gap: 10px;
          }
          `}
        </style>,
        document.head
      )}
      <div className="things_carts">
        <ThingsCart things={things} />
        <ItemCart things={things} />
      </div>
      <div className="things_storages">
        <ThingsStorage data={things.userThings} select={pushToUserCart} />
        <ThingsStorage data={things.chooseThings} select={selectedItem} />
      </div>
    </>
  )
})
