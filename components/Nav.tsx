"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "@images/logo-bookmark.svg"
import hamburger from "@images/icon-hamburger.svg"
import exit from "@images/icon-close.svg"
import Button from "@components/Button"
import facebook from "@images/icon-facebook.svg"
import twitter from "@images/icon-twitter.svg"

function Nav() {
    function hamburgerClick(){
        document.getElementById("navBar")?.classList.add("hidden")
        document.getElementById("modal")?.classList.remove("hidden")

    }

    function exitHamburger(){
        document.getElementById("navBar")?.classList.remove("hidden")
        document.getElementById("modal")?.classList.add("hidden")
    }
    
  return (
    <header className='fixed z-10 backdrop-blur-[8px] w-full'>
        <nav id="navBar" className='w-[80%] mx-auto py-10 flex justify-between'>
            <Link href="/" className=" flex justify-center items-center">
                <Image src={logo} alt="logo"/>
            </Link>


            <div className="flex gap-[60px] justify-center items-center max-lg:hidden">
                <div className="flex gap-10 justify-center items-center flex-1">
                    <Link href="#features" className="uppercase font-semibold text-sm hover:text-softRed cursor-pointer">Features</Link>
                    <Link href="/" className="uppercase font-semibold text-sm hover:text-softRed cursor-pointer">Pricing</Link>
                    <Link href="#contact" className="uppercase font-semibold text-sm hover:text-softRed cursor-pointer">Contact</Link>
                </div>

                <Button label="LOGIN" textColor="text-white" backgroundColour="bg-softRed" borderColor="border-softRed" hoverTextColor="hover:text-softRed" hoverBorderColor="hover:border-softRed"/>
            </div>

            <div className="hidden max-lg:flex justify-center items-center cursor-pointer" onClick={hamburgerClick}>
                <Image src={hamburger} alt="hamburger"/>
            </div>
        </nav>

        <div id="modal" className="hidden w-full h-[75vh] bg-veryDarkBlue bg-opacity-90 fixed top-0 z-20">
            <div className="flex justify-between w-[80%] mx-auto py-10">
                <Link href="/" className=" flex justify-center items-center ">
                    <Image src={logo} alt="logo" className="grayscale invert"/>
                </Link>

                <div className=" flex justify-center items-center " onClick={exitHamburger}>
                    <Image src={exit} alt="exit" />
                </div>
            </div>

            <div className="w-[80%] mx-auto mb-5 flex flex-col justify-center items-center">
                <Link onClick={exitHamburger} href="#features" className="tracking-[0.2em] uppercase py-7 border-b-[1px] border-b-solid border-b-slate-400 w-full text-white cursor-pointer text-center border-t-[1px] border-t-solid border-t-slate-400">Features</Link>
                <Link onClick={exitHamburger} href="/" className="tracking-[0.2em] uppercase py-7 border-b-[1px] border-b-solid border-b-slate-400 w-full text-white cursor-pointer text-center">Pricing</Link>
                <Link onClick={exitHamburger} href="#contact" className="tracking-[0.2em] uppercase py-7 border-b-[1px] border-b-solid border-b-slate-400 w-full text-white cursor-pointer text-center">Contact</Link>
            </div>

            <button className="w-[80%] mx-auto border-[3px] border-solid border-white flex justify-center items-center p-4 text-white font-bold tracking-[0.2em]">
                LOGIN
            </button>

            <div className="flex justify-center gap-7 mt-20">
                <Link href="/" className=" flex justify-center items-center ">
                    <Image src={facebook} alt="facebook"/>
                </Link>

                <Link href="/" className=" flex justify-center items-center ">
                    <Image src={twitter} alt="twitter"/>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Nav