import { Button, Image } from '@/components/elements'
import { CartIcon, StarIcon } from '@/components/icons'
import { ShopActions } from '@/features/shop_context/reducer'
import { useShop } from '@/hooks'
import { T_Product } from '@/types'
import { convertToMonetaryValue } from '@/utils'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from '@material-tailwind/react'

export function ProductCard({ product }: { product: T_Product }) {
  const { dispatch } = useShop()

  const handleAddItemToCart = (product: T_Product) => {
    return function () {
      dispatch({
        type: ShopActions.ADD_TO_CART,
        payload: product
      })
    }
  }

  return (
    <Card data-testid="product-card" className="w-full h-full max-h-[25rem]">
      <CardHeader color="gray" className="relative h-56">
        <Image
          src={product.images[0]}
          alt={`Image of: ${product.title} product`}
        />
      </CardHeader>

      <CardBody className="text-center h-max">
        <section className="flex justify-between items-center w-full mt-2 mb-3">
          <Typography variant="h5" className="mb-2 w-full m-0">
            {product.title}
          </Typography>

          <Rating rating={product.rating} />
        </section>

        <Typography>{product.description}</Typography>
      </CardBody>

      <CardFooter divider className="flex items-center justify-between py-3">
        <Price price={product.price} />

        <Button size="sm" onClick={handleAddItemToCart(product)}>
          <CartIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex justify-between items-stretch w-full max-w-[3.4rem]">
      <StarIcon />
      <span className="text-lg">{rating.toFixed(1)}</span>
    </div>
  )
}

function Price({ price }: { price: number }) {
  return (
    <Typography variant="paragraph" className="font-semibold">
      {convertToMonetaryValue(price)}
    </Typography>
  )
}
