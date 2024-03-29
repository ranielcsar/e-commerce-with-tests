import { useShop } from '@/hooks'
import { convertToMonetaryValue } from '@/utils'
import { Card } from '@material-tailwind/react'

export function TotalValueCard() {
  const { cart } = useShop()

  let totalValue = 0

  cart.forEach((product) => {
    const productTotal = product.price * product.quantity
    totalValue += productTotal
  })

  return (
    <Card className="absolute right-[5rem] top-[20vw] w-max flex items-center justify-between text-2xl border bg-[white] m-auto px-[35px] py-5 border-solid">
      <span>Total:</span>
      <strong className="text-[color:var(--accent)] ml-2.5">
        {convertToMonetaryValue(totalValue)}
      </strong>
    </Card>
  )
}
