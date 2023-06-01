import { Product } from '@/shared/types/Product'
import Cart from './components/cart'
import FormBuy from './components/formBuy'
import FormLocation from './components/formLocation'
import Navbar from './layout/navbar'

const coffees: Product[] = [
  {
    id: 1,
    name: 'Café da casa',
    description: 'Café da casa',
    price: 5,
    image: 'assets/images/Type=Expresso.svg',
    types: ['Grão', 'Moído'],
    amount: 1,
  },
  {
    id: 2,
    name: 'Café da casa2',
    description: 'Café da casa',
    price: 5,
    image: 'assets/images/Type=Expresso.svg',
    types: ['Grão', 'Moído'],
    amount: 1,
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
