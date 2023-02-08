import '@testing-library/jest-dom'
import { server } from '@/test/server'
import { getAllCategoriesHandler } from '../mocks'
import { getAllCategories } from '../api'

async function getAllCategoriesTest() {
  server.use(getAllCategoriesHandler)

  const data = await getAllCategories()
  const dataResult = expect.any(Array<string>)

  expect(data).toEqual(dataResult)
}

describe('Home categories', () => {
  it('should get all categories from API', getAllCategoriesTest)
})
