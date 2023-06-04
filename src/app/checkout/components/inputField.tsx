interface InputFieldProps {
  label: string
  name: string
  type: string
  id: string
  placeholder: string
}

export function InputField(props: InputFieldProps) {
  return (
    <input
      {...props}
      className="h-11 w-full bg-base-input border border-base-button p-3 rounded-md"
    />
  )
}
