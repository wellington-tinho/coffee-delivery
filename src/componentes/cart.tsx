'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import ShoppingCartFill from '../../public/assets/icons/shopping-cart-fill'
import { useCart } from '@/hooks/useCart'
import { ItemsCart } from './itemsCart'

export default function Cart() {
  const {
    state: { items },
  } = useCart()
  const [isVisibleItemsCart, setIsVisibleItemsCart] = useState(false)

  return (
    <>
      <div
        onMouseOver={() => {
          setIsVisibleItemsCart(true)
        }}
        onMouseLeave={() => {
          setIsVisibleItemsCart(false)
        }}
      >
        <Link
          href="/checkout"
          className="flex bg-brand-yellow-light text-brand-yellow-dark  p-2 
                     rounded-lg border hover:border-brand-yellow-dark duration-300"
        >
          <ShoppingCartFill className="w-8 h-8" />
        </Link>
        <span
          className=" text-white rounded-full w-5 h-5 text-sm flex items-center justify-center p-2 "
          style={{
            // TODO: use in tailwind
            backgroundColor: '#ff0000b0',
            position: 'absolute',
            right: '160px',
            top: '24px',
            display: `${items.length === 0 ? 'none' : 'flex'}`,
          }}
        >
          {items.length}
        </span>
        {isVisibleItemsCart ? (
          <>
            <div
              style={{
                position: 'fixed',
                right: '100px',
                maxHeight: '400px',
                overflowY: 'auto',
              }}
              className="bg-base-background rounded-lg shadow-lg p-4 border"
            >
              <span
                className="bg-base-background w-4 h-4 transform"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '-4px',
                  rotate: '45deg',
                }}
              ></span>
              <ItemsCart items={items} />
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}
