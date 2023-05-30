import React from 'react'

export default function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-10 bg-base-card rounded-lg">
      {children}
    </div>
  )
}
