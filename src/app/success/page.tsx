import Image from 'next/image'
import Navbar from '../layout/navbar'

export default function Success() {
  return (
    <>
      <Navbar />
      <div className="px-40 bg-base-white flex gap-8">
        <div className="px-40 bg-base-white flex flex-col gap-1">
          <div>
            <p className="text-3xl font-baloo text-brand-yellow-dark font-extrabold">
              Uhu! Pedido confirmado
            </p>
            <span className="font-normal text-sm text-base-subtitle">
              Agora é só aguardar que logo o café chegará até você.
            </span>
          </div>

          <ul>
            <li>
              <i>icon</i>
              <div>
                Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                Alegre, RS
              </div>
            </li>

            <li>Previsão de entrega 20 min - 30 min</li>

            <li>Pagamento na entrega Cartão de Crédito</li>
          </ul>
        </div>
        <div className="px-40 bg-base-white flex flex-col gap-1">
          <Image
            src="/assets/images/Illustration.png"
            alt="illustration"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  )
}
