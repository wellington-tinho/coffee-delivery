import { Controller, useFormContext } from 'react-hook-form'

interface InputFieldProps {
  label: string
  name: string
  type: string
  id: string
  placeholder: string
  className?: string
}

export function InputField(props: InputFieldProps) {
  const { className, name, ...rest } = props
  const { control } = useFormContext()
  return (
    <Controller
      render={({ field }) => (
        <input
          {...rest}
          {...field}
          className={`h-11 w-full bg-base-input border border-base-button p-3 rounded-md ${className}`}
        />
      )}
      control={control}
      name={name}
    />
  )
}
