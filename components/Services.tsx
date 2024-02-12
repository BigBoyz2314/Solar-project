import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import Plus from './ui/plusicon'
import Minus from './ui/minusicon'

const Services = () => {

  return (
    <>
    <div className="flex bg-white flex-col items-stretch">
        <Navbar/>
        <div
          className="flex-col overflow-hidden relative flex min-h-[603px] w-full justify-center px-16 items-start max-md:max-w-full max-md:px-5"
        >
          <Image
            width={1920}
            height={1080}
            alt='bg-3'
            loading="lazy"
            src="/bg-3.png"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
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
            <div className="w-4/6">
              <div className="sticky overflow-unset top-32">
              <h6 className='text-lg font-bold text-blue-900'>INHALTSVERZEICHNIS</h6>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:border-collapse hover:border-spacing-1 block text-md text-wrap text-gray-500' href="#1">Photovoltaik Montage: Das wird benötigt</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:border-collapse hover:border-spacing-1 block text-md text-wrap text-gray-500' href="#2">Photovoltaik Montagearten</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:border-collapse hover:border-spacing-1 block text-md text-wrap text-gray-500' href="#3">Photovoltaik Montagesysteme</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:border-collapse hover:border-spacing-1 block text-md text-wrap text-gray-500' href="#4">In acht Schritten zu Solarenergie</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:border-collapse hover:border-spacing-1 block text-md text-wrap text-gray-500' href="#5">Sicherheit</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:border-collapse hover:border-spacing-1 block text-md text-wrap text-gray-500' href="#6">Häufig gestellte Fragen</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 hover:border-collapse hover:border-spacing-1 block text-md text-wrap text-gray-500' href="#7">Fazit</Link>
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
                <Link className='mt-4 text-blue-600' href="#">{">>"} Mehr erfahren</Link>
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
                <p className='text-lg'>Wer sich von den steigenden Strompreisen und seinem Stromanbieter unabhängig machen will, macht mit einer <Link href="#" className='text-blue-600'>Photovoltaikanlage</Link> genau den richtigen Schritt in Richtung günstige und nachhaltige Energiegewinnung. Doch bevor man von <Link href="#" className='text-blue-600'>Solarenergie</Link> profitieren kann, muss die Anlage sorgfältig geplant und natürlich installiert werden. In diesem Artikel werfen wir einen detaillierten Blick auf den Montageprozess und die verschiedenen Montagesysteme einer PV-Anlage.</p>
              </div>
              <div className="mt-8 rounded-xl bg-blue-100 p-4">
                <h6 className='text-xl font-bold text-blue-900'>INHALTSVERZEICHNIS</h6>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#1">Photovoltaik Montage: Das wird benötigt</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#2">Photovoltaik Montagearten</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#3">Photovoltaik Montagesysteme</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#4">In acht Schritten zu Solarenergie</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#5">Sicherheit</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#6">Häufig gestellte Fragen</Link>
                <Link className='mt-3 block text-md text-wrap text-gray-700 font-bold underline underline-offset-2' href="#7">Fazit</Link>
              </div>
              <div className="mt-8">
                <h1 className='text-3xl border-l-4 font-bold border-l-yellow-500 pl-3'>Photovoltaik Montage: Das wird benötigt</h1>
                <p className='text-lg mt-4'>Für jede Photovoltaik Montage werden bestimmte Materialien benötigt, ohne die eine PV-Anlage nicht montiert werden und keinen <Link href="#" className='text-blue-500'>Solarstrom</Link> produzieren könnte.</p>
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
                <p className='text-lg'>Im Kapitel <Link href="#" className='text-blue-500'>Photovoltaik Montagesysteme</Link> gehen wir noch detaillierter auf die Materialien und ihre Eigenschaften ein. Im Folgenden geht es jedoch erst einmal um die unterschiedlichen Montagearten.</p>
              </div>
              <div className="mt-8">
                <h1 className='text-3xl border-l-4 font-bold border-l-yellow-500 pl-3'>Photovoltaik Montagearten</h1>
                <p className='text-lg mt-4'>Bei der Montage einer Photovoltaikanlage kann zwischen verschiedenen Montagearten gewählt werden. Je nach Dachart und persönlichen Präferenzen stehen folgende Montagearten zur Auswahl:</p>
                <ul className='list-disc list-inside font-semibold *:mt-3'>
                  <li>Aufdach-PV</li>
                  <li><Link href="#" className='text-blue-500'>Flachdach Aufständerung</Link></li>
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
                  <li>Die optimale Ausrichtung liegt bei 15 bis 35 Grad Neigung bei südlicher <Link href="#">Ausrichtung</Link></li>
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
                  <li>Die <Link href="#">Solarplatten</Link> werden in die Schienen gelegt und rasten dort ein. </li>
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
              <div className="mt-8">
                <h1 className="text-3xl font-bold">Photovoltaik Montagesysteme </h1>
                <p className="text-lg mt-2">Um eine Anlage aufs Dach zu bekommen, braucht es die richtigen Montagesysteme. Die wichtigsten Bestandteile sind die Solarmodule selbst. Die Unterkonstruktion besteht aus Dachhaken, Montageschienen und Modulklemmen. Jedes Bestandteil hat seine feste Aufgabe und Funktion:</p>
                <h2 className="text-xl font-bold mt-6">Solarmodule</h2>
                <ul className='list-disc list-inside font-semibold *:mt-3'>
                  <li><Link href="#" className='text-blue-500'>polykristalline Solarzellen</Link></li>
                  <li><Link href="#" className='text-blue-500'>monokristalline Solarzellen</Link></li>
                  <li><Link href="#" className='text-blue-500'>Dünnschichtmodule</Link></li>
                </ul>
                <p className="text-lg mt-2">Während monokristalline Module den höchsten Wirkungsgrad aufweisen, sind polykristalline Module günstiger. Dünnschichtmodule sind hingegen vergleichsweise leicht, haben dafür aber den geringsten Wirkungsgrad. Mehr zu den Vor- und Nachteilen finden Sie im folgenden Artikel: Monokristallin vs. Polykristallin</p>
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