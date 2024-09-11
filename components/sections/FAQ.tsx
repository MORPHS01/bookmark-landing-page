"use client"
import Image from "next/image"
import arrow from "@images/icon-arrow.svg"
import Button from "@components/Button"

function FAQ() {
  function flipArrow(num: number){
    document.getElementById(`img${num}`)?.classList.toggle("scale-y-[-1]")
  }

  return (
    <section  className="pt-[7.3em]">
      <div className="w-[45%] mx-auto max-lg:w-[85%] text-center">
        <h2 className="font-semibold text-2xl leading-[3rem] text-veryDarkBlue mb-5">Frequently Asked Questions</h2>
        <p className="detailsText">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>

      <div className="py-9 lg:w-[50%] md:w-[70%] md:mx-auto">
        <details className="cursor-pointer border-b-[1px] border-b-slate-gray py-3 border-t-[1px] border-t-slate-gray">
          <summary onClick={() => flipArrow(1)}  className="list-none font-medium text-lg text-veryDarkBlue hover:text-softRed relative">What is Bookmark? <Image id="img1" src={arrow} alt="arrow" className="absolute right-0 top-[30%]"/></summary>
          <p className="pt-9 pb-4 text-md detailsText font-extralight leading-[2em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
        </details>

        <details className="cursor-pointer border-b-[1px] border-b-slate-gray py-3">
          <summary onClick={() => flipArrow(2)} className="list-none font-medium text-lg text-veryDarkBlue hover:text-softRed relative">How can I request a new browser? <Image id="img2" src={arrow} alt="arrow" className="absolute right-0 top-[30%]"/></summary>
          <p className="pt-9 pb-4 text-md detailsText font-extralight leading-[2em]">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
        </details>

        <details className="cursor-pointer border-b-[1px] border-b-slate-gray py-3">
          <summary onClick={() => flipArrow(3)} className="list-none font-medium text-lg text-veryDarkBlue hover:text-softRed relative">Is there a mobile app? <Image id="img3" src={arrow} alt="arrow" className="absolute right-0 top-[30%]"/></summary>
          <p className="pt-9 pb-4 text-md detailsText font-extralight leading-[2em]">Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.</p>
        </details>

        <details className="cursor-pointer border-b-[1px] border-b-slate-gray py-3">
          <summary onClick={() => flipArrow(4)} className="list-none font-medium text-lg text-veryDarkBlue hover:text-softRed relative">What about other Chromium browsers? <Image id="img4" src={arrow} alt="arrow" className="absolute right-0 top-[30%]"/></summary>
          <p className="pt-9 pb-4 text-md detailsText font-extralight leading-[2em]">Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.</p>
        </details>
      </div>

      <div className="flex justify-center"><Button label="More Info" textColor="text-white" backgroundColour="bg-softBlue" borderColor="border-softBlue" hoverTextColor="hover:text-softBlue" hoverBorderColor="hover:border-softBlue"/></div>
    </section>
  )
}

export default FAQ