import { Spinner } from '@/components/Elements'
import { MainLayout } from '@/components/Layout'
import { Home } from '@/features/home'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export const protectedRoutes = [
  {
    path: '/',
    element: <Home />
  }
]
