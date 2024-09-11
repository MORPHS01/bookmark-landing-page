"use client"
import Image from "next/image"
import { useState} from "react"
import Button from "@components/Button"
import {featuresDetails, labels} from "@components/constants"
// import tab1 from "@images/illustration-features-tab-1.svg"
// import tab2 from "@images/illustration-features-tab-2.svg"
// import tab3 from "@images/illustration-features-tab-3.svg"

function Carousel() {
    const [documentIndex, setDocumentIndex] = useState(0)

  return (
    <div>
        <div className="w-[55%] mx-auto flex justify-center items-center max-lg:flex-col max-lg:w-[70%]">
            {labels.map((data, i) => (<button onClick={() =>{ setDocumentIndex(i);  }} className={`${i === documentIndex ? "border-b-[3px] border-b-softRed" : "border-b-[1px] border-b-grayishBlue"} w-[100%] text-center pb-8  hover:text-softRed cursor-pointer max-lg:pt-4 max-lg:pb-4`}>{data.label}</button>))}
        </div>
        <div className="flex overflow-hidden w-[85%] mx-auto">
            {featuresDetails.map((data) => (
                <section className="pt-10 flex justify-between items-center w-full max-lg:flex-col max-lg:justify-center">
                    <div className="max-lg:pb-6">
                        <Image src={data[documentIndex].image} alt="tab-illustrator" />
                    </div>

                    <div className="w-[40%] max-lg:w-[100%] max-lg:text-center">
                        <h2 className="font-extrabold text-2xl leading-[3rem] text-veryDarkBlue mb-5 max-lg:text-xl max-lg:mb-3">{data[documentIndex].header}</h2>
                        <p className="detailsText mb-9 max-lg:mb-5">{data[documentIndex].textDetails}</p>
                        <Button label={data[documentIndex].buttonLabel} textColor="text-white" backgroundColour="bg-softBlue" borderColor="border-softBlue" hoverTextColor="hover:text-softBlue" hoverBorderColor="hover:border-softBlue"/>
                    </div>
                </section>
            ))}
        </div>
    </div>
  )
}

export default Carousel