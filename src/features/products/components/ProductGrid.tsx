import { PropsWithChildren } from 'react'

export function ProductGrid({ children }: PropsWithChildren<any>) {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(100%,20vw))] md:grid-cols-[repeat(auto-fit,minmax(25rem,20vw))] gap-x-5 gap-y-12 m-10 mx-0 justify-center items-center">
      {children}
    </section>
  )
}
