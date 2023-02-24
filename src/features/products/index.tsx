import { Pagination } from '@/components/Elements'
import { withLoading } from '@/utils/withLoading'
import { useState } from 'react'

import { ProductGrid, ProductCard } from './components'
import { useProducts } from './hooks/useProducts'

export function Products() {
  const [page, setPage] = useState(1)
  const { products, loading } = useProducts(page)

  return withLoading(loading, () => (
    <section className="grid grid-rows-[1fr,12rem] gap-8">
      <ProductGrid>
        {products?.products.map((product) => (
          <ProductCard key={product.title} {...{ product }} />
        ))}
      </ProductGrid>

      <Pagination
        currentPage={page}
        totalPages={products?.total || 1}
        onClick={setPage}
      />
    </section>
  ))
}