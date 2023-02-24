import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Spinner } from '@/components/Elements'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner />
        </div>
      }
    >
      <Router>{children}</Router>
    </Suspense>
  )
}
