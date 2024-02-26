import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <div className="flex bg-white flex-col items-stretch">
        <Navbar/>
        <div
          className="flex w-full flex-col items-stretch mt-11 px-11 max-md:max-w-full max-md:mt-10 max-md:px-5"
        >
        <h1 className='text-center text-4xl font-bold text-[#132447]'>Unsere Vision</h1>
        <h2 className='text-center text-3xl font-bold text-gray-500 mt-5'>Für eine nachhaltige Zukunft</h2>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div
                className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0"
              >
                <Image
                  width={1920}
                  height={1080}
                  quality={100}
                  alt='img1.jpg'
                  src="/img1.jpg"
                  loading="lazy"
                  className="object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-6"
                />
              </div>
              <div
                className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 rounded-bl-3xl bg-opacity-70 flex flex-col w-full pl-10 pr-16 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold leading-[68px] uppercase self-stretch max-md:max-w-full"
                  >
                    Nachhaltig sein
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-2 max-md:max-w-full"
                  >
                    Bei der Erzeugung von Solarstrom entstehen keine schädlichen CO2-Emissionen, kein Rauch und kein Feinstaub. Dadurch werden Umweltauswirkungen minimiert und ein nachhaltiger Lebensstil gefördert. Dies trägt zur Bewahrung unserer Umwelt und zur Bekämpfung des Klimawandels bei. Die Installation und Wartung von Solaranlagen bieten Beschäftigungsmöglichkeiten, während die Reduzierung der Abhängigkeit von importierten Brennstoffen die Wirtschaftsstrukturen stärkt. 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div
                className="flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 rounded-br-3xl bg-opacity-70 flex grow flex-col w-full pl-10 pr-16 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold uppercase self-stretch max-md:max-w-full"
                  >
                    Unabhängig sein
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-4 max-md:max-w-full"
                  >
                    Die Solarenergie ist unbegrenzt und kostenlos für jedermann verfügbar. Durch die Einstrahlung der Photonen auf die Solarmodule können Haushalte ihre autarke  Energie erzeugen, Kosten reduzieren und sich von traditionellen Energiequellen emazipieren. Die Autarkie von Solarenergie bedeutet zudem eine Stabilisierung des Energiezustroms. Selbst bei Netzausfällen oder Krisensituationen können solarbetriebene Systeme eine kontinuierliche Stromversorgung gewährleisten. Diese Zuverlässigkeit stärkt die Widerstandsfähigkeit von Gemeinschaften und trägt zur Energiesicherheit bei, indem sie auf erneuerbare, lokale Ressourcen setzt. 
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0"
              >
                <Image
                  width={1920}
                  height={1080}
                  quality={100}
                  alt='img2.jpg'
                  src="/img2.jpg"
                  loading="lazy"
                  className="aspect-[1.52] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div
                className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0"
              >
                <img
                  loading="lazy"
                  src="img-1.png"
                  className="aspect-[1.52] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-6"
                />
              </div>
              <div
                className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 rounded-bl-3xl bg-opacity-70 flex grow flex-col w-full pl-10 pr-16 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold uppercase self-stretch max-md:max-w-full"
                  >
                    Smart Home
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-4 max-md:max-w-full"
                  >
                    Die Integration von Smart-Home-Technologien mit Photovoltaikanlagen bietet eine effiziente und nachhaltige Energielösung. Durch intelligente Systeme können Verbraucher den Energieverbrauch optimieren, indem sie Geräte automatisch an den Energieerzeugungszyklus der Photovoltaikanlage anpassen. Das steigert nicht nur die Eigenverbrauchsquote, sondern ermöglicht auch die Fernüberwachung und -steuerung des Energiehaushalts. Diese Synergie zwischen Smart Home und Photovoltaik fördert eine umweltbewusste, kosteneffiziente Nutzung erneuerbarer Energien. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>  
    </>
  )
}

export default About