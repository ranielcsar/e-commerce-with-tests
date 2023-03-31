import { HTMLAttributes, PropsWithChildren } from 'react'

export function Card({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <article {...props} className="rounded-lg shadow-lg w-full relative">
      {children}
    </article>
  )
}
