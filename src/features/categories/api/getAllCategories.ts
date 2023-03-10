import { api } from '@/lib/axios'

export async function getAllCategories() {
  try {
    const data = await api.get('/products/categories')
    const categories = data.data as string[]

    return categories
  } catch (err: any) {
    throw Error(err)
  }
}
