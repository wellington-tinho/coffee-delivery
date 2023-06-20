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

export default function CoffeeList() {
  const [coffees, setCoffees] = useState<Product[]>([])
  const [stock, setStock] = useState<StockProps[]>([])

  const fetchData = useCallback(async () => {
    try {
      const [coffeeRes, stockRes] = await Promise.all([
        api.get<Product[]>('/products'),
        api.get<StockProps[]>('/stock'),
      ])
      setCoffees(coffeeRes.data)
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
    actions: { addItem, removeItem },
  } = useCart()

  console.log('🚀 ~ file: page.tsx:40 ~ CoffeeList ~ items:', items)
  function checkStockItem(id: string, amount: number) {
    const stockItem = stock.find((item) => item.id === id)
    return stockItem ? stockItem.amount >= amount : false
  }

  function handleAddItem(item: Product) {
    console.log('🚀 ~ file: page.tsx:49 ~ handleAddItem ~ item:', item)
    const itemExists = items.find((product) => product.id === item.id)
    if (itemExists) {
      const amount = itemExists.amount + 1
      if (checkStockItem(item.id, amount)) {
        addItem({ ...item, amount })
      }
    } else {
      addItem({ ...item, amount: 1 })
    }
  }

  function handleRemoveItem(itemId: string) {
    const itemExists = items.find((product) => product.id === itemId)
    if (itemExists) {
      if (itemExists.amount === 1) {
        removeItem(itemId)
        return
      }
      const amount = itemExists.amount - 1
      addItem({ ...itemExists, amount })
    }
  }

  return (
    <div className="px-28 py-8 bg-base-background">
      <p className="text-3xl font-baloo mb-12">Nossos Cafés</p>

      <ul className="flex flex-wrap gap-8 gap-y-12 w-fit content-center items-center justify-center">
        {coffees.map(({ id, image, name, price, description, types }) => (
          <li
            className="w-64 h-80 bg-base-card rounded-es-[36px] rounded-se-[36px] flex flex-col items-center "
            key={id}
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
                    />
                    <span className="w-full">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="text-base-text text-base font-normal w-full text-center first-letter bg-base-button"
                      />
                    </span>
                    <Image
                      src={sum}
                      alt="icon sum"
                      width={15}
                      className="cursor-pointer h-3"
                      onClick={() =>
                        handleAddItem({
                          id,
                          image,
                          name,
                          price,
                          description,
                          types,
                        })
                      }
                    />
                  </div>
                  <ShoppingCart
                    className="text-white bg-brand-purple-dark rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer p-1"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
