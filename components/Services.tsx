"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import Plus from './ui/plusicon'
import Minus from './ui/minusicon'
import ScrollHandler from './ScrollHandler';

const Services = () => {

  const [activeLinkId, setActiveLinkId] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = 1; i <= 7; i++) {
        const section = document.getElementById(`section${i}`);
        const nextSection = i < 7 ? document.getElementById(`section${i + 1}`) : null;

        if (section && nextSection) {
          const sectionTop = section.offsetTop;
          const nextSectionTop = nextSection.offsetTop;

          if (scrollY >= sectionTop && scrollY < nextSectionTop) {
            setActiveLinkId(i);
            break; // Exit the loop once we find the active link
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
  });


  return (
    <>
    <div className="flex bg-white flex-col items-stretch">
        <Navbar/>
        <div
          className="flex-col overflow-hidden relative flex min-h-[603px] w-full justify-center items-start max-md:max-w-full max-md:px-5"
        >
          <video id="product-video" autoPlay={true} className='w-full h-full'>
            <source src="https://enpaldynamicsliderstrg.blob.core.windows.net/slider-images/Marketing-Materials/Enpal-Product-Page-6s-v13.mp4" type="video/mp4" data-wf-ignore="true"/>
          </video>
          
        </div>
        <div
          className="flex w-full flex-col items-stretch mt-11 px-11 max-md:max-w-full max-md:mt-10 max-md:px-5"
        >
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col items-stretch max-md:gap-0">
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
                className="flex w-[62%] ml-5 max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 justify-between rounded-bl-3xl bg-opacity-70 flex flex-col w-full pl-10 pr-16 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold leading-[68px] uppercase self-stretch max-md:max-w-full"
                  >
                    Beratung
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-2 max-md:max-w-full"
                  >
                    
                  </div>
                  <div
                    className="bg-neutral-700 flex items-stretch justify-between gap-5 mt-7 pl-6 pr-5 py-4 max-md:pl-5"
                  >
                    <div
                      className="text-white text-xl font-medium leading-8 tracking-[2.4px]"
                    >
                      Contact
                    </div>
                    <div
                    className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
                  >
                    <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col items-stretch max-md:gap-0">
              <div
                className="flex items-stretch w-[62%] max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 justify-between rounded-br-3xl bg-opacity-70 flex grow flex-col w-full pl-10 pr-16 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold uppercase self-stretch max-md:max-w-full"
                  >
                    Finanzierung
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-4 max-md:max-w-full"
                  >
                  </div>
                  <div
                    className="bg-neutral-700 flex items-stretch gap-5 mt-10 px-4 py-4"
                  >
                    <div
                      className="text-white text-xl font-medium leading-8 tracking-[2.4px] grow whitespace-nowrap"
                    >
                      Contact
                    </div>
                    <div
                      className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
                    >
                      <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                    </div>
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
            <div className="gap-5 flex max-md:flex-col items-stretch max-md:gap-0">
              <div
                className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0"
              >
                <Image
                  width={1920}
                  height={1080}
                  alt='img-1'
                  loading="lazy"
                  src="/img-1.png"
                  className="aspect-[1.52] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-6"
                />
              </div>
              <div
                className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 justify-between rounded-bl-3xl bg-opacity-70 flex grow flex-col w-full pl-10 pr-16 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold uppercase self-stretch max-md:max-w-full"
                  >
                    Montage
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-4 max-md:max-w-full"
                  >
                  </div>
                  <div
                    className="bg-neutral-700 flex items-stretch justify-between gap-5 mt-10 px-5 py-4"
                  >
                    <div
                      className="text-white text-xl font-medium leading-8 tracking-[2.4px]"
                    >
                      Montage
                    </div>
                    <div
                      className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
                    >
                      <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col items-stretch max-md:gap-0">
              <div
                className="flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0"
              >
                <div
                  className="bg-yellow-400 justify-between rounded-br-3xl bg-opacity-70 flex grow flex-col w-full pl-10 pr-8 py-6 rounded-none items-start max-md:max-w-full max-md:mt-6 max-md:px-5"
                >
                  <div
                    className="text-neutral-700 text-4xl font-bold uppercase self-stretch max-md:max-w-full"
                  >
                    Wartung
                  </div>
                  <div
                    className="text-neutral-700 text-xl leading-8 self-stretch mt-4 max-md:max-w-full"
                  >

                  </div>
                  <div
                    className="bg-neutral-700 flex items-stretch gap-3.5 mt-11 px-4 py-4 max-md:mt-10"
                  >
                    <div className="text-white text-xl leading-8">
                      Wartung
                    </div>
                    <div
                      className="flex-col stroke-[2px] stroke-white overflow-hidden relative flex aspect-square w-3 justify-center items-center"
                    >
                      <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>
                    </div>
                  </div>
                </div>
              </div>    
            </div>  
          </div>
          <div className="grid grid-cols-4 w-11/12 self-center max-md:grid-cols-2 my-10 h-full">
          <ScrollHandler />
            <div className="w-4/6">
              <div className="sticky overflow-unset top-32">
                <h6 className='text-lg font-bold text-blue-900'>INHALTSVERZEICHNIS</h6>
                <Link className={activeLinkId === 1 ? 'active mt-3 border-l-2 border-l-yellow-500 pl-2 font-semibold text-slate-900 block text-md text-wrap transition-all' : 'mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:pl-2 hover:font-semibold hover:text-slate-900 block text-md text-wrap text-gray-500'} href="#section1">Photovoltaik Montage: Das wird benötigt</Link>
                <Link className={activeLinkId === 2 ? 'active mt-3 border-l-2 border-l-yellow-500 pl-2 font-semibold text-slate-900 block text-md text-wrap transition-all' : 'mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:pl-2 hover:font-semibold hover:text-slate-900 block text-md text-wrap text-gray-500'} href="#section2">Photovoltaik Montagearten</Link>
                <Link className={activeLinkId === 3 ? 'active mt-3 border-l-2 border-l-yellow-500 pl-2 font-semibold text-slate-900 block text-md text-wrap transition-all' : 'mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:pl-2 hover:font-semibold hover:text-slate-900 block text-md text-wrap text-gray-500'} href="#section3">Photovoltaik Montagesysteme</Link>
                <Link className={activeLinkId === 4 ? 'active mt-3 border-l-2 border-l-yellow-500 pl-2 font-semibold text-slate-900 block text-md text-wrap transition-all' : 'mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:pl-2 hover:font-semibold hover:text-slate-900 block text-md text-wrap text-gray-500'} href="#section4">In acht Schritten zu Solarenergie</Link>
                <Link className={activeLinkId === 5 ? 'active mt-3 border-l-2 border-l-yellow-500 pl-2 font-semibold text-slate-900 block text-md text-wrap transition-all' : 'mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:pl-2 hover:font-semibold hover:text-slate-900 block text-md text-wrap text-gray-500'} href="#section5">Sicherheit</Link>
                <Link className={activeLinkId === 6 ? 'active mt-3 border-l-2 border-l-yellow-500 pl-2 font-semibold text-slate-900 block text-md text-wrap transition-all' : 'mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:pl-2 hover:font-semibold hover:text-slate-900 block text-md text-wrap text-gray-500'} href="#section6">Häufig gestellte Fragen</Link>
                <Link className={activeLinkId === 7 ? 'active mt-3 border-l-2 border-l-yellow-500 pl-2 font-semibold text-slate-900 block text-md text-wrap transition-all' : 'mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:pl-2 hover:font-semibold hover:text-slate-900 block text-md text-wrap text-gray-500'} href="#section7">Fazit</Link>
              </div>
            </div>
            <div className="ml-5 col-span-3">
              <h2 className='text-4xl max-md:w-full max-md:mt-5 w-3/4 font-bold'>Photovoltaik Montage: So kommt die PV-Anlage auf Ihr Dach</h2>
              <div className="bg-blue-100 p-4 rounded-xl mt-4">
                <h4 className='text-xl font-bold mb-4'>Photovoltaik Montage: Das Wichtigste in Kürze</h4>
                <p>Mit einer Solaranlage gewinnen die Besitzer Unabhängigkeit von den steigenden Strompreisen, sparen bares Geld und tun ganz nebenbei etwas Gutes für die Umwelt. Bei der Montage einer Anlage gibt es verschiedene Arten:</p>
                <ul className='list-outside ms-5 list-disc mt-6'>
                  <li className='list-item font-semibold mb-3'>Zur Montage sind vor allem vier Montagebestandteile unerlässlich: Die Solarmodule, Dachhaken, Montageschienen und Modulklemmen.</li>
                  <li className='list-item font-semibold mb-3'>Es gibt folgende Montagearten: Aufdach-, Flachdach-, Blechdach- und Indach-PV, wie auch Fassaden-PV, Freiflächen PV und Solardachziegel</li>
                  <li className='list-item font-semibold mb-3'>Solardachziegel sind die einzige Montageart, in denen keine herkömmlichen großen Module installiert werden.</li>
                  <li className='list-item font-semibold mb-3'>Vor der Montage der Module selbst, muss die Unterkonstruktion installieret und die DC-Verkabelung verlegt werden.</li>
                  <li className='list-item font-semibold mb-3'>Der letzte Schritt einer PV-Montage ist die Überprüfung, Messung und ein Probedurchlauf.</li>
                </ul>
                <p>Enpal bietet Aufdach-Solaranlagen im flexiblen Miet- oder Kaufmodell an. Das Besondere dabei: 0 € Anzahlung, 100% flexibel, kein Risiko. Sie zahlen erst, wenn Ihre PV-Anlage Strom produziert. Ab dann haben Sie drei Monate Zeit, um flexibel zwischen Solaranlage mieten und Solaranlage kaufen zu entscheiden.</p>
                <Link className='mt-4 text-blue-500' href={"/services/link/mehr-erfahren"}>{">>"} Mehr erfahren</Link>
              </div>
              <div className="mt-8">
                <Image
                height={1080}
                width={1080}
                alt='services1'
                src="/services1.jpg"
                className='w-full rounded-xl'
                />
              </div>
              <div className="mt-8">
                <p className='text-lg'>Wer sich von den steigenden Strompreisen und seinem Stromanbieter unabhängig machen will, macht mit einer <Link href={"/services/link/photovoltaikanlage"} className='text-blue-600'>Photovoltaikanlage</Link> genau den richtigen Schritt in Richtung günstige und nachhaltige Energiegewinnung. Doch bevor man von <Link href={"/services/link/solarenergie"} className='text-blue-600'>Solarenergie</Link> profitieren kann, muss die Anlage sorgfältig geplant und natürlich installiert werden. In diesem Artikel werfen wir einen detaillierten Blick auf den Montageprozess und die verschiedenen Montagesysteme einer PV-Anlage.</p>
              </div>
              <div className="mt-8 rounded-xl bg-blue-100 p-4">
                <h6 className='text-xl font-bold text-blue-900'>INHALTSVERZEICHNIS</h6>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#section1">Photovoltaik Montage: Das wird benötigt</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#section2">Photovoltaik Montagearten</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#section3">Photovoltaik Montagesysteme</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#section4">In acht Schritten zu Solarenergie</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#section5">Sicherheit</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#section6">Häufig gestellte Fragen</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#section7">Fazit</Link>
              </div>
              <div className="mt-8" id='section1'>
                <h1 className='text-3xl border-l-4 font-bold border-l-yellow-500 pl-3'>Photovoltaik Montage: Das wird benötigt</h1>
                <p className='text-lg mt-4'>Für jede Photovoltaik Montage werden bestimmte Materialien benötigt, ohne die eine PV-Anlage nicht montiert werden und keinen <Link href={"/services/link/solarstrom"} className='text-blue-500'>Solarstrom</Link> produzieren könnte.</p>
              </div>
              <div className="bg-red-50 mt-8 p-4 rounded-xl">
                <table className='table'>
                  <thead className=''>
                    <td className='text-start font-bold'>Materialien</td>
                    <td className='text-start font-bold pl-3'>Funktion</td>
                  </thead>
                  <tbody>
                    <tr className='border-b-gray-300 border-b h-16'>
                      <td>Solarmodule</td>
                      <td className='pl-3'>Solarmodule wandeln Sonnenlicht in Strom um. Es gibt drei Modularten. Jede Modulart hat eigene Vor- und Nachteile.</td>
                    </tr>
                    <tr className='border-b-gray-300 border-b h-16'>
                      <td>Dachhaken</td>
                      <td className='pl-3'>Dachhaken verbinden die Montageschienen mit den Dachsparren. In der Regel sehen sie aus wie ein U-förmiger Bügel.</td>
                    </tr>
                    <tr className='border-b-gray-300 border-b h-16'>
                      <td>Montageschiene</td>
                      <td className='pl-3'>Montageschienen dienen als Tragegerüste für die Solarmodule. Sie sind fest verschraubt auf den Dachhaken.</td>
                    </tr>
                    <tr className='h-16'>
                      <td>Modulklemmen</td>
                      <td className='pl-3'>Modulklemmen sitzen in den Montageschienen. Sie halten mit zwei Armen die Module rechts und links von sich fest.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8">
                <p className='text-lg'>Im Kapitel <Link href={"/services/link/photovoltaik-montagesysteme"} className='text-blue-500'>Photovoltaik Montagesysteme</Link> gehen wir noch detaillierter auf die Materialien und ihre Eigenschaften ein. Im Folgenden geht es jedoch erst einmal um die unterschiedlichen Montagearten.</p>
              </div>
              <div className="mt-8" id='section2'>
                <h1 className='text-3xl border-l-4 font-bold border-l-yellow-500 pl-3'>Photovoltaik Montagearten</h1>
                <p className='text-lg mt-4'>Bei der Montage einer Photovoltaikanlage kann zwischen verschiedenen Montagearten gewählt werden. Je nach Dachart und persönlichen Präferenzen stehen folgende Montagearten zur Auswahl:</p>
                <ul className='list-disc list-inside font-semibold *:mt-3'>
                  <li>Aufdach-PV</li>
                  <li><Link href={"/services/link/flachdach-aufständerung"} className='text-blue-500'>Flachdach Aufständerung</Link></li>
                  <li>Photovoltaik auf einem Blechdach</li>
                  <li>Indach Photovoltaik</li>
                  <li>Photovoltaik-Fassaden</li>
                  <li>Freiflächen Photovoltaik</li>
                  <li>Solardachziegel</li>
                </ul>
                <p className='text-lg mt-4'>Die Montagearten unterscheiden sich hinsichtlich der benötigten Materialien und des Montageprozesses. Schauen wir sie uns im Detail an.</p>
              </div>
              <div className="mt-6">
                <h2 className='text-xl font-bold'>Aufdach-Photovoltaikanlagen</h2>
                <p className='text-lg mt-4'>Aufdachanlagen sind die häufigste Art der Photovoltaik Montage.</p>
                <ol className='list-decimal list-outside ms-5 font-semibold *:text-lg *:mt-2'>
                  <li>Im ersten Schritt wird berechnet, an welchen Stellen am Dach ein Dachhaken notwendig ist, um die Solarmodule zu montieren. Es können nur Stellen gewählt werden, an denen Dachsparren verlaufen.</li>
                  <li>Daraufhin werden die ausgewählten Dachziegel vorübergehend aus dem Dach entfernt. So werden die Dachsparren freigelegt.</li>
                  <li>Die Dachhaken werden dann an ihren Ankerplatten mit einem Dachsparren verschraubt. Ankerplatten sind flache Metallplatten, die am Bügel des Dachhakens verschweißt sind. Durch Löcher in der Ankerplatte können die Schrauben in die Sparren gedreht werden. </li>
                  <li>In die Dachpfannen wird unten eine kleine Aussparung gefräst. So kann der Dachhaken problemlos zwischen den Ziegeln sitzen. </li>
                  <li>In die Dachpfannen wird unten eine kleine Aussparung gefräst. So kann der Dachhaken problemlos zwischen den Ziegeln sitzen. </li>
                  <li>Sind alle Dachhaken gesetzt, werden die Montageschienen in die U-förmige Halterung des Hakens gelegt und verschraubt. </li>
                  <li>Anschließend werden die Solarmodule auf die Schienen gelegt.</li>
                  <li>Dort werden sie mit Hilfe von Modulklemmen sicher befestigt. Die Klemmen sitzen in den Schienen zwischen den Panels. Mit zwei Armen halten sie die Module links und rechts von sich fest. </li>
                </ol>
                <p className='text-lg mt-4'>Im Folgenden sind die Vor- und Nachteile von Aufdach-Photovoltaik im Vergleich zu den anderen Montagearten gelistet:</p>
              </div>
              <div className="bg-red-50 mt-8 p-8 rounded-xl">
                <table className='table text-sm'>
                  <thead className=''>
                    <td className='text-start font-bold w-1/2'>Vorteile</td>
                    <td className='text-start font-bold w-1/2'>Nachteile</td>
                  </thead>
                  <tbody>
                    <tr className='border-b-gray-300 border-b h-16'>
                      <td><Plus/> Die günstigste und schnellste Montageart</td>
                      <td><Minus/> Modulneigung abhängig vom Dach</td>
                    </tr>
                    <tr className='border-b-gray-300 border-b h-16'>
                      <td><Plus/> Vergleichsweise weniger Montageaufwand</td>
                      <td><Minus/> Anzahl der Module evtl. von Dachfenstern o.Ä. eingeschränkt</td>
                    </tr>
                    <tr className='border-b-gray-300 border-b h-16'>
                      <td><Plus/> Luftzirkulation unter den Modulen erlaubt eine natürliche Kühlung</td>
                      <td></td>
                    </tr>
                    <tr className='h-16'>
                      <td><Plus/> Wenig Platzbedarf</td>
                      <td></td>
                    </tr>
                    <tr className='h-16'>
                      <td><Plus/> Auswahl zwischen verschiedenen Modularten möglich</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services2'
                  src="/services2.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8">
                <h2 className='text-xl font-bold'>Photovoltaik Montage auf einem Flachdach</h2>
                <p className="text-lg mt-4">Für die Montage auf Flachdächern müssen folgende Hinweise beachtet werden:</p>
                <ul className='list-disc list-outside ml-5 font-semibold *:mt-3 text-lg'>
                  <li>Jedes Dach, das eine Neigung von maximal 10 Grad har, ist ein Flachdach. Eine Photovoltaikanlage kann aber nur dann auf dem Flachdach montiert werden, wenn die Neigung maximal 3 Grad beträgt. Sonst wäre die Gefahr zu groß, dass die PV-Anlage runterrutscht.</li>
                  <li>Die Module sollten aber bestenfalls aufgestellt werden, da ein flacher Winkel weniger Stromertrag erzielt, als ein steiler Winkel. Dafür gibt es Flachdach-Montagesysteme.</li>
                  <li>Die optimale Ausrichtung liegt bei 15 bis 35 Grad Neigung bei südlicher <Link href={"/services/link/ausrichtung"} className='text-blue-500'>Ausrichtung</Link></li>
                </ul>
                <p className="text-lg mt-4">Da angewinkelte Module anfälliger für Windlasten sind, müssen sie gesichert werden. Generell gilt: <span className='font-bold'>Je steiler der Winkel, desto mehr Druck wirkt auf die Module.</span> Sie können entweder mit Gewichten oder Schrauben arbeiten:</p>
                <ol className='list list-decimal list-outside font-semibold *:mt-3 ml-5 text-lg'>
                  <li>Die Modulgerüste werden mit Ballast-Steinen oder Kies-Säcken beschwert. Es gilt: lieber etwas zu viel Ballast, als zu wenig. </li>
                  <li>Die Gestelle werden am Dachstuhl, bzw. den Sparren selbst verschraubt. Hier besteht jedoch das Risiko, undichte Stellen zu verursachen, vor allem, wenn Sie selbst Hand anlegen.</li>
                </ol>
                <p className='text-lg mt-4'>Mehr Informationen dazu finden Sie im Artikel Photovoltaik Flachdach</p>
                <p className="text-lg mt-2">Im Folgenden sind die Vor- und Nachteile von PV auf Flachdächern im Vergleich zu den anderen Montagearten gelistet:</p>
                <div className="bg-red-50 mt-8 p-8 rounded-xl">
                  <table className='table text-sm'>
                    <thead className=''>
                      <td className='text-start font-bold w-1/2'>Vorteile</td>
                      <td className='text-start font-bold w-1/2'>Nachteile</td>
                    </thead>
                    <tbody>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Eigenständige Ausrichtung von Modulen</td>
                        <td><Minus/> Zusätzliche Montagegerüste und Gewichte notwendig</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Gute Modulkühlung</td>
                        <td><Minus/> Kann nur auf Flachdächern mit maximal 3 Grad Neigung installiert werden</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Geringere Wind- und Flächenlasten bei einem flachen Montagewinkel</td>
                        <td><Minus/> Je steiler der Montagewinkel, desto höher die Lasten</td>
                      </tr>
                      <tr className='h-16'>
                        <td><Plus/> Module verschatten sich nicht gegenseitig</td>
                        <td><Minus/> Anfällig für Verschattungen höherer Gebäude oder Dachstrukturen wie Kamine</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services3'
                  src="/services3.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8">
                <h2 className='text-xl font-bold'>Photovoltaik Montage auf einem Blechdach</h2>
                <p className="text-lg mt-4">Auf Blechdächern wie Wellblech, Trapezblech oder Falzblech werden Photovoltaikanlagen etwas anders montiert als bei Aufdachanlagen:</p>
                <ol className='list list-decimal list-outside font-semibold *:mt-3 ml-5 text-lg'>
                  <li>Im ersten Schritt muss sich mit dem Material und der Geometrie des Daches auseinandergesetzt werden. Verschiedene Blecharten verlangen mal mehr, mal weniger Montageaufwand. </li>
                  <li>Anschließend müssen die Stellen bestimmt werden, an denen die Module sitzen sollen und wo das Dach durchbohrt werden kann. </li>
                  <li>Das Blech wird von der Wellung im Blech, also den Hochsicken, bis nach unten ins Holz durchbohrt. Dafür werden Stockschrauben verwendet. Diese sind nämlich wesentlich länger als normale Schrauben.</li>
                  <li>An der Stockschraube wird dann eine Montageschiene angebracht. In manchen Systemen wird auch erst ein Winkel an die Stockschraube angebracht und anschließend dann die Schiene an den Winkel montiert. Es können lange oder kurze Schienen verwendet werden. In der Regel werden aber wie bei der Aufdachmontage lange Montageschienen horizontal auf das Dach montiert.</li>
                  <li>Letztlich wird das Modul mit Modulklemmen auf den Schienen befestigt. Die Klemmen halten mit ihren Armen die Module rechts und links von sich fest.</li>
                </ol>
                <div className="mt-8 rounded-xl bg-blue-100 p-4">
                  <p className="text-sm font-bold">Hinweis:</p>
                  <p className="text-lg">Beim Blechdach muss die thermische Ausdehnung berücksichtigt werden. Das heißt: Je wärmer es ist, desto mehr dehnt sich das Blech aus. Das muss bei der Größe der Komponenten berücksichtigt werden. Sonst besteht die Gefahr, dass die PV-Anlage instabil ist.</p>
                </div>
                <p className="text-lg mt-4">Im Folgenden sind die Vor- und Nachteile von PV auf Blechdach im Vergleich zu den anderen Montagearten gelistet:</p>
                <div className="bg-red-50 mt-8 p-8 rounded-xl">
                  <table className='table text-sm'>
                    <thead className=''>
                      <td className='text-start font-bold w-1/2'>Vorteile</td>
                      <td className='text-start font-bold w-1/2'>Nachteile</td>
                    </thead>
                    <tbody>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Gute Belüftung durch die unebene Oberfläche des Daches</td>
                        <td><Minus/> Hoher Planungs- und Montageaufwand</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td></td>
                        <td><Minus/> Thermische Ausdehnung muss beachtet werden</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td></td>
                        <td><Minus/> Neigung abhängig vom Dach</td>
                      </tr>
                      <tr className='h-16'>
                        <td></td>
                        <td><Minus/> Blechmaterial muss stabil und dick genug sein</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services4'
                  src="/services4.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold">Indach Photovoltaik</h2>
                <p className="text-lg mt-2">Indach-Photovoltaikanlagen werden direkt im Dach integriert. Daher wird diese Montageart auch Dachintegration genannt. Indach-Photovoltaikanlagen sind zwar sehr stabil, aber in der Regel auch teurer als Aufdach- oder Flachdachmontagen. Bei Indachmodulen handelt es sich in der Regel um rahmenlose Module, die optisch kaum auffallen.</p>
                <p className="text-lg mt-2">Es lohnt sich, die Indach-Anlagen zur gleichen Zeit wie das Dach selbst bauen zu lassen. Denn so können erst die Module montiert werden und anschließend die restlichen Dachziegel um die Solarplatten drum herum gelegt werden. </p>
                <p className="text-lg mt-2">Je nachdem wie groß das Dach und die Anlagengröße geplant ist, könnten sogar nur noch wenige Reihen an Ziegeln gebraucht werden. Bei bestehenden Dächern würden somit hohe Kosten für eine komplette Dacheindeckung in Kauf genommen werden, obwohl die Ziegel letztendlich wieder entfernt werden.</p>
                <p className="text-lg mt-2">Angenommen eine Indach-Anlage wird also zusammen mit dem Dach selbst installiert, sieht der Montageprozess wie folgt aus:</p>
                <ol className='list list-decimal list-outside font-semibold *:mt-3 ml-5 text-lg'>
                  <li>Es wird geplant, wie viele Module wo auf dem Dach platziert werden sollen.</li>
                  <li>An den Stellen, an denen später die Module sitzen sollen, werden Schienen in die Dachsparren verschraubt. Es sind keine Dachhaken nötig.</li>
                  <li>Die <Link href={"/services/link/solarplatten"} className='text-blue-500'>Solarplatten</Link> werden in die Schienen gelegt und rasten dort ein. </li>
                  <li>Das restliche Dach wird mit Ziegeln verkleidet.</li>
                </ol>
                <p className="text-lg mt-2">Da die Module im Dach liegen und keine Luftzirkulation hinter den Modulen möglich ist, besteht Überhitzungsgefahr. Die Module erwärmen sich schneller und kühlen schlechter ab. Trotz der Dachintegration ist Indach-PV aber genauso wasserundurchlässig wie andere Montagearten. Es sind also keine undichten Stellen am Dach zu befürchten. </p>
                <p className="text-lg mt-2">Im Folgenden sind die Vor- und Nachteile von Indach PV im Vergleich zu den anderen Montagearten gelistet:</p>
                <div className="bg-red-50 mt-8 p-8 rounded-xl">
                  <table className='table text-sm'>
                    <thead className=''>
                      <td className='text-start font-bold w-1/2'>Vorteile</td>
                      <td className='text-start font-bold w-1/2'>Nachteile</td>
                    </thead>
                    <tbody>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Optisch ansprechend</td>
                        <td><Minus/> Teuer</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Hohe Stabilität</td>
                        <td><Minus/> Schlechte Luftzirkulation führt zu überhitzten Modulen</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td></td>
                        <td><Minus/> Nicht möglich bei Blechdächern</td>
                      </tr>
                      <tr className='h-16'>
                        <td></td>
                        <td><Minus/> Lohnt sich finanziell meist weniger bei bestehenden Dächern</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services5'
                  src="/services5.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold">Photovoltaik-Fassade</h2>
                <p className="text-lg mt-2">Fassaden-Photovoltaik ist die Montage von Solarmodulen senkrecht und flach an der Hausfassade oder am Balkon. Daher haben sie ein höheres Risiko sich aus der Verankerung zu lösen und zu fallen. Das erfordert eine besonders sichere Verankerung. Dieser erhöhte Montageaufwand spiegelt sich auch in den Montagekosten wider.</p>
                <p className="text-lg mt-2">Gelegentlich werden Photovoltaikmodule auch mit Hilfe eines Gerüstes schräg wie ein kleines Vordach angebracht. Das steigert zwar den Photovoltaik Ertrag, jedoch auch die Wind- und Schneelast. Auf flachen Fassaden-PV setzt sich hingegen weniger Schnee und Laub ab. Somit sind auch weniger Wartungsarbeiten notwendig.</p>
                <p className="text-lg mt-2">Im Gegensatz zu Balkonkraftwerken werden aber mehr Module montiert, sodass auch mehr Energie gewonnen wird. </p>
                <p className="text-lg mt-2">Flache Fassadenanlagen werden seltener montiert, weil ihre flache Ausrichtung an der Wand nicht optimal für die Sonneneinstrahlung ist. Sie produziert zwar trotzdem Strom, nur eben deutlich weniger als eine Aufdachanlage. Wenn eine Anlage auf dem Dach montiert werden kann, lohnt sich Fassaden-PV in der Regel also nicht.</p>
                <p className="text-lg mt-2">Die folgende Infografik zeigt, wie hoch der Wirkungsgrad bei verschiedenen Ausrichtungen und Neigungen der Anlage ist:</p>
                <div className="mt-8 flex justify-center">
                  <Image
                    height={1080}
                    width={1080}
                    alt='services6'
                    src="/services6.png"
                    className='w-4/6 rounded-xl'
                  />
                </div>
                <p className="text-lg mt-2">Bei der Fassadenmontage wird in der Regel auch mit Haken oder Winkeln und Schienen gearbeitet:</p>
                <ol className='list list-decimal list-outside font-semibold *:mt-3 ml-5 text-lg'>
                  <li>In die Fassade werden, nach ausreichend Planung, Stockschrauben gebohrt.</li>
                  <li>An die Stockschrauben werden Winkel oder Haken befestigt.</li>
                  <li>Daran werden die Montageschienen befestigt. Anschließend werden die Module wie auch bei der Aufdach- und Blechdachmontage mit Modulklemmen befestigt. </li>
                </ol>
                <p className="text-lg mt-2">Im Folgenden sind die Vor- und Nachteile von Fassaden-Photovoltaik im Vergleich zu den anderen Montagearten gelistet:</p>
                <div className="bg-red-50 mt-8 p-8 rounded-xl">
                  <table className='table text-sm w-full'>
                    <thead className=''>
                      <td className='text-start font-bold w-1/2'>Vorteile</td>
                      <td className='text-start font-bold w-1/2'>Nachteile</td>
                    </thead>
                    <tbody>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Kaum Wartungsarbeiten</td>
                        <td><Minus/> Hoher Montageaufwand</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Geringe Wind- und Schneelast</td>
                        <td><Minus/> Geringerer Wirkungsgrad</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td></td>
                        <td><Minus/> Oft teurer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services7'
                  src="/services7.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold">Freiflächen Photovoltaik</h2>
                <p className="text-lg mt-2">Freiflächen-, oder auch Freilandsysteme und Solarparks, werden vor allem für Großanlagen auf landwirtschaftlichen und gewerblichen Flächen eingesetzt. Auch hier ist die Ausrichtung nach Süden mit einem Winkel von 25 bis 30 Grad optimal. Meist stehen Hunderte von Modulen hinter- und nebeneinander. Um Verschattungen zu vermeiden, müssen auch hier gewisse Abstände eingehalten werden. Im Vergleich zu Flachdachanlagen können jedoch auch mehrere Modulreihen übereinander montiert werden. So kann möglichst viel Ertrag auf möglichst wenig Fläche erzielt werden.</p>
                <p className="text-lg mt-2">Für die Aufständerung können verschiedene Methoden gewählt werden: </p>
                <ol className='list list-decimal list-outside font-semibold *:mt-3 ml-5 text-lg'>
                  <li>Die Photovoltaikanlagen in Solarparks werden in der Regel auf ganzen Gestell-Systemen mit mehreren Schienen und Füßen montiert - diese sind unbeweglich.</li>
                  <li>Im Gegensatz dazu gibt es Nachführsysteme: Hier stehen die Photovoltaikanlagen auf einem automatisierten Schwenksystem, welches der Sonne folgt - ähnlich wie eine auch Blume, die sich zur Sonne dreht. Das maximiert den Ertrag der Solaranlagen, da immer die optimale Ausrichtung eingestellt wird.</li>
                </ol>
                <p className="text-lg mt-2">Einachsige Nachführsysteme richten sich je nach Sonnenstand horizontal oder vertikal aus. Zweiachsige Nachführsysteme hingegen können sowohl horizontal dem Lauf der Sonne folgen als auch vertikal den eigenen Neigungswinkel einstellen. </p>
                <p className="text-lg mt-2">Im Folgenden sind die Vor- und Nachteile von Freiflächen-Photovoltaik im Vergleich zu den anderen Montagearten gelistet:</p>
                <div className="bg-red-50 mt-8 p-8 rounded-xl">
                  <table className='table text-sm w-full'>
                    <thead className=''>
                      <td className='text-start font-bold w-1/2'>Vorteile</td>
                      <td className='text-start font-bold w-1/2'>Nachteile</td>
                    </thead>
                    <tbody>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Flexible Ausrichtung</td>
                        <td><Minus/> Großer Platzbedarf</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Nachführsysteme erlauben hohen Ertrag</td>
                        <td><Minus/> Nachführsysteme sind teuer</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> einfache Wartung</td>
                        <td><Minus/> Größere Gestelle notwendig</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td></td>
                        <td><Minus/> geringere Ästhetik</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td></td>
                        <td><Minus/> Ungeeignet für Hausbesitzer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services8'
                  src="/services8.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold">Solardachziegel</h2>
                <p className="text-lg mt-2">Solardachziegel sind eine alternative Lösung zu herkömmlichen Solarmodulen: Solarzellen werden in Dachziegel integriert oder gleich als Dachziegel produziert. So kann jeder Ziegel Sonnenlicht in elektrische Energie umwandeln. Die Ziegel sind vergleichsweise leicht und eignen sich vor allem auch für kleine und komplexe Dachflächen. Die Kabel liegen an der Unterseite des Ziegels, sodass das Dach weiterhin einheitlich aussieht. </p>
                <p className="text-lg mt-2">Die Installation kann zwar von den meisten Dachdeckern übernommen werden, ist aber deutlich teurer als herkömmliche Solaranlagen. Durch die höheren Kosten und den geringeren Flächenertrag dauert die Amortisation oft länger als bei normalen Anlagen. </p>
                <p className="text-lg mt-2">Alle Details finden Sie in diesem Artikel: Solardachziegel</p>
                <p className="text-lg mt-2">Im Folgenden sind die Vor- und Nachteile von Solardachziegeln im Vergleich zu den anderen Montagearten gelistet:</p>
                <div className="bg-red-50 mt-8 p-8 rounded-xl">
                  <table className='table text-sm w-full'>
                    <thead className=''>
                      <td className='text-start font-bold w-1/2'>Vorteile</td>
                      <td className='text-start font-bold w-1/2'>Nachteile</td>
                    </thead>
                    <tbody>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Ästhetisches Aussehen</td>
                        <td><Minus/> Sehr teuer</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/>  Geringes Gewicht</td>
                        <td><Minus/> Aufwändige Installation</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td><Plus/> Geeignet für kleine, komplexe Dachflächen</td>
                        <td><Minus/> Weniger Anbieterauswahl</td>
                      </tr>
                      <tr className='border-b-gray-300 border-b h-16'>
                        <td></td>
                        <td><Minus/> Lohnt sich finanziell weniger bei bestehenden Dächern</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services9'
                  src="/services9.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8" id='section3'>
                <h1 className="text-3xl border-l-4 font-bold border-l-yellow-500 pl-3">Photovoltaik Montagesysteme </h1>
                <p className="text-lg mt-2">Um eine Anlage aufs Dach zu bekommen, braucht es die richtigen Montagesysteme. Die wichtigsten Bestandteile sind die Solarmodule selbst. Die Unterkonstruktion besteht aus Dachhaken, Montageschienen und Modulklemmen. Jedes Bestandteil hat seine feste Aufgabe und Funktion:</p>
                <h2 className="text-xl font-bold mt-6">Solarmodule</h2>
                <ul className='list-disc list-inside font-semibold *:mt-3'>
                  <li><Link href={"/services/link/polykristalline-solarzellen"} className='text-blue-500'>polykristalline Solarzellen</Link></li>
                  <li><Link href={"/services/link/monokristalline-solarzellen"} className='text-blue-500'>monokristalline Solarzellen</Link></li>
                  <li><Link href={"/services/link/dünnschichtmodule"} className='text-blue-500'>Dünnschichtmodule</Link></li>
                </ul>
                <p className="text-lg mt-2">Während monokristalline Module den höchsten Wirkungsgrad aufweisen, sind polykristalline Module günstiger. Dünnschichtmodule sind hingegen vergleichsweise leicht, haben dafür aber den geringsten Wirkungsgrad. Mehr zu den Vor- und Nachteilen finden Sie im folgenden Artikel: <Link href={"/services/link/monokristallin-vs-polykristallin"} className="text-blue-500">Monokristallin vs. Polykristallin</Link></p>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services10'
                  src="/services10.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8">
                <p className="text-lg">Ein Modul besteht aus einer Vielzahl von Solarzellen, die durch den photoelektrischen Effekt Licht in elektrische Energie umwandeln. Die Solarzellen sind von einer Kunststoffschicht umhüllt und durch ein Frontglas und einen Rahmen vor Witterungseinflüssen geschützt. </p>
                <p className="text-lg mt-2">Als Faustregel gilt: 1m2 PV-Module erzeugen ca. 100-200kWh Solarstrom. Wie viele Module insgesamt auf Ihr Dach passen, können Sie sich bei den meisten Photovoltaikanbietern kostenlos berechnen lassen. Mit Ertrags- und Verbrauchsrechner können Sie auch schon vorab überschlägig berechnen, ob sich eine Solaranlage für Sie lohnt.</p>
                <p className="text-lg mt-2">Hier kommen Sie zum Enpal <Link href={"/services/link/solarcheck"} className="text-blue-500">Solarcheck</Link> oder zum <Link href={"/services/link/ertragsrechner"} className="text-blue-500">Ertragsrechner</Link></p>
                <h2 className="text-xl font-bold mt-6">Dachhaken</h2>
                <p className="text-lg mt-6">Dachhaken sind das Bindeglied zwischen einer Photovoltaikanlage und dem Dach. Sie verbinden die Unterkonstruktion, also die Metallschienen, mit den Dachsparren. Somit sind die Schienen auch bei Sturm sicher befestigt. Die Anzahl der benötigten Dachhaken ist abhängig von mehreren Faktoren: </p>
                <ul className='list-disc list-inside font-semibold text-lg *:mt-3'>
                  <li>Region und Witterungsverhältnissen: regionsabhängige Wind- und Schneelasten beeinflussen die Anzahl der Dachhaken  </li>
                  <li>Anzahl an Modulen</li>
                  <li>Modulgröße</li>
                  <li>Dachbelastung, Dachneigung und Sparrenabstand</li>
                </ul>
                <p className="text-lg mt-6">Je nach Modell und Bedarf können Dachhaken unterschiedlich aussehen: Ankerplatten gibt es in verschiedenen Breiten, die Bügel in verschiedenen Formen und Ausführung - zum Beispiel verstellbare Dachhaken. Die grundlegenden Merkmale und Funktionen aller Dachhaken sieht wie folgt aus:</p>
                <ul className='list-disc list-inside font-semibold text-lg *:mt-3'>
                  <li>Ein Dachhaken besteht aus einem U-förmigen Bügel - meist aus Edelstahl.</li>
                  <li>Der Bügel ist wiederum mit einer Ankerplatte, oder auch Lochplatte genannt, verschweißt.</li>
                  <li>Diese wird am Sparren befestigt und anschließend verschraubt.</li>
                  <li>Nach der Montage des Dachhakens am Sparren steht das U aus dem Ziegel heraus.</li>
                  <li>Hier wird die Montageschiene eingelegt und festgeschraubt. </li>
                </ul>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services11'
                  src="/services11.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold">Montageschiene</h2>
                <p className="text-lg mt-6">Montageschienen, oder auch Solarschienen, sind die Tragegerüste für Photovoltaikanlagen. Die Hauptaufgabe der Montageschienen besteht darin, die Module in Position zu halten und die Wind- und Schneelasten gleichmäßig auf die Unterkonstruktion zu verteilen.</p>
                <ul className='list-disc list-inside font-semibold text-lg *:mt-3'>
                  <li>Montageschienen haben im Querschnitt meist eine H- oder X-Form.</li>
                  <li>In den Zwischenräumen sitzen dann die Modulklemmen oder die Panels selbst.</li>
                  <li>Die Schienen werden an den im Vorhinein angebrachten Dachhaken verschraubt.</li>
                  <li>Das Ende einer Schiene wird aus ästhetischen und Sicherheitsgründen mit einer Endkappe verschlossen.</li>
                  <li>Die Photovoltaikmodule werden dann auf die Schienen gelegt und mit Modulklemmen befestigt.</li>
                </ul>
                <p className="text-lg mt-3">So liegen die Schienen schließlich horizontal auf dem Dach, also im 90-Grad-Winkel zu den Dachsparren.</p>
                <p className="text-lg mt-3">Eine etwas teurere, dafür jedoch flexiblere Montageart ist die Kreuzschienenmontage. Hier werden neben den horizontalen Montageschienen auch vertikale Schienen mit Modulklemmen an den horizontalen Schienen angebracht. Das daraus entstehende Rastermuster ist besonders geeignet für Dächer mit Unebenheiten. Module können nämlich so unabhängig von der Dachkonstruktion positioniert werden. Ein Nachteil dieser Montageart ist die weniger ästhetische Wirkung, da die Module weiter vom Dach abstehen. Außerdem kann der größere Abstand zwischen Dach und Modul die Luftzirkulation negativ beeinflussen.</p>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services12'
                  src="/services12.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold">Modulklemmen</h2>
                <p className="text-lg mt-2">Modulklemmen sind das Verbindungsstück zwischen den Solarpanels und den Montageschienen.</p>
                <ul className='list-disc list-inside font-semibold text-lg *:mt-3'>
                  <li>Sie werden in den Fugen der Montageschiene verankert und festgeschraubt.</li>
                  <li>Klemmen halten mit zwei Armen die Module rechts und links am Rahmen fest.</li>
                  <p className="text-lg mt-2">Modulklemmen, die zwischen zwei Modulen angebracht werden, haben zwei dieser Arme und heißen <span className="font-bold">Mittelklemmen</span> - selten auch Doppelklemmen. Für das äußerste Modul auf dem Dach wird eine Klemme mit nur einem Arm benötigt - diese wird als <span className="font-bold">Endklemme</span> bezeichnet.</p>
                </ul>
              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services13'
                  src="/services13.jpg"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8" id='section4'>
                <h1 className="text-3xl border-l-4 font-bold border-l-yellow-500 pl-3">In acht Schritten zu Solarenergie </h1>
                <p className="text-lg mt-2">Der gesamte Prozess von Planung bis Inbetriebnahme einer Solaranlage dauert in der Regel zwischen drei und sechs Monaten. Die Montage der Anlage selbst nimmt hingegen nur einen Bruchteil der Zeit ein. Bei der Installation durch einen Fachbetrieb dauert die Montage des Untergestells und der Module oft nur wenige Tage. Bevor die Anlage jedoch auf das Dach kommt, muss erst einmal gründlich geplant werden:</p>
                <p className="text-lg font-semibold mt-2">1. Planung</p>
                <p className="text-lg mt-2">Der erste Schritt zu einer eigenen Photovoltaik-Anlage auf dem Dach ist die Planung. Hierbei gilt es zu überprüfen, ob sich Ihr <Link href={"/services/link/dach-für-eine-pv-anlage-eignet"} className='text-blue-500'>Dach für eine PV-Anlage eignet</Link> und wie viel Strom Sie erzeugen könnten. Dies können Sie selbst prüfen oder sich einen Fachbetrieb hinzuziehen. Oftmals wird diese Leistung kostenlos angeboten. Bei der Planung wird entschieden, ob gegebenenfalls Abschattungen wie z.B.  Bäume entfernt werden müssten.  </p>
                <div className="p-4 mt-3 bg-green-100 rounded-xl">
                  <p className="text-md">Sie möchten herausfinden, ob sich eine PV-Anlage auch für Ihr Haus lohnt und hätten geren eine konkrete Kosteneinschätzung?</p>
                  <Link href={"/services/link/hier-können-sie-ein-unverbindliches-expertengespräch-vereinbaren"} className="mt-2 text-blue-500">&gt;&gt; Hier können Sie ein unverbindliches Expertengespräch vereinbaren</Link>
                </div>
                <p className="text-lg mt-2">Im gleichen Zug können Sie sich entscheiden, ob Sie Ihre Solaranlage mieten oder kaufen möchten. Bei der Miete ist die Montage automatisch Teil des Pakets, während im Kaufmodell die Installation der Anlage nicht zwingend vom Anbieter übernommen wird. In diesem Fall muss die Montage als Zusatzleistung bei einem Fachbetrieb angefragt werden. Photovoltaik selbst zu installieren ist möglich, doch selten empfohlen.</p>
                <p className="text-lg font-semibold mt-2">2. Unterkonstruktion</p>
                <p className="text-lg mt-2">Im nächsten Schritt muss die Unterkonstruktion am Dach befestigt werden. Dazu zählt die Montage von Dachhaken und Montageschienen. Je nach Montageart sehen die Abläufe und benötigten Materialen anders aus. </p>
                <p className="text-lg font-semibold mt-2">3. DC- Verkabelung am Montagegestell</p>
                <p className="text-lg mt-2">m nächsten Schritt erfolgt die DC-Verkabelung. DC-Strom ist der von den Solarmodulen erzeugte Gleichstrom. Dieser kann erst genutzt werden, nachdem er vom Wechselrichter in AC-Strom, also Wechselstrom, umgewandelt wird. Die DC-Verkabelung verbindet also Solarmodule und Wechselrichter, die AC-Verkabelung hingegen verbindet den Wechselrichter mit dem Hausstromnetz.</p>
                <p className="text-lg font-semibold mt-2">4. Montage der Module und Verkabelung</p>
                <p className="text-lg mt-2">Im nächsten Schritt werden die Solarmodule angebracht und miteinander verkabelt.</p>
                <p className="text-lg mt-2">An einer Stelle wird die DC-Verkabelung durch das Dach geführt. In der Regel wird hier eine Dachpfanne ausgetauscht gegen eine Dachpfanne mit Aussparung für das Kabel. Oftmals reicht jedoch auch eine ähnliche Aussparung am Ziegel wie sie bei Dachhaken gemacht wird. </p>
                <p className="text-lg mt-2">In der Folgen Grafík ist zu erkennen, dass Module entweder in Reihe oder parallel geschaltet werden können. Die Mehrheit von Photovoltaikanlagen werden als <Link href={"/services/link/modulstring"} className='text-blue-500'>Modulstring</Link> installiert, also in Reihe geschaltet.</p>

              </div>
              <div className="mt-8 flex justify-center">
                <Image
                  height={1080}
                  width={1080}
                  alt='services14'
                  src="/services14.png"
                  className='w-4/6 rounded-xl'
                />
              </div>
              <div className="mt-8">
                <p className="text-lg font-semibold mt-2">5. Installation Wechselrichter und Überspannungsschutz</p>
                <p className="text-lg mt-2">Nachdem die Module montiert und verkabelt wurden, folgt der <Link href={"/services/link/wechselrichter"} className='text-blue-500'>Wechselrichter</Link> und Überspannungsschutz. Der Wechselrichter wandelt den Gleichstrom in nutzbaren Wechselstrom um. Daher muss er einerseits mit der PV-Anlage und dem Hausstromnetz verbunden sein.</p>
                <p className="text-lg font-semibold mt-2">6. AC-Verkabelung vom Wechselrichter zum Stromzähler</p>
                <p className="text-lg mt-2">Sobald der Wechselrichter installiert ist und auch die AC-Verkabelung zum <Link href={"/services/link/stromzähler"} className='text-blue-500'>Stromzähler</Link> steht, ist die Solaranlage bereit für den Betrieb und erzeugt Strom. Bei der Wahl des Stromzählers ist es wichtig, dass der Stromzähler die Menge des Stroms messen kann, die eingespeist wird. Häufig wird daher ein Zweirichtungszähler verbaut, der Bezug und Einspeisung zählt. Ein Alleskönner unter den Stromzählern sind die modernen Smart Meter. Sie lassen sich individuell programmieren und können Verbrauchsdaten in Echtzeit ausspielen.</p>
                <p className="text-lg font-semibold mt-2">7. Stromspeicher und Wallbox (optional)</p>
                <p className="text-lg mt-2">Nachdem die Anlage vollständig verkabelt wurde und Strom erzeugt, kann ein Stromspeichers installiert und mit dem Stromnetz verbunden werden. Auch diesen Schritt können Sie selbst übernehmen oder vom Fachbetrieb Ihrer Wahl ausführen lassen. Bei der Montage des Stromspeichers ist jedoch, wie auch bei der Montage des Wechselrichters, auf eine sichere Vorgehensweise zu achten. Hier besteht Stromschlaggefahr!</p>
                <p className="text-lg mt-2">Auch um die <Link href={"/services/link/wallbox"} className='text-blue-500'>Wallbox</Link> können Sie sich nun kümmern. Die Installation der Wallbox kann allerdings auch vorgezogen werden - sogar noch vor der Montage der Module. </p>
                <p className="text-lg font-semibold mt-2">8. Überprüfung, Probedurchlauf & Messung</p>
                <p className="text-lg mt-2">Der letzte Schritt ist die Überprüfung der ordnungsgemäßen Funktion der Anlage. Dazu gehört ein erster Probedurchlauf, um zu messen, ob die Anlage Strom erzeugt, wie vorgesehen. Außerdem muss geprüft werden, ob das passende Betriebssystem, wie beispielsweise eine App, korrekt funktioniert. Werden Fehler gefunden, können diese direkt beglichen werden. </p>
              </div>
              <div className="mt-8" id='section5'>
                <h1 className="text-3xl border-l-4 font-bold border-l-yellow-500 pl-3">Sicherheit</h1>
                <p className="text-lg mt-2">Die fachgerechte Installation der Photovoltaikanlage ist aus mehreren Gründen besonders wichtig. Auch wenn Termine bei Fachbetrieben weiterhin sehr gefragt und daher schwer zu ergattern sind, sind Risiken damit verbunden, diese Arbeit selbst zu übernehmen. Es besteht erhöhte Unfallgefahr, da eine Installation in großer Höhe ohne die richtige Ausrüstung und das nötige Fachwissen sehr gefährlich ist. Außerdem wird viel mit Strom und Kabeln gearbeitet, was die Gefahr eines Stromschlags birgt. Deshalb dürfen bestimmte Arbeiten, wie z.B. die Endverdrahtung, nur von einem Elektriker durchgeführt werden.</p>
                <p className="text-lg mt-2">Neben dem persönlichen Unfallrisiko können Sie auch Ihr Montagesystem selbst beschädigen und müssen die PV-Komponenten teuer nachkaufen. Auslöser kann eine unsichere Befestigung sein, die dazu führt, dass sich die Solarmodule bei hoher <Link href={"/services/link/flächenlast"} className="text-blue-500">Flächenlast</Link> oder <Link href={"/services/link/schneelast"} className="text-blue-500">Schneelast</Link> leichter aus dem Gestell lösen.</p>
              </div>
              <div className="mt-8" id='section6'>
                <h1 className="text-3xl border-l-4 font-bold border-l-yellow-500 pl-3">Häufig gestellte Fragen</h1>
                <p className="text-xl font-bold mt-2">Lohnt sich eine Photovoltaikanlage, die nicht nach Süden ausgerichtet ist?</p>
                <p className="text-lg mt-2">Tatsächlich ist es so, dass PV-Module auch bei anderen Dachneigungen und Dachausrichtungen noch einen Großteil ihrer Leistung bringen. Auch wenn eine Südausrichtung in den meisten Fällen die optimale Lösung darstellt, ist ein Dach mit derartiger Ausrichtung nicht notwendig. PV-Anlagen, die nach Osten und Westen ausgerichtet sind, bringen ähnlich hohe Erträge und erzeugen meistens dann Strom, wenn Sie gerade zu Hause sind, also morgens und abends.</p>
                <p className="text-lg mt-2">Grundsätzlich gilt: Wann immer die PV-Anlage nicht nach Süden ausgerichtet ist, sollte sie möglichst flach montiert werden. Dadurch fangen die Solarmodule möglichst viele Sonnenstrahlen ein.</p>
                <p className="text-xl font-bold mt-2">Wie lange dauert die Montage einer Photovoltaik Anlage?</p>
                <p className="text-lg mt-2">Der gesamte Prozess von Planung bis Inbetriebnahme einer Solaranlage dauert in der Regel zwischen drei und sechs Monaten. Die Montage der Anlage selbst nimmt hingegen nur einen Bruchteil der Zeit ein. Bei der Installation durch einen Fachbetrieb dauert die Montage des Untergestells und der Module oft nur wenige Tage.</p>
                <p className="text-xl font-bold mt-2">Wer darf Photovoltaik installieren?</p>
                <p className="text-lg mt-2">Es gibt immer wieder Eigenheimbesitzer, die Ihre PV-Anlage gerne selbst installieren würden. Grundsätzlich ist das auch erlaubt: Es gibt keine Regeln, die die Montage durch einen Fachbetrieb vorschreiben. Die PV-Anlage muss jedoch von einem Elektroinstallateur angeschlossen werden.</p>
                <p className="text-lg mt-2">Tipp: Wir empfehlen immer die professionelle Installation einer PV-Anlage durch Fachkräfte. Denn schon kleine Fehler bei der recht aufwändigen Installation können Sicherheitsrisiken hervorrufen, Ihre Garantie erlöschen lassen und den Versicherungsschutz aufheben.</p>
                <p className="text-xl font-bold mt-2">Welche Dacheindeckung für Photovoltaik?</p>
                <p className="text-lg mt-2">Grundsätzlich ist die Installation einer PV-Anlage auf fast jeder Art von Dacheindeckung möglich, solange das Dach tragfähig genug ist.</p>
                <p className="text-lg mt-2">Dennoch gibt es bei der Art der Dachziegel ein paar Punkte zu beachten. Bei der Installation einer PV-Anlage müssen die Dachziegel nämlich angeschnitten werden, damit die Dachhaken in die Dachsparren geschraubt werden können. Die Löcher müssen dabei sehr klein sein, damit das Dach dicht bleibt. Da einige Ziegel-Arten nicht gut angeschnitten werden können, ist es hier sehr schwierig oder unmöglich, eine Solaranlage zu errichten. Oftmals wird dieser Aspekt unterschätzt, aber um z. B. einen schadenfreien Abbau gewährleisten zu können, müssen Schäden jeglicher Art ausgeschlossen werden können.</p>
                <p className="text-xl font-bold mt-2">Wie alt darf ein Dach sein für Photovoltaik?</p>
                <p className="text-lg mt-2">Alle Dächer, die älter sind als 20 Jahre, sollten vor der Installation einer PV-Anlage auf Ihre Tauglichkeit überprüft werden. Das liegt daran, dass PV-Anlagen normalerweise 30 - 40 Jahre auf dem Hausdach bleiben können, während ein Hausdach im Normalfall alle 50 - 60 Jahre erneuert werden sollte. Falls das Hausdach also erneuert werden muss, während die PV-Anlage installiert ist, ergibt sich ein vermeidbarer Extra-Aufwand bei der Dachsanierung, da die PV-Anlage mit ab- und aufgebaut werden muss.</p>
                <p className="text-xl font-bold mt-2">Wer baut Photovoltaik?</p>
                <p className="text-lg mt-2">Neben lokalen Fachbetrieben gibt es inzwischen auch zahlreiche digitale, bundesweit aktive Unternehmen, die Photovoltaikanlagen bauen. In den letzten Jahren wurde die Solarbranche in Deutschland von digitalen Solarunternehmen wie Enpal beflügelt, durch die die Suche nach einem Solarexperten kinderleicht wird. Ob Sie sich für einen lokalen oder digitalen PV-Anbieter entscheiden, hängt komplett von Ihren persönlichen Vorlieben ab. Oftmals hilft es, verschiedene Angebote einzuholen und dann anhand von Preis, Aufwand, Service und anderen Faktoren eine fundierte Entscheidung zu treffen.</p>
                <p className="text-xl font-bold mt-2">Wann Photovoltaik installieren?</p>
                <p className="text-lg mt-2">Grundsätzlich ist es natürlich einfacher, eine PV-Anlage bei gutem Wetter zu installieren. Unabhängig vom Wetter gilt aber: Je schneller Sie Ihre eigene PV-Anlage auf dem Dach haben, desto eher machen Sie sich von steigenden Strompreisen unabhängig, sparen langfristig Kosten und tun auch noch der Umwelt etwas Gutes. Daher empfehlen wir Ihnen, den Prozess möglichst früh zu starten und sich nicht von Jahreszeiten o.Ä. beeinflussen zu lassen.</p>
                <p className="text-xl font-bold mt-2">Wie wird eine Photovoltaikanlage montiert?</p>
                <p className="text-lg mt-2">Wie weiter oben bereits beschrieben, lässt sich die Montage einer Photovoltaikanlage in folgende Schritte einteilen:</p>
                <ul className='list-decimal list-outside ml-5 font-semibold text-lg *:mt-3'>
                  <li>Planung und Ertragsberechung</li>
                  <li>Unterkonstruktion montieren (bestehend aus Dachhaken, Befestigungsschrauben und Montagegestell)</li>
                  <li>DC-Verkabelung am Montagegestell befestigen</li>
                  <li>PV-Module montieren und DC-Kabel verbinden</li>
                  <li>Wechselrichter und Überspannungsschutz installieren</li>
                  <li>AC-Verkabelung vom Wechselrichter zum Stromzähler anbringen</li>
                  <li>Solarstromspeicher montieren (optional)</li>
                  <li>Überprüfung und Probedurchlauf</li>
                </ul>
                <p className="text-lg mt-2">Als Hauseigentümer brauchen Sie sich dabei keine Sorgen um Ihr Hausdach zu machen. Die Solarmonteure kümmern sich darum, dass alles einwandfrei verarbeitet wird und Sie am Ende eine perfekt verbaute PV-Anlage auf Ihrem Dach haben, mit der Sie Ihren eigenen Solarstrom erzeugen.</p>
                <p className="text-xl font-bold mt-2">Wie viele Dachhaken für PV-Anlage?</p>
                <p className="text-lg mt-2">Bei der Installation einer PV-Anlage werden in der Regel mindestens 3 - 4 Dachhaken pro Solarmodul benötigt. Die genaue Anzahl ist jedoch u.a. abhängig von der Modulgröße, der Dachbelastung, der Dachneigung und dem Sparrenabstand.</p>
                <p className="text-lg mt-2">Tipp: Wenn Sie mit einem PV-Fachbetrieb zusammenarbeiten, brauchen Sie sich keine Gedanken um die Anzahl der Dachhaken zu machen. Das Expertenteam kümmert sich um alles.</p>
              </div>
              <div className="mt-8" id='section7'>
                <h1 className="text-3xl border-l-4 font-bold border-l-yellow-500 pl-3">Fazit</h1>
                <p className="text-lg mt-2">Die Montage von Photovoltaikanlagen spielt eine entscheidende Rolle bei der Langlebigkeit der Anlage. Der Prozess, angefangen von der Auswahl des Montagesystems bis zur Installation der Solarmodule, beeinflusst nicht nur die Effizienz, sondern auch ihre Integration in die Umgebung. Die Vielfalt der Montagemethoden erlaubt es, dass fast jeder die Möglichkeit hat, sich eine Photovoltaikanlage anzuschaffen und <Link href={"/services/link/strom-zu-sparen"} className="text-blue-500">Strom zu sparen</Link>. Während Aufdachsyseme eine gute Lösung für Einfamilienhäuser sind, können Anlagen auf Garagen und Schuppen auf Flachdachsystemen installiert werden. </p>
                <p className="text-lg mt-2">Die exakte Ausrichtung und sichere Installation der Solarmodule ist entscheidend für eine optimale Ausbeute an Solarenergie. Die Zusammenarbeit mit Profis ist daher nicht zu unterschätzen, da sie sonst mögliche Ertragsverluste riskieren.</p>
                <p className="text-lg mt-2">Enpal bietet Solaranlagen im flexiblen Miet- oder Kaufmodell an. Das Besondere dabei: 0 € Anzahlung, 100% flexibel, kein Risiko. Sie zahlen erst, wenn Ihre PV-Anlage Strom produziert. Ab dann haben Sie drei Monate Zeit, um flexibel zwischen <Link href={"/services/link/solaranlage-mieten"} className="text-blue-500">Solaranlage mieten</Link> und <Link href={"/services/link/solaranlage-kaufen"} className="text-blue-500">Solaranlage kaufen</Link> zu entscheiden.</p>

              </div>
            </div>
          </div>

          </div>
          <div className="">
            {/* <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                console.log({ values, actions });
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }}
            >
              <Form>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="First Name" />
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Last Name" />
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Email" />
                <label htmlFor="address">Address</label>
                <Field id="address" name="address" placeholder="Address" />
                <label htmlFor="city">City</label>
                <Field id="city" name="city" placeholder="City" />
                <label htmlFor="state">State</label>
                <Field id="state" name="state" placeholder="State" />
                <label htmlFor="country">Country</label>
                <Field id="country" name="country" placeholder="Country" />
                <label htmlFor="contactNumber">Contact Number</label>
                <Field id="contactNumber" name="contactNumber" placeholder="Contact Number" />
                <label htmlFor="notes">Notes</label>
                <Field id="notes" name="notes" placeholder="Notes" />
                <button type="submit">Submit</button>
              </Form>
            </Formik> */}

            <form className='px-48 max-md:px-5 mb-5'>
              <h4 className='text-2xl font-semibold mb-4 text-center'>Kontaktformular</h4>
              <div className="grid grid-cols-2 gap-5">
                <div className=" mt-5">
                  <label htmlFor="firstName" className="block text-md font-medium text-gray-700">Vollständiger Name</label>
                  <input type="text" name="firstName" id="firstName" placeholder='Vorname' autoComplete="given-name" className="mt-1 p-3 py-4 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 border" />
                </div>
                <div className=' mt-5'>
                  <label htmlFor="lastName" className="block text-md font-medium text-gray-700">&nbsp;</label>
                  <input type="text" name="lastName" id="lastName" placeholder='Nachname' autoComplete="family-name" className="mt-1 p-3 py-4 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 border" />
                </div>
                <div className='col-span-2 mt-5'>
                  <label htmlFor="email" className="block text-md font-medium text-gray-700">Email *</label>
                  <input type="text" name="email" id="email" placeholder='Email' required autoComplete="email" className="mt-1 p-3 py-4 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 border" />
                </div>
                <div className='col-span-2 mt-5'>
                  <label htmlFor="address" className="block text-md font-medium text-gray-700">Adresse</label>
                  <input type="text" name="address" id="address" placeholder='Adresse' autoComplete="address" className="mt-1 p-3 py-4 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 border" />
                </div>
                <div className='col-span-2'>
                  <input type="text" name="city" id="city" placeholder='Stadt' autoComplete="city" className="mt-1 p-3 py-4 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 mr-4 shadow-sm sm:text-sm border-gray-300 border" />
                  <input type="text" name="state" id="state" placeholder='Zustand' autoComplete="state" className="mt-1 p-3 py-4 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 mr-4 shadow-sm sm:text-sm border-gray-300 border" />
                  <input type="text" name="country" id="country" placeholder='Country' autoComplete="country" className="mt-1 p-3 py-4 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 mr-4 shadow-sm sm:text-sm border-gray-300 border" />
                </div>
                <div className='col-span-2 mt-5'>
                  <label htmlFor="address" className="block text-md font-medium text-gray-700">Kontakt nummer *</label>
                  <input type="text" name="number" id="number" placeholder='Number' autoComplete="number" required className="mt-1 p-3 py-4 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 border" />
                </div>
                <div className='col-span-2 mt-5'>
                  <label htmlFor="address" className="block text-md font-medium text-gray-700">Notizen, vorschläge oder fragen</label>
                <textarea name="notes" id="notes" placeholder='Notes' autoComplete="notes" rows={6} className="mt-1 p-3 py-4 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 block w-full shadow-sm sm:text-sm border-gray-300 border"></textarea>
                </div>
                <div className='col-span-2 mt-5 flex justify-end'>
                  <Button
                    type="submit"
                    className="bg-blue-400 hover:bg-blue-300 text-md p-6"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
      <Footer/>
    </div>
    </>
  )
}

export default Services