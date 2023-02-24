import { useRoutes } from 'react-router-dom'

import { protectedRoutes } from './protected'
import { MainLayout } from '@/components/Layout'

export const AppRoutes = () => {
  const element = useRoutes(protectedRoutes)

  return <MainLayout>{element}</MainLayout>
}
