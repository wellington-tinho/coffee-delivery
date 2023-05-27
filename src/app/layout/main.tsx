import Image from 'next/image'
import landingImagem from 'public/assets/imagemLPage.svg'
import CoffeeFill from '../../../public/assets/icons/CoffeeFill'
import Package from '../../../public/assets/icons/Package'
import ShoppingCart from '../../../public/assets/icons/ShoppingCart'
import Timer from '../../../public/assets/icons/Timer'

export default function Main() {
  return (
    <div
      className="bg-[url('/assets/background.svg')] 
      bg-no-repeat bg-center bg-contain pb-20 px-10
      h-full flex gap-14 justify-center items-center
      "
    >
      <div className="flex flex-col gap-16">
        <div className="space-y-4 w-[558px] xl:w-[830px] xl:space-y-6">
          <h1 className="font-baloo text-5xl font-extrabold xl:text-7xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2 className="font-roboto text-xl font-medium xl:text-3xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <ul className="border grid grid-cols-2 gap-y-5 gap-x-10">
          <li className="flex gap-2 items-center">
            <div className="bg-brand-yellow-dark rounded-full text-white p-2 w-8 h-8 ">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <span className="font-roboto text-base font-normal xl:text-xl">
              Compra simples e segura
            </span>
          </li>

          <li className="flex gap-2 items-center">
            <div className="bg-base-text rounded-full text-white p-2 w-8 h-8 ">
              <Package className="w-4 h-4" />
            </div>
            <span className="font-roboto text-base font-normal xl:text-xl">
              Embalagem mantém o café intacto
            </span>
          </li>
          <li className="flex gap-2 items-center">
            <div className="bg-brand-yellow rounded-full text-white p-2 w-8 h-8 ">
              <Timer className="w-4 h-4" />
            </div>
            <span className="font-roboto text-base font-normal xl:text-xl">
              Entrega rápida e rastreada
            </span>
          </li>

          <li className="flex gap-2 items-center">
            <div className="bg-brand-purple rounded-full text-white p-2 w-8 h-8 ">
              <CoffeeFill className="w-4 h-4 " />
            </div>
            <span className="font-roboto text-base font-normal xl:text-lg">
              O café chega fresquinho até você
            </span>
          </li>
        </ul>
      </div>
      <div className="">
        <Image
          src={landingImagem}
          alt="Copo de café escrito coffee delivery"
          className="object-contain xl:w-[676px] xl:h-[560px]"
          width={476}
          height={360}
        />
      </div>
    </div>
  )
}
