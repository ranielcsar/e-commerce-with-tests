import { ProductCard } from './'
import { useShop } from '@/hooks'
import { T_Product, ShopActions } from '@/types'
import { useCallback } from 'react'

export type CartList = {
  cart: T_Product[]
}

export function CartList({ cart }: CartList) {
  const { dispatch } = useShop()

  const handleIncrementQuantity = useCallback((product: T_Product) => {
    return function () {
      dispatch({
        type: ShopActions.INCREMENT_ITEM_QUANTITY,
        payload: product
      })
    }
  }, [])

  const handleDecrementQuantity = useCallback((product: T_Product) => {
    return function () {
      dispatch({
        type: ShopActions.DECREMENT_ITEM_QUANTITY,
        payload: product
      })
    }
  }, [])

  const handleRemoveFromCart = useCallback((product: T_Product) => {
    return function () {
      dispatch({
        type: ShopActions.REMOVE_FROM_CART,
        payload: product
      })
    }
  }, [])

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(27rem,1fr))] gap-5 mx-16 mb-[10rem] w-full">
      {cart.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDecrementQuantity={handleDecrementQuantity(product)}
          onIncrementQuantity={handleIncrementQuantity(product)}
          onRemoveFromCart={handleRemoveFromCart(product)}
        />
      ))}
    </section>
  )
}
