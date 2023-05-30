'use cliente'

import { coffees } from '@/shared/constants/coffees'
import Image from 'next/image'
import ShoppingCart from '../../../public/assets/icons/ShoppingCart'
import minus from '../../../public/assets/icons/minus.svg'
import sum from '../../../public/assets/icons/sum.svg'

export default function CoffeeList() {
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

      {/* <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="w-64 h-80 bg-base-card rounded-es-[36px] rounded-se-[36px] flex flex-col items-center">
          <Image
            src={coffee1}
            alt="Coffee Expresso"
            width={150}
            height={150}
            className="-mt-9"
          />
          <span
            className="bg-brand-yellow-light text-brand-yellow mt-3
              font-roboto font-bold font-sans px-2 py-1 text-xs rounded-full
              capitalize"
          >
            tradicional
          </span>
          <div className="flex flex-col items-center h-36 p-5 w-full">
            <p className="font-baloo text-xl font-bold text-base-subtitle">
              Expresso Tradicional
            </p>
            <span className="text-sm font-medium text-center text-base-label mt-2 h-9 w-full">
              O tradicional café feito com água quente e grãos moídos
            </span>
            <div className="flex mt-7 items-center justify-between w-full px-3">
              <div className="flex items-baseline gap-1 text-base-text">
                <span>R$</span>
                <p className="font-baloo font-extrabold text-2xl text-base-text">
                  9,90
                </p>
              </div>
              <div className="flex gap-2">
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
                <div className="bg-brand-purple-dark rounded-lg w-8 h-8 flex items-center justify-center">
                  <ShoppingCart className="text-white" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
