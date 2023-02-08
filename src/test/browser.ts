import { setupWorker } from 'msw'
import { getAllProductsHandlers } from '@/features/home/mocks/getAllProductsHandler'

const handlers = [getAllProductsHandlers]

export const worker = setupWorker(...handlers)
