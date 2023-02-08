import { MainLayout } from '@/components/Layout'
import { T_Product } from '@/types'
import { useEffect, useState } from 'react'
import { getAllProduts } from './api/getAllProducts'

export function Home() {
  const [products, setProducts] = useState<T_Product[]>()

  useEffect(() => {
    ;(async () => {
      const newProducts = await getAllProduts()

      setProducts(newProducts)
    })()
  }, [])

  return (
    <MainLayout>
      {products?.map((product) => (
        <p>{product.title}</p>
      ))}
    </MainLayout>
  )
}
