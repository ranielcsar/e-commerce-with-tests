import { PropsWithChildren, Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Spinner } from '@/components/Elements'

type AppProviderProps = {}

export const AppProvider = ({
  children
}: PropsWithChildren<AppProviderProps>) => {
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
