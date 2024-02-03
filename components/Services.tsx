import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

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
          <div className="grid grid-cols-4 my-10 h-full">
            <div className="">
              <div className="sticky overflow-unset top-32">
              <h6 className='text-lg font-bold text-blue-900'>INHALTSVERZEICHNIS</h6>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 block text-sm' href="#1">Photovoltaik Montage: Das wird benötigt</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 block text-sm' href="#2">Photovoltaik Montagearten</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 block text-sm' href="#3">Photovoltaik Montagesysteme</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 block text-sm' href="#4">In acht Schritten zu Solarenergie</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 block text-sm' href="#5">Sicherheit</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 block text-sm' href="#6">Häufig gestellte Fragen</Link>
              <Link className='mt-3 hover:border-l-2 hover:border-l-yellow-500 block text-sm' href="#7">Fazit</Link>
              </div>
            </div>
            <div className="ml-5 col-span-3">
              <h2 className='text-3xl font-bold'>Photovoltaik Montage: So kommt die PV-Anlage auf Ihr Dach</h2>
              <div className="bg-blue-100 p-4 rounded-md mt-4">
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

        </div>
      <Footer/>
    </div>
    </>
  )
}

export default Services