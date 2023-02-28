import { T_Product } from '@/types'
import { Dispatch } from 'react'

export enum ShopActions {
  'ADD_TO_CART' = 'ADD_TO_CART',
  'REMOVE_FROM_CART' = 'REMOVE_FROM_CART',
  'INCREMENT_ITEM_QUANTITY' = 'INCREMENT_ITEM_QUANTITY',
  'DECREMENT_ITEM_QUANTITY' = 'DECREMENT_ITEM_QUANTITY'
}

export type ShopStateProps = {
  cart: T_Product[]
  products: T_Product[]
}

export type ShopActionProps = {
  type: ShopActions
  payload: T_Product
}

export type ShopContextProps = {
  state: ShopStateProps
  dispatch: Dispatch<ShopActionProps>
}
