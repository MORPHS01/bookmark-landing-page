import Button from "@components/Button"
import Image from "next/image"
import heroImage from "@images/illustration-hero.svg"

function Hero() {
  return (
    <section className=" flex justify-between items-center h-screen w-full max-lg:flex-col-reverse max-lg:justify-center max-lg:pt-[6em]">
      <div className="w-[40%] max-lg:w-[85%] max-lg:text-center">
        <h2 className="font-extrabold text-4xl leading-[3rem] text-veryDarkBlue mb-5 max-lg:text-3xl">A Simple Bookmark Manager</h2>
        <p className="detailsText mb-9">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className="flex gap-4 max-lg:justify-center">
          <Button label="Get it on Chrome" textColor="text-white" backgroundColour="bg-softBlue" borderColor="border-softBlue" hoverTextColor="hover:text-softBlue" hoverBorderColor="hover:border-softBlue"/>
          <Button label="Get it on Firefox" textColor="text-black" backgroundColour="bg-slate-200" borderColor="border-slate-200" hoverTextColor="hover:text-black" hoverBorderColor="hover:border-black"/>
        </div>
      </div>

      <div className="">
        <Image src={heroImage} alt="heroImage"/>
      </div>
    </section>
  )
}

export default Hero