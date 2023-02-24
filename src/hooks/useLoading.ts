import { useState } from 'react'

export function useLoading() {
  const [loading, setLoading] = useState(false)

  const setLoadingTrue = () => {
    setLoading(true)
  }

  const setLoadingFalse = () => {
    setLoading(false)
  }

  return { loading, setLoadingTrue, setLoadingFalse }
}
