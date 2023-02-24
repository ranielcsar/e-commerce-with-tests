import { setupWorker } from 'msw'

import { getAllProductsHandler } from '@/features/products/mocks/getAllProductsHandler'
import { getAllCategoriesHandler } from '@/features/products/mocks/getAllCategoriesHandler'

const handlers = [getAllProductsHandler, getAllCategoriesHandler]

export const worker = setupWorker(...handlers)
