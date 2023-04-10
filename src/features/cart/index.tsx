import { CartList, TotalValueCard } from './components'

export function Cart() {
  return (
    <main className="relative">
      <CartList />

      <TotalValueCard />
    </main>
  )
}
