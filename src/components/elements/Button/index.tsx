import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps
} from '@material-tailwind/react'
import { forwardRef, PropsWithChildren } from 'react'

export type ButtonProps = PropsWithChildren<{}> &
  Omit<MaterialButtonProps, 'ref'>

function Button({ children, ...props }: ButtonProps) {
  return (
    <MaterialButton color="indigo" variant="gradient" {...props}>
      {children}
    </MaterialButton>
  )
}

export { Button }
