import Image from 'next/image'
// import Link from 'next/link'
import LogoCoffeeDelivery from 'public/assets/logo.svg'
import MapPinFill from 'public/assets/icons/map-pin-fill.svg'
// import ShoppingCartFill from 'public/assets/icons/shopping-cart-fill.svg'

export default function Navbar() {
  return (
    <nav className="border-4 border-rose-700 ">
      <div className="flex justify-between mx-40 content-between">
        <a className="" href="#">
          <Image src={LogoCoffeeDelivery} alt="logo" width={100} height={100} />
        </a>
        <div>
          <span
            className="flex gap-2 items-center font-Roboto text-sm rounded-lg px-2 py-[10px] bg-brand-purple-light text-brand-purple-dark border-[1px] hover:border-brand-purple duration-300
          "
          >
            <Image src={MapPinFill} alt="icon place" />
            Picos, PI
          </span>
          {/* <Link
            href="/checkout"
            className="
          flex gap-2 items-center font-Roboto text-sm rounded-lg px-2 py-[10px] bg-brand-purple-light text-brand-purple-dark border-[1px] hover:border-brand-purple duration-300
          "
          ></Link> */}
          {/* <ShoppingCartFill className="w-8 h-8" /> */}
        </div>
      </div>
    </nav>
  )
}
