import { CartList, TotalValueCard } from './components'
import { useShop } from '@/hooks'

export function Cart() {
  const { cart } = useShop()

  return (
    <main className="relative">
      <CartList cart={cart} />

      <TotalValueCard />
    </main>
  )
}
