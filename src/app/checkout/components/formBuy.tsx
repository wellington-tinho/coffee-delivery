import CurrencyDollar from '@/../public/assets/icons/CurrencyDollar'
import Box from '../layout/box'
import Bank from '@/../public/assets/icons/Bank'

export function FormBuy() {
  return (
    <Box>
      <div className="flex gap-3 items-start ">
        <CurrencyDollar className="w-6 h-6 text-brand-purple-dark mt-[2px]" />
        <div className="">
          <p className="text-base-subtitle font-bold text-base ">Pagemento</p>
          <span className="text-base-text font-normal text-sm">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="flex gap-2 items-center justify-center border-2 py-4 px-5 rounded-lg">
          <Bank color="#8047F8" fill="#8047F8" />
          <span className="text-base-text font-normal text-sm uppercase">
            cartão de débito
          </span>
        </div>
        <div className="flex gap-2 items-center justify-center border-2 py-4 px-5 rounded-lg">
          <Bank />
          <span className="text-base-text font-normal text-sm uppercase">
            cartão de crédito
          </span>
        </div>
        <div className="flex gap-2 items-center justify-center border-2 py-4 px-5 rounded-lg">
          <Bank />
          <span className="text-base-text font-normal text-sm  uppercase">
            dinheiro
          </span>
        </div>
      </div>
    </Box>
  )
}
