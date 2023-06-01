import Trash from '@/../public/assets//icons/Trash'
import minus from '@/../public/assets/icons/minus.svg'
import sum from '@/../public/assets/icons/sum.svg'
import { Product } from '@/shared/types/Product'
import Image from 'next/image'
import Box from '../layout/box'

export default function Cart(props: Product[]) {
  return (
    <Box>
      <ul className="flex gap-8 flex-col">
        {Object.values(props).map(
          ({ id, image, description, name, price, amount }) => {
            return (
              <>
                <li key={id} className="flex gap-6 items-start py-2">
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
    </Box>
  )
}
