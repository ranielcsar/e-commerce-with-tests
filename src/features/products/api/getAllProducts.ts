import { api } from '@/lib/axios'
import { ProductsResponse } from '@/types'

export type GetAllProductsParams = Partial<{
  limit: number
  skip: number
}>

export async function getAllProducts({
  limit = 10,
  skip = 1
}: GetAllProductsParams) {
  const newSkip = skip * limit

  try {
    const data = await api.get('/products', {
      params: { limit, skip: newSkip }
    })
    const products = data.data as ProductsResponse

    return products
  } catch (err: any) {
    throw Error(err)
  }
}
