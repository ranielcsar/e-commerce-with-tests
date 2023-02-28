export type T_Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
  quantity: number
}

export type ProductsResponse = {
  limit: number
  products: Array<T_Product>
  skip: number
  total: number
}
