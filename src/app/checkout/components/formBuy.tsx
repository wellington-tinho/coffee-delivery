import CurrencyDollar from '@/../public/assets/icons/CurrencyDollar'
import Box from '../layout/box'

export default function FormBuy() {
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
    </Box>
  )
}
