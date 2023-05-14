// eslint-disable-next-line camelcase
// import { Baloo_2 } from '@next/font/google'
import Image from 'next/image'

// const baloo2 = Baloo_2({
//   weight: ['800'],
// })

export default function Main() {
  return (
    <div className="bg-[url('/assets/background.svg')] bg-repeat bg-center  h-full ">
      <div>
        <div>
          <h1
          // className={`${baloo2.className} font-Baloo2 text-5xl font-extrabold`}
          >
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </h2>
        </div>
        <div>
          <ul>
            <li>
              <Image src="" alt="" />
              <span>Compra simples e segura</span>
            </li>

            <li>
              <Image src="" alt="" />
              <span>Entrega rápida e rastreada</span>
            </li>

            <li>
              <Image src="" alt="" />
              <span> Embalagem mantém o café intacto</span>/
            </li>

            <li>
              <Image src="" alt="" />
              <span> O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
      </div>
      <div> {/*  Image */}</div>
    </div>
  )
}
