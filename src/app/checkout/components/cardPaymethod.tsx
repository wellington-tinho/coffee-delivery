import React from 'react'

interface CardPaymethodProps {
  name: string
  // icon: React.FC
}

export function CardPaymethod({ name, _ }: CardPaymethodProps) {
  return (
    <div className="flex gap-4 mt-4 align-center">
      {/* <i>{icon}</i> */}
      <span>{name}</span>
    </div>
  )
}
