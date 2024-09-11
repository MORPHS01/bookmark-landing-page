import logo from "@images/logo-bookmark.svg"
import facebook from "@images/icon-facebook.svg"
import twitter from "@images/icon-twitter.svg"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-veryDarkBlue py-[1.5em] text-white">
      <div className="w-[80%] mx-auto flex justify-between max-sm:flex-col">
        <div className="flex justify-start gap-20 max-md:gap-7 max-sm:flex-col max-sm:gap-0">
          <Link href="/" className=" flex justify-center items-center">
            <Image src={logo} alt="logo" className="grayscale invert"/>
          </Link>
          <div className="flex gap-10 justify-center items-center flex-1 max-md:gap-3 max-sm:flex-col max-sm:gap-5 py-10">
            <Link href="#features" className="uppercase text-sm hover:text-softRed cursor-pointer">Features</Link>
            <Link href="/" className="uppercase text-sm hover:text-softRed cursor-pointer">Pricing</Link>
            <Link href="#contact" className="uppercase text-sm hover:text-softRed cursor-pointer">Contact</Link>
          </div>
        </div>

        <div className="flex justify-center gap-7">
          <Link href="/" className=" flex justify-center items-center hover:stroke-softRed">
            <Image src={facebook} alt="facebook"/>
          </Link>

          <Link href="/" className=" flex justify-center items-center ">
            <Image src={twitter} alt="twitter"/>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer