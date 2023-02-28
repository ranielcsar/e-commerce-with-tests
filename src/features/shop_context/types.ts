import { T_Product } from '@/types'
import { Dispatch } from 'react'
import { ShopActions } from './reducer'

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
