import {
  Radio as MaterialRadio,
  RadioProps as MaterialRadioProps
} from '@material-tailwind/react'
import { Ref } from 'react'

type RadioProps = {
  name: string
  options: {
    value: string
    label: string
  }[]
  ref?: Ref<HTMLInputElement>
} & MaterialRadioProps

export function Radio({ name, options, ...rest }: RadioProps) {
  return (
    <>
      {options.map((option) => (
        <MaterialRadio
          label={option.label}
          id={option.value}
          name={name}
          className="w-4 h-4 z-0"
          key={option.value}
          value={option.value}
          {...rest}
        />
      ))}
    </>
  )
}
