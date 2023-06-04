interface InputFieldProps {
  label: string
  name: string
  type: string
  id: string
  placeholder: string
  className?: string
}

export function InputField(props: InputFieldProps) {
  const { className, ...rest } = props
  return (
    <input
      {...rest}
      className={`h-11 w-full bg-base-input border border-base-button p-3 rounded-md ${className}`}
    />
  )
}
