import { Spinner } from '@/components/elements'
import { ComponentType } from 'react'

export function withLoading(isLoading: boolean, Component: ComponentType) {
  const ComponentWithLoading = (props: any) => {
    if (isLoading) {
      return (
        <div className="m-auto mt-52 mb-52">
          <Spinner />
        </div>
      )
    }

    return <Component {...props} />
  }

  return <ComponentWithLoading />
}
