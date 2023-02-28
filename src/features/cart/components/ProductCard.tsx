import { T_Product } from '@/types'

export type ProductCardProps = {
  product: T_Product
  onDecrementQuantity: () => void
  onIncrementQuantity: () => void
  onRemoveFromCart: () => void
}

export function ProductCard({ product }: ProductCardProps) {
  return <div className="border-blue-700">{product.title}</div>
}
