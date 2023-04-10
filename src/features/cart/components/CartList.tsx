import { ProductCard } from './'
import { useShop } from '@/hooks'
import { T_Product, ShopActions } from '@/types'
import { useCallback } from 'react'

export function CartList() {
  const { cart, dispatch } = useShop()

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
    <main className="grid grid-cols-[repeat(auto-fit,minmax(100%,20vw))] md:grid-cols-[repeat(auto-fit,minmax(25rem,20vw))] gap-x-5 gap-y-12 m-10 mx-0 justify-center items-center">
      {cart.length === 0 ? (
        <h1 className="text-5xl">Nenhum produto no carrinho</h1>
      ) : (
        cart.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDecrementQuantity={handleDecrementQuantity(product)}
            onIncrementQuantity={handleIncrementQuantity(product)}
            onRemoveFromCart={handleRemoveFromCart(product)}
          />
        ))
      )}
    </main>
  )
}
