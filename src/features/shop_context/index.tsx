import { T_Product } from '@/types'
import { createContext, PropsWithChildren, useReducer } from 'react'
import { shopReducer } from './reducer'
import { ShopContextProps, ShopStateProps } from './types'

export const initialShopState: ShopStateProps = {
  cart: [] as T_Product[],
  products: [] as T_Product[]
}

export const ShopContext = createContext({} as ShopContextProps)
const Provider = ShopContext.Provider

export function ShopContextProvider({ children }: PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(shopReducer, initialShopState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
