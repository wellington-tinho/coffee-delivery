import Image from 'next/image'
import LogoCoffeeDelivery from 'public/assets/logo.svg'
import MapPin from '../../../public/assets/icons/Map'
import Cart from '@/componentes/cart'

export default function Navbar() {
  return (
    <nav className="py-8 px-40 h-24">
      <div className="flex justify-between  content-between">
        <a className="" href="#">
          <Image src={LogoCoffeeDelivery} alt="logo" width={100} height={100} />
        </a>
        <div className="flex gap-3">
          <span
            className="flex gap-2 items-center text-sm rounded-lg 
                      px-2 py-[10px] bg-brand-purple-light 
                      text-brand-purple-dark border hover:border-brand-purple 
                      duration-300 xl:text-base"
          >
            <MapPin className="w-5 h-5 xl:w-6 xl:h-6" />
            Picos, PI
          </span>
          <Cart />
        </div>
      </div>
    </nav>
  )
}
