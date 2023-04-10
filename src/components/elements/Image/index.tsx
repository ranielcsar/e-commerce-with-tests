import { ImgHTMLAttributes } from 'react'

type ImageProps = {} & ImgHTMLAttributes<any>

export function Image({ src, alt, ...props }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
      className="h-full w-full object-cover object-center"
    />
  )
}
