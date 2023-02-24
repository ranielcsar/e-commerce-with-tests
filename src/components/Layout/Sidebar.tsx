import { Radio } from '@/components/Elements'
import { Typography } from '@material-tailwind/react'
import { useCategories } from '@/features/categories/hooks'
import { useMemo } from 'react'

export function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen col-[1] row-[2] bg-gray-900 text-white pl-5 overflow-y-auto">
      <Typography variant="h5">Categorias</Typography>

      <Categories />
    </aside>
  )
}

const categoryNames: Record<string, string> = {
  smartphones: 'Smartphones',
  laptops: 'Laptops',
  fragrances: 'Fragrâncias',
  skincare: 'Skincare',
  groceries: 'Alimentos',
  'home-decoration': 'Decoração de casa',
  furniture: 'Mobília',
  tops: 'Tops',
  'womens-dresses': 'Roupas femininas',
  'womens-shoes': 'Sapatos femininos',
  'mens-shirts': 'Roupas masculinas',
  'mens-shoes': 'Sapatos masculinos',
  'mens-watches': 'Relógios masculinos',
  'womens-watches': 'Relógios femininos',
  'womens-bags': 'Bolsas para mulheres',
  'womens-jewellery': 'Jóias',
  sunglasses: 'Óculos de sol',
  automotive: 'Automotivo',
  motorcycle: 'Motocicletas',
  lighting: 'Luzes'
}

function Categories() {
  const { categories } = useCategories()

  const formatedCategories = useMemo(
    () =>
      categories?.map((category) => ({
        value: category,
        label: categoryNames[category]
      })),
    [categories]
  )

  return (
    <section className="grid w-full">
      <Radio name="category" options={formatedCategories} />
    </section>
  )
}
