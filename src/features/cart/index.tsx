import { CartList, TotalValueCard } from './components'
import { useShop } from '@/hooks'

export function Cart() {
  const { cart } = useShop()

  return (
    <>
      <CartList cart={cart} />

      <TotalValueCard />
    </>
  )
}
