import { api } from '@/lib/axios'
import { ProductsResponse } from '@/types'

export async function getAllProducts() {
  try {
    const data = await api.get('/products')
    const products = data.data as ProductsResponse

    return products
  } catch (err: any) {
    throw Error(err)
  }
}
