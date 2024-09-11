import DownloadCard from "@components/DownloadCard"
import chrome from "@images/logo-chrome.svg"
import fireFox from "@images/logo-firefox.svg"
import opera from "@images/logo-opera.svg"

function Download() {
  return (
    <section  className="pt-[7.3em]">
      <div className="w-[45%] mx-auto max-lg:w-[85%] text-center">
        <h2 className="font-semibold text-2xl leading-[3rem] text-veryDarkBlue mb-5">Download the extension</h2>
        <p className="detailsText">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      </div>

      <div className="w-[80%] mx-auto flex justify-between items-center max-lg:flex-col">
        <DownloadCard imageURL={chrome} browserName="Chrome" minimum="62" marginTop="mt-[0px] max-lg:mt-5 max-lg:shadow-xl"/>
        <DownloadCard imageURL={fireFox} browserName="Firefox" minimum="55" marginTop="mt-[5em] max-lg:mt-5 max-lg:shadow-xl"/>
        <DownloadCard imageURL={opera} browserName="Opera" minimum="46" marginTop="mt-[10em] max-lg:mt-5 max-lg:shadow-xl"/>
      </div>
    </section>
  )
}

export default Download