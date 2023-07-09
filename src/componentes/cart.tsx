import Link from 'next/link'
import React from 'react'
import ShoppingCartFill from '../../public/assets/icons/shopping-cart-fill'

export default function Cart() {
  return (
    <Link
      href="/checkout"
      className="flex
            bg-brand-yellow-light text-brand-yellow-dark rounded-lg border hover:border-brand-yellow-dark duration-300 p-2
              fixed right-[100px]W
            "
    >
      <ShoppingCartFill className="w-8 h-8" />
    </Link>
  )
}
