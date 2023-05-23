import Image from 'next/image'
import landingImagem from 'public/assets/imagemLPage.svg'

export default function Main() {
  return (
    <div className="bg-[url('/assets/background.svg')] bg-repeat bg-center h-full px-40 border flex justify-center gap-14 pt-24">
      <div>
        <div className="space-y-4 w-[558px] border">
          <h1 className="font-baloo text-5xl font-extrabold ">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2 className="font-roboto text-xl font-medium">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
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
      <div>
        <Image src={landingImagem} alt="Copo de café escrito coffee delivery" />
      </div>
    </div>
  )
}
