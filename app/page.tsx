import Hero from "@components/sections/Hero"
import Features from "@components/sections/Features"
import Download from "@components/sections/Download"
import FAQ from "@components/sections/FAQ"
import Subscribe from "@components/sections/Subscribe"


export default function Home() {
  return (
    <>
      <section className="w-[80%] h-screen mx-auto">
        <Hero/>
      </section>

      <section className="w-[80%] mx-auto mb-9">
        <Features/>
      </section>

      <section className="w-[80%] mx-auto mb-9">
        <Download/>
      </section>

      <section className="w-[80%] mx-auto mb-9">
        <FAQ/>
      </section>
      
      <section className="mx-auto bg-softBlue ">
        <Subscribe/>
      </section>
    </>
  );
}
