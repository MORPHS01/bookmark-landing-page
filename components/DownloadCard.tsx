import Image from "next/image"
import Button from "@components/Button" 

type DownloadCardProps = {
    imageURL:string,
    browserName:string,
    minimum:string,
    marginTop: string
}


function DownloadCard({imageURL, browserName, minimum, marginTop}: DownloadCardProps){
  return (
    <div className={`p-6 w-[31%] text-center flex flex-col justify-center items-center shadow-2xl rounded-lg max-sm:w-[80%] max-md:w-[60%] max-lg:w-[40%] ${marginTop}`}>
        <Image src={imageURL} alt="browser" className="mb-6"/>
        <h2 className="font-semibold text-lg leading-[3rem] text-veryDarkBlue mb-0">Add to {browserName}</h2>
        <p className="detailsText pb-9">Minimum version {minimum}</p>
        <hr className="border-b-4 border-b-slate-300 border-dotted w-[119%] mb-5" />
        <Button label="Add & Install Extension" textColor="text-white" backgroundColour="bg-softBlue" borderColor="border-softBlue" hoverTextColor="hover:text-softBlue" hoverBorderColor="hover:border-softBlue"/>
    </div>
  )
}

export default DownloadCard