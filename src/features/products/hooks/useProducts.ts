import { useLoading } from '@/hooks'
import { ProductsResponse } from '@/types'
import { useState, useEffect } from 'react'
import { getAllProducts } from '../api'

export function useProducts(page: number) {
  const [products, setProducts] = useState<ProductsResponse>()
  const { loading, setLoadingTrue, setLoadingFalse } = useLoading()

  async function getProducts() {
    setLoadingTrue()
    let newProducts = await getAllProducts({ skip: page })

    if (newProducts.products) {
      for (let product in newProducts.products) {
        newProducts.products[product] = {
          ...newProducts.products[product],
          quantity: 0
        }
      }
    }

    setProducts(newProducts)
    setLoadingFalse()
  }

  useEffect(() => {
    ;(async () => getProducts())()
  }, [page])

  return { products, loading }
}
