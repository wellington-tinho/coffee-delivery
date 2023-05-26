'use client'

import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
    <path d="m27.988 8.175-1.526 8.363A3 3 0 0 1 23.512 19h-14.5l.55 3H23a3 3 0 1 1-3 3c0-.34.06-.68.175-1h-7.35a3 3 0 1 1-5.1-.95L4.262 4H2a1 1 0 0 1 0-2h2.263a2 2 0 0 1 1.962 1.638L6.838 7H27a.987.987 0 0 1 .762.362.963.963 0 0 1 .226.813Z" />
  </svg>
)
const ShoppingCartFill = memo(SvgComponent)
export default ShoppingCartFill
