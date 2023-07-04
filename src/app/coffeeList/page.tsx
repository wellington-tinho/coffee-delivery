'use client'

import Image from 'next/image'
import ShoppingCart from '../../../public/assets/icons/ShoppingCart'
import minus from '../../../public/assets/icons/minus.svg'
import sum from '../../../public/assets/icons/sum.svg'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/services/api'
import { Product } from '@/shared/types/Product'
import { useCart } from '@/hooks/useCart'

interface StockProps {
  id: string
  amount: number
}

interface ProductWithAmount extends Product {
  amount: number
}

export default function CoffeeList() {
  const [coffees, setCoffees] = useState<ProductWithAmount[]>([])
  const [stock, setStock] = useState<StockProps[]>([])

  const fetchData = useCallback(async () => {
    try {
      const [coffeeRes, stockRes] = await Promise.all([
        api.get<Product[]>('/products'),
        api.get<StockProps[]>('/stock'),
      ])
      setCoffees([...coffeeRes.data.map((item) => ({ ...item, amount: 1 }))]) // TODO: split amount from product to improve performance on cart page
      setStock(stockRes.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const {
    state: { items },
    actions: { addItem, updateAmount },
  } = useCart()

  function checkStockItem(id: string, amount: number) {
    console.log('🚀 ~ file: page.tsx:48 ~ checkStockItem ~ amount:', amount)
    const stockItem = stock.find((item) => item.id === id)
    // return stockItem ? stockItem.amount >= amount : false
    return true
  }

  // console.log('🚀 ~ file: page.tsx:49 ~ handleAddItem ~ item:', item)
  // const itemExists = items.find((product) => product.id === item.id)
  // if (itemExists) {
  //   const amount = itemExists.amount + 1
  //   if (checkStockItem(item.id, amount)) {
  //     addItem({ ...item, amount })
  //   }
  // } else {
  //   addItem({ ...item, amount: 1 })
  // }

  function handleAddItemInCart(item: ProductWithAmount) {
    const itemExists = !!items.find((product) => product.id === item.id)
    if (itemExists) {
      updateAmount(item.id, item.amount)
      return
    }
    if (checkStockItem(item.id, item.amount)) {
      addItem(item)
    } else {
      alert('Quantidade solicitada fora de estoque')
    }
  }

  function handleIncrementAmount(id: string) {
    setCoffees((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item,
      ),
    )
  }

  function handleDecrementAmount(id: string) {
    setCoffees((prev) =>
      prev.map((item) =>
        item.id === id && item.amount > 0
          ? { ...item, amount: item.amount - 1 }
          : item,
      ),
    )
  }

  return (
    <div className="px-28 py-8 bg-base-background">
      <p className="text-3xl font-baloo mb-12">Nossos Cafés</p>

      <ul className="flex flex-wrap gap-8 gap-y-12 w-fit content-center items-center justify-center">
        {coffees.map(
          ({ id, image, name, price, description, types, amount }, key) => (
            <li
              className="w-64 h-80 bg-base-card rounded-es-[36px] rounded-se-[36px] flex flex-col items-center "
              key={id + key}
            >
              <Image
                src={image}
                alt="Coffee Expresso"
                width={150}
                height={150}
                className="-mt-9"
              />
              <div className="flex gap-2">
                {types.map((type, key) => (
                  <span
                    key={key}
                    className="bg-brand-yellow-light text-brand-yellow mt-3
                  font-roboto font-bold font-sans px-2 py-1 text-xs rounded-full
                  capitalize "
                  >
                    {type}
                  </span>
                ))}
              </div>

              <div className="flex flex-col items-center h-36 p-5 w-full">
                <p className="font-baloo text-xl font-bold text-base-subtitle">
                  {name}
                </p>
                <span className="text-sm font-medium text-center text-base-label mt-2 h-9 w-full">
                  {description}
                </span>
                <div className="flex mt-7 items-center justify-between w-full px-3">
                  <div className="flex items-baseline gap-1 text-base-text">
                    <span>R$</span>
                    <p className="font-baloo font-extrabold text-2xl text-base-text">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })
                        .format(price)
                        .replace('R$', '')}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div
                      className="flex justify-center bg-base-button rounded-lg 
                                gap-[6px] py-2 w-16 h-8 items-center px-1"
                    >
                      <Image
                        src={minus}
                        alt="icon minus"
                        width={15}
                        className="cursor-pointer h-3"
                        onClick={() => {
                          handleDecrementAmount(id)
                        }}
                      />
                      <span className="text-base-text text-base font-normal w-full text-center first-letter">
                        {amount}
                      </span>
                      <Image
                        src={sum}
                        alt="icon sum"
                        width={15}
                        className="cursor-pointer h-3"
                        onClick={() => {
                          handleIncrementAmount(id)
                        }}
                      />
                    </div>
                    <ShoppingCart
                      className="text-white bg-brand-purple-dark rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer p-1"
                      width={20}
                      height={20}
                      onClick={() =>
                        handleAddItemInCart({
                          id,
                          image,
                          name,
                          price,
                          description,
                          types,
                          amount,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
