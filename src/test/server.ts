import { setupServer } from 'msw/node'

import { getAllProductsHandler } from '@/features/products/mocks/getAllProductsHandler'
import { getAllCategoriesHandler } from '@/features/products/mocks/getAllCategoriesHandler'

import 'whatwg-fetch'

const handlers = [getAllProductsHandler, getAllCategoriesHandler]

export const server = setupServer(...handlers)
