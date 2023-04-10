import { Image, Button } from '@/components/elements'
import { T_Product } from '@/types'
import { convertToMonetaryValue } from '@/utils'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from '@material-tailwind/react'

export type ProductCardProps = {
  product: T_Product
  onDecrementQuantity: () => void
  onIncrementQuantity: () => void
  onRemoveFromCart: () => void
}

export function ProductCard({
  product,
  onDecrementQuantity,
  onIncrementQuantity,
  onRemoveFromCart
}: ProductCardProps) {
  return (
    <Card className="w-full h-full max-h-[25rem]">
      <CardHeader color="gray" className="relative h-full">
        <Image
          src={product.images[0]}
          alt={`Image of: ${product.title} product`}
        />

        <button
          className="absolute text-xl bg-transparent text-blue-gray-900 px-2 py-[5px] rounded-[50%] right-2 top-2 hover:text-red-700 hover:transition-[color] hover:duration-[0.2s]"
          onClick={onRemoveFromCart}
          data-testid="remove-btn"
        >
          <span>✖</span>
        </button>
      </CardHeader>

      <CardBody className="text-center h-max">
        <section className="flex justify-between items-center w-full mt-2 mb-3">
          <Typography variant="h5" className="mb-2 w-full m-0">
            {product.title}
          </Typography>
        </section>

        <Typography>{product.description}</Typography>
      </CardBody>

      <Typography variant="paragraph" className="font-semibold text-center">
        {convertToMonetaryValue(product.price * product.quantity)}
      </Typography>

      <CardFooter className="flex justify-between items-center w-64 m-auto">
        <Button onClick={onDecrementQuantity} data-testid="decrement-btn">
          <span className="font-bold">-</span>
        </Button>

        <p className="text-[1.4rem] text-center px-[30px] py-[5px] rounded-[5px] w-[7rem]">
          {product.quantity}
        </p>

        <Button onClick={onIncrementQuantity} data-testid="increment-btn">
          <span className="font-bold">+</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
