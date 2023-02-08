import { API_URL } from '@/config'
import { rest } from 'msw'

const url = `${API_URL}/categories`

export const getAllCategoriesHandler = rest.post(url, (_, res, ctx) => {
  return res(ctx.status(200), ctx.json({}))
})
