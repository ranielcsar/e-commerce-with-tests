import '@testing-library/jest-dom'
import { server } from '@/test/server'
import { getAllProductsHandler } from '../mocks'
import { getAllProducts } from '../api'
import { ProductsResponse } from '@/types'
import { render, screen } from '@testing-library/react'
import { ProductCard, ProductGrid } from '../components'

const getAllProductsResponse: ProductsResponse = {
  limit: expect.any(Number),
  products: expect.any(Array),
  skip: expect.any(Number),
  total: expect.any(Number)
}

async function getProducts() {
  server.use(getAllProductsHandler)

  const data = await getAllProducts({})

  return data
}

async function getProductsFromApi() {
  const data = await getProducts()

  expect(data).toEqual(expect.objectContaining(getAllProductsResponse))
}

async function renderProductCards() {
  const data = await getProducts()

  render(
    <ProductGrid>
      {data?.products?.map((product) => (
        <ProductCard key={product.title} {...{ product }} />
      ))}
    </ProductGrid>
  )

  const productCards = await screen.findAllByTestId('product-card')

  expect.arrayContaining(productCards)
}

describe('Products', () => {
  test('it should get all products from API', getProductsFromApi)

  test('it should render all products', renderProductCards)
})
