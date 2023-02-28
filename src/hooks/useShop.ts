import { ShopContext } from '@/features/shop_context'
import { useContext } from 'react'

export function useShop() {
  const shopContext = useContext(ShopContext)
  const state = shopContext.state
  const dispatch = shopContext.dispatch

  return { ...state, dispatch }
}
