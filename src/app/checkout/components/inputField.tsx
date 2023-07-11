import { Controller, useFormContext } from 'react-hook-form'

interface InputFieldProps {
  label: string
  name: string
  type: string
  id: string
  placeholder: string
  className?: string
  size?: 'small' | 'medium' | 'large'
  value?: string
}

export function InputField(props: InputFieldProps) {
  const {
    className = 'h-11 w-full bg-base-input border border-base-button p-3 rounded-md',
    name,
    size = 'large',
    value,
    ...rest
  } = props
  const { control } = useFormContext()
  const sizeClass = {
    small: 'max-w-xs',
    medium: 'max-w-md',
    large: 'max-w-lg',
  }

  return (
    <Controller
      render={({ field }) => (
        <input
          {...rest}
          {...field}
          value={value}
          className={` ${(sizeClass[size], className)}`}
        />
      )}
      control={control}
      name={name}
    />
  )
}
