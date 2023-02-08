import { setupServer } from 'msw/node'
import { getAllProductsHandlers } from '@/features/home/mocks/getAllProductsHandler'
import 'whatwg-fetch'

const handlers = [getAllProductsHandlers]

export const server = setupServer(...handlers)
