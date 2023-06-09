import Image from 'next/image'
import Navbar from '../layout/navbar'
import MapPin from '@/../public/assets/icons/Map'
import Timer from '@/../public/assets/icons/Timer'
import CurrencyDollar from '@/../public/assets/icons/CurrencyDollar'

export default function Success() {
  return (
    <>
      <Navbar />
      <div className="px-40 bg-base-white flex gap-28 justify-center ">
        <div className=" bg-base-white flex flex-col gap-1 p-4 w-">
          <div className="flex flex-col gap-2  ">
            <p className="text-3xl font-baloo text-brand-yellow-dark font-extrabold">
              Uhu! Pedido confirmado
            </p>
            <span className="font-normal text-xl text-base-subtitle">
              Agora é só aguardar que logo o café chegará até você.
            </span>
          </div>

          <div
            className="bg-gradient-to-br 
            from-brand-yellow-dark
            to-brand-purple 
            rounded-xl
            rounded-bl-3xl rounded-tr-3xl
            mt-10
            "
          >
            <ul className="bg-white m-[2px] p-10 rounded-xl rounded-bl-3xl rounded-tr-3xl space-y-8">
              <li className="flex gap-3 items-center w-200 rounded-md p-2 w-fit">
                <MapPin
                  className="
                bg-brand-purple 
                fill-white
                rounded-full
                text-[38px]
                p-2
              "
                />
                <div className="flex flex-col text-base-text text-base">
                  <span>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </span>
                  <span>Farrapos - Picos, PI</span>
                </div>
              </li>

              <li className="flex gap-3 items-center w-200 rounded-md p-2 w-fit">
                <Timer
                  className="
                bg-brand-yellow 
                fill-white
                rounded-full
                text-[38px]
                p-2
              "
                />
                <div className="flex flex-col text-base-text text-base">
                  <span>Previsão de entrega</span>
                  <strong>20 min - 30 min</strong>
                </div>
              </li>
              <li className="flex gap-3 items-center w-200 rounded-md p-2 w-fit">
                <CurrencyDollar
                  className="
                bg-brand-yellow-dark 
                fill-white
                rounded-full
                text-[38px]
                p-2
              "
                />
                <div className="flex flex-col text-base-text text-base">
                  <span>Pagamento na entrega</span>
                  <strong>Cartão de Crédito</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" bg-base-white flex flex-col gap-1 justify-center  ">
          <Image
            src="/assets/images/Illustration.png"
            alt="illustration"
            width={400}
            height={400}
            className="animate-[bounce_20s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </>
  )
}
