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

function clickOnButtonTest(
  button: HTMLElement,
  callback: jest.Mock<any, any, any>
) {
  expect(button).toBeInTheDocument()
  fireEvent.click(button)
  expect(callback).toHaveBeenCalledTimes(1)
}

function onDecrementTest() {
  const { onDecrementQuantity } = setup()

  const decrementButton = screen.getByTestId('decrement-btn')
  clickOnButtonTest(decrementButton, onDecrementQuantity)
}

function onIncrementTest() {
  const { onIncrementQuantity } = setup()

  const incrementButton = screen.getByTestId('increment-btn')
  clickOnButtonTest(incrementButton, onIncrementQuantity)
}

function onRemoveTest() {
  const { onRemoveFromCart } = setup()

  const removeButton = screen.getByTestId('remove-btn')
  clickOnButtonTest(removeButton, onRemoveFromCart)
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
