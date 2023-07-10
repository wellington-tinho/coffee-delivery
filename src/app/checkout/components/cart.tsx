'use client'

import Trash from '@/../public/assets//icons/Trash'
import minus from '@/../public/assets/icons/minus.svg'
import sum from '@/../public/assets/icons/sum.svg'
import Image from 'next/image'
import Box from '../layout/box'
import { convertCurrencyBRL } from '@/shared/utils/convertCurrencyBRL'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/services/api'
import { useFormContext } from 'react-hook-form'

interface StockProps {
  id: string
  amount: number
}

export function Cart() {
  const [stock, setStock] = useState<StockProps[]>([])
  const { handleSubmit } = useFormContext()

  const fetchData = useCallback(async () => {
    try {
      const stockRes = await api.get<StockProps[]>('/stock')
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
    actions: { removeItem, updateAmount },
  } = useCart()

  const delivery = items.length > 0 ? 3.5 : 0
  const totalItens = Object.values(items).reduce(
    (acc, { price, amount }) => acc + price * amount,
    0,
  )

  function checkStockItem(id: string, amount: number) {
    const stockItem = stock.find((item) => item.id === id)
    return stockItem ? stockItem.amount >= amount : false
  }

  function handleUpdateItemInCart(id: string, newAmount: number) {
    if (newAmount < 1) return
    if (checkStockItem(id, newAmount)) {
      updateAmount(id, newAmount)
    } else {
      alert('Quantidade solicitada fora de estoque')
    }
  }

  function handleRemoveAllItemsInCart() {
    Object.values(items).forEach(({ id }) => removeItem(id))
  }

  function onSubmit(data, e) {
    console.log('🚀 ~ file: cart.tsx:67 ~ onSubmit ~ e:', e)
    console.log('🚀 ~ file: cart.tsx:67 ~ onSubmit ~ data:', data)
  }

  return (
    <Box>
      <ul className="flex gap-6 flex-col ">
        {Object.values(items).map(
          ({ id, image, description, name, price, amount }) => {
            return (
              <div key={id}>
                <li className="flex gap-6 items-start py-2 px-1 flex-wrap">
                  <Image src={image} alt={description} width={64} height={64} />
                  <div className="flex flex-1 flex-col gap-2 ">
                    <p>{name}</p>
                    <div className="flex gap-3 items-center">
                      <div
                        className="flex justify-center bg-base-button rounded-lg 
                                  gap-[6px] py-2 w-16 h-8 items-center"
                      >
                        <Image
                          src={minus}
                          alt="icon minus"
                          width={15}
                          className="cursor-pointer h-3"
                          onClick={() => {
                            handleUpdateItemInCart(id, amount - 1)
                          }}
                        />
                        <span className="text-base-text text-base font-normal">
                          {amount}
                        </span>
                        <Image
                          src={sum}
                          alt="icon sum"
                          width={15}
                          className="cursor-pointer h-3"
                          onClick={() => {
                            handleUpdateItemInCart(id, amount + 1)
                          }}
                        />
                      </div>
                      <div
                        className="flex justify-center bg-base-button rounded-lg 
                                  gap-[6px] py-2 px-3 h-8 items-center"
                      >
                        <Trash className="w-4 h-4 text-brand-purple" />
                        <button
                          className="text-base-text font-normal text-sm"
                          onClick={() => removeItem(id)}
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-end items-center">
                    <p className="font-baloo font-extrabold text-xl text-base-text">
                      R${'  '}
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })
                        .format(price * amount)
                        .replace('R$', '')}
                    </p>
                  </div>
                </li>
                <hr className="w-full border-base-border" />
              </div>
            )
          },
        )}
      </ul>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm font-normal text-base-text">
          <p>Total de itens</p>
          <span>
            R${'  '} {convertCurrencyBRL(totalItens)}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm font-normal text-base-text">
          <p>Entrega</p>
          <span>
            R${'  '} {convertCurrencyBRL(delivery)}
          </span>
        </div>
        <div className="flex justify-between items-center text-2xl font-bold text-base-text">
          <p>Total</p>
          <span>
            R${'  '} {convertCurrencyBRL(totalItens + delivery)}
          </span>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="flex justify-center items-center">
          <p className="w-full text-base font-bold py-3 rounded-lg capitalize mt-3 text-base-text  bg-base-button text-center">
            Seu carrinho está vazio
          </p>
        </div>
      ) : (
        <Link href="/success">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="submit"
              className="w-full bg-brand-yellow text-base font-bold py-3 rounded-lg text-base-white capitalize mt-3"
              onClick={handleRemoveAllItemsInCart}
            >
              CONFIRMAR PEDIDO
            </button>
          </form>
        </Link>
      )}
    </Box>
  )
}
