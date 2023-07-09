'use client'

import { Product } from '@/shared/types/Product'
import { convertCurrencyBRL } from '@/shared/utils/convertCurrencyBRL'
import Image from 'next/image'

interface ProductCart extends Product {
  amount: number
}

export function ItemsCart({ items }: { items: ProductCart[] }) {
  const delivery = items.length > 0 ? 3.5 : 0
  const totalItens = Object.values(items).reduce(
    (acc, { price, amount }) => acc + price * amount,
    0,
  )

  return (
    <>
      <ul className="flex gap-6 flex-col ">
        {Object.values(items).map(
          ({ id, image, description, name, price, amount }) => {
            return (
              <>
                <li
                  key={id}
                  className="flex gap-6 items-start py-2 px-1 flex-wrap"
                >
                  <Image src={image} alt={description} width={64} height={64} />
                  <div className="flex flex-col flex-1 justify-end items-start">
                    <p>{name}</p>
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
              </>
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
        <div className="flex justify-between items-center text-2xl font-bold text-base-text gap-4">
          <p>Total</p>
          <span>
            R${'  '} {convertCurrencyBRL(totalItens + delivery)}
          </span>
        </div>
      </div>
    </>
  )
}
