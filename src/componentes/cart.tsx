'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import ShoppingCartFill from '../../public/assets/icons/shopping-cart-fill'
import { useCart } from '@/hooks/useCart'
import { Badge } from '@mui/material'
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
        <Badge
          badgeContent={items.length}
          color="error"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Link
            href="/checkout"
            className="flex bg-brand-yellow-light text-brand-yellow-dark  p-2 
                     rounded-lg border hover:border-brand-yellow-dark duration-300"
          >
            <ShoppingCartFill className="w-8 h-8" />
          </Link>
        </Badge>
        {isVisibleItemsCart ? (
          <>
            <div
              style={{ position: 'fixed', right: '100px' }} // TODO: use in tailwind
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
              >
                {/* s */}
              </span>
              <ItemsCart items={items} />
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}
