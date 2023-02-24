import { Spinner } from '@/components/Elements'
import { Products } from '@/features/products'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <Suspense
      fallback={
        <div className="h-full w-full flex items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  )
}

export const protectedRoutes = [
  {
    path: '/',
    element: <Products />
  },
  {
    path: '/home',
    element: <>outra home</>
  }
]
