import Image from 'next/image'
import Link from 'next/link'
import LogoCoffeeDelivery from 'public/assets/logo.svg'
import MapPinFill from 'public/assets/icons/map-pin-fill.svg'
// import ShoppingCartFill from 'public/assets/icons/shopping-cart-fill.svg'
import ShoppingCartFill from '../../../public/assets/icons/shopping-cart-fill'

import 'styles/components/navbar.css'

export default function Navbar() {
  return (
    <nav className="border-4 border-rose-700 ">
      <div className="flex justify-between mx-40 content-between">
        <a className="" href="#">
          <Image src={LogoCoffeeDelivery} alt="logo" width={100} height={100} />
        </a>
        <div className="flex gap-3">
          <span
            className="flex gap-2 items-center font-Roboto text-sm rounded-lg px-2 py-[10px] bg-brand-purple-light text-brand-purple-dark border-[1px] hover:border-brand-purple duration-300
          "
          >
            <Image src={MapPinFill} alt="icon place" />
            Picos, PI
          </span>
          <Link
            href="/checkout"
            className="flex
            bg-brand-yellow-light text-brand-yellow-dark rounded-lg  hover:border-brand-yellow duration-300 p-2
            "
          >
            {/* <Image
              src={ShoppingCartFill}
              alt="icon cart"
              className="custom-icon-cart"
            /> */}
            <ShoppingCartFill className="custom-icon-cart w-8 h-8" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
