import { Product } from '@/shared/types/Product'
import { Cart } from './components/cart'
import { FormBuy } from './components/formBuy'
import { FormLocation } from './components/formLocation'
import Navbar from './layout/navbar'

const coffees: Product[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'Café da casa',
    price: 9.9,
    image: 'assets/images/Type=Expresso.svg',
    types: ['Grão', 'Moído'],
  },
  {
    id: 2,
    name: 'Latte',
    description: 'Café da casa',
    price: 19.8,
    image: 'assets/images/Type=Latte.svg',
    types: ['Grão', 'Moído'],
  },
]
export default function Checkout() {
  return (
    <>
      <Navbar />
      <div className="px-40 bg-base-white flex gap-8">
        <div className="w-4/6">
          <p className="text-base-subtitle font-bold font-baloo text-lg mb-4 mt-10">
            Complete seu pedido
          </p>
          <FormLocation />
          <br />
          <FormBuy />
        </div>
        <div className="w-2/6">
          <p className="text-base-subtitle font-bold font-baloo text-lg mb-4 mt-10">
            Cafés selecionados
          </p>
          <Cart {...coffees} />
        </div>
      </div>
    </>
  )
}
