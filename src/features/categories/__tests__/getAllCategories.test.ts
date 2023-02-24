import '@testing-library/jest-dom'
import { server } from '@/test/server'
import { getAllCategoriesHandler } from '../mocks'
import { getAllCategories } from '../api'

async function getAllCategoriesFromAPI() {
  server.use(getAllCategoriesHandler)

  const data = await getAllCategories()
  const dataResult = expect.any(Array<string>)

  expect(data).toEqual(dataResult)
}

test('it should get all categories from API', getAllCategoriesFromAPI)
