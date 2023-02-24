import { useLoading } from '@/hooks'
import { ProductsResponse } from '@/types'
import { useState, useEffect } from 'react'
import { getAllProducts } from '../api'

export function useProducts(page: number) {
  const [products, setProducts] = useState<ProductsResponse>()
  // const [loading, setLoading] = useState(true)
  const { loading, setLoadingTrue, setLoadingFalse } = useLoading()

  async function getProducts() {
    setLoadingTrue()
    const newProducts = await getAllProducts({ skip: page })

    setProducts(newProducts)
    setLoadingFalse()
  }

  useEffect(() => {
    ;(async () => getProducts())()
  }, [page])

  return { products, loading }
}
