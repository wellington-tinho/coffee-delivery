import Image from 'next/image'
import Link from 'next/link'
import LogoCoffeeDelivery from 'public/assets/logo.svg'
import MapPin from '../../../public/assets/icons/Map'
import ShoppingCartFill from '../../../public/assets/icons/shopping-cart-fill'

export default function Navbar() {
  return (
    <nav className="py-8 px-40">
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
          <Link
            href="/checkout"
            className="flex
            bg-brand-yellow-light text-brand-yellow-dark rounded-lg border hover:border-brand-yellow-dark duration-300 p-2"
          >
            <ShoppingCartFill className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
