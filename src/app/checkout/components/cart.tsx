import Trash from '@/../public/assets//icons/Trash'
import minus from '@/../public/assets/icons/minus.svg'
import sum from '@/../public/assets/icons/sum.svg'
import { Product } from '@/shared/types/Product'
import Image from 'next/image'
import Box from '../layout/box'
import { convertCurrencyBRL } from '@/shared/utils/convertCurrencyBRL'

export function Cart(props: Product[]) {
  const delivery = 3.5
  const totalItens = Object.values(props).reduce(
    (acc, { price, amount }) => acc + price * amount,
    0,
  )

  return (
    <Box>
      <ul className="flex gap-6 flex-col">
        {Object.values(props).map(
          ({ id, image, description, name, price, amount }) => {
            return (
              <>
                <li key={id} className="flex gap-6 items-start py-2 px-1">
                  <Image src={image} alt={description} width={64} height={64} />
                  <div className="flex flex-1 flex-col gap-2">
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
                        />
                        <span className="text-base-text text-base font-normal">
                          1
                        </span>
                        <Image
                          src={sum}
                          alt="icon sum"
                          width={15}
                          className="cursor-pointer h-3"
                        />
                      </div>
                      <div
                        className="flex justify-center bg-base-button rounded-lg 
                                  gap-[6px] py-2 px-3 h-8 items-center"
                      >
                        <Trash className="w-4 h-4 text-brand-purple" />
                        <span className="text-base-text font-normal text-sm">
                          Remover
                        </span>
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
        <div className="flex justify-between items-center text-2xl font-bold text-base-text">
          <p>Total</p>
          <span>
            R${'  '} {convertCurrencyBRL(totalItens + delivery)}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="w-full bg-brand-yellow text-base font-bold py-3 rounded-lg text-base-white capitalize mt-3"
      >
        CONFIRMAR PEDIDO
      </button>
    </Box>
  )
}
