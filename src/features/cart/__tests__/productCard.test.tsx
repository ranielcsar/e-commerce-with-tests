import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { ProductCard } from '../components'

function setup() {
  const product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
    quantity: 0
  }

  const onDecrementQuantity = jest.fn()
  const onIncrementQuantity = jest.fn()
  const onRemoveFromCart = jest.fn()

  render(
    <ProductCard
      product={product}
      onDecrementQuantity={onDecrementQuantity}
      onIncrementQuantity={onIncrementQuantity}
      onRemoveFromCart={onRemoveFromCart}
    />
  )

  return { product, onDecrementQuantity, onIncrementQuantity, onRemoveFromCart }
}

function onDecrementTest() {
  const { onDecrementQuantity } = setup()

  const decrementButton = screen.getByTestId('decrement-btn')
  expect(decrementButton).toBeInTheDocument()
  fireEvent.click(decrementButton)
  expect(onDecrementQuantity).toHaveBeenCalledTimes(1)
}

function onIncrementTest() {
  const { onIncrementQuantity } = setup()

  const incrementButton = screen.getByTestId('increment-btn')
  expect(incrementButton).toBeInTheDocument()
  fireEvent.click(incrementButton)
  expect(onIncrementQuantity).toHaveBeenCalledTimes(1)
}

function onRemoveTest() {
  const { onRemoveFromCart } = setup()

  const removeButton = screen.getByTestId('remove-btn')
  expect(removeButton).toBeInTheDocument()
  fireEvent.click(removeButton)
  expect(onRemoveFromCart).toHaveBeenCalledTimes(1)
}

describe('Product on Cart ACTIONS', () => {
  it(
    'should decrement item quantity when click on decrement button',
    onDecrementTest
  )

  it(
    'should increment item quantity when click on increment button',
    onIncrementTest
  )

  it('should remove item quantity when click on remove button', onRemoveTest)
})
