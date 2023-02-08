import '@testing-library/jest-dom'
import { server } from '@/test/server'
import { getAllProductsHandler } from '../mocks'
import { getAllProducts } from '../api'

const getAllProductsResponse = {
  limit: expect.any(Number),
  products: expect.any(Array),
  skip: expect.any(Number),
  total: expect.any(Number)
}

async function getAllProductsTest() {
  server.use(getAllProductsHandler)

  const data = await getAllProducts()

  expect(data).toEqual(expect.objectContaining(getAllProductsResponse))
}

describe('Home products', () => {
  it('should get all products from API', getAllProductsTest)
})
