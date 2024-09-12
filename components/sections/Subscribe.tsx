import Button from "@components/Button"

function Subscribe() {
  return (
    <section id="contact" className="w-[80%] mx-auto py-[3.5em] flex flex-col justify-center items-center">
      <p className="text-sm text-white tracking-widest mb-6">35,000+ ALREADY JOINED</p>
      <p className="font-semibold text-2xl leading-[3rem] text-white mb-5 text-center">Stay up-to-date with what we’re doing</p>
      <div className="flex gap-6 justify-center max-sm:flex-col">
        <input required type="email" placeholder="Enter your email address" className="rounded-md px-5 text-sm focus:outline-none"/>
        <Button label="Contact Us" textColor="text-white" backgroundColour="bg-softRed" borderColor="border-softRed" hoverTextColor="hover:text-softRed" hoverBorderColor="hover:border-softRed"/>
      </div>
    </section>
  )
}

export default Subscribe