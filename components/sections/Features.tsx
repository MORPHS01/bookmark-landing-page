import Carousel from "@components/Carousel"

function Features() {
  return (
    <section id="features" className="pt-[7.3em]">
      <div className="w-[45%] mx-auto max-lg:w-[85%] text-center">
        <h2 className="font-semibold text-2xl leading-[3rem] text-veryDarkBlue mb-5">Features</h2>
        <p className="detailsText mb-10">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
      <Carousel/>
    </section>
  )
}

export default Features