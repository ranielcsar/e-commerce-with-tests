import { useEffect, useState } from 'react'
import { getAllCategories } from '../api'

export function useCategories() {
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    ;(async () => {
      const allCategories = await getAllCategories()

      setCategories(allCategories)
    })()
  }, [])

  return { categories }
}
