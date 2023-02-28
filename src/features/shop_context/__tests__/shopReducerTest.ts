import { initialShopState } from '@/features/shop_context'
import { shopReducer, ShopActions } from '../reducer'
import { T_Product } from '@/types'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

const product: T_Product = {
  id: 0,
  title: '',
  price: 0,
  images: [],
  quantity: 1,
  description: '',
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: ''
}

function runCartTest(
  state: typeof initialShopState,
  actionType: ShopActions,
  expectedUpdatedState: typeof initialShopState
) {
  const action = {
    type: actionType,
    payload: product
  }

  const updatedState = shopReducer(state, action)

  expect(updatedState).toEqual(expectedUpdatedState)
}

function addToCartTest() {
  const expectedUpdatedState = {
    ...initialShopState,
    cart: [product]
  }

  runCartTest(initialShopState, ShopActions.ADD_TO_CART, expectedUpdatedState)
}

function removeFromCartTest() {
  const state = {
    ...initialShopState,
    cart: [product]
  }

  const expectedUpdatedState = {
    ...initialShopState,
    cart: []
  }

  runCartTest(state, ShopActions.REMOVE_FROM_CART, expectedUpdatedState)
}

function incrementItemQuantityTest() {
  const state = {
    ...initialShopState,
    cart: [product]
  }

  const expectedUpdatedState = {
    ...initialShopState,
    cart: [
      {
        ...product,
        quantity: 2
      }
    ]
  }

  runCartTest(state, ShopActions.INCREMENT_ITEM_QUANTITY, expectedUpdatedState)
}

function decrementItemQuantityTest() {
  const state = {
    ...initialShopState,
    cart: [
      {
        ...product,
        quantity: 2
      }
    ]
  }

  const expectedUpdatedState = {
    ...initialShopState,
    cart: [product]
  }

  runCartTest(state, ShopActions.DECREMENT_ITEM_QUANTITY, expectedUpdatedState)
}

describe('Shop reducer - CRUD', () => {
  it('should update cart in state when add to cart', addToCartTest)

  it('should update cart in state when remove from cart', removeFromCartTest)

  it(
    'should increment a specific item quantity in cart',
    incrementItemQuantityTest
  )

  it(
    'should decrement a specific item quantity in cart',
    decrementItemQuantityTest
  )
})
