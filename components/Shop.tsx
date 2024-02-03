import React from 'react'
import Footer from './Footer'
import MiddleText from './MiddleText'
import Navbar from './Navbar'
import Link from 'next/link'
import TopSort from './TopSort'
import Filters from './Filters'
import Logos from './Logos'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "./ui/select"
  

const Shop = () => {
  return (
    <>
        <div className="flex bg-white flex-col items-stretch">
        <Navbar/>
        
        <TopSort/>
        <div
          className="flex-col overflow-hidden relative flex min-h-[603px] w-full justify-center px-16 items-start max-md:max-w-full max-md:px-5"
        >
          <img
            loading="lazy"
            src="bg-1.png"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div
            className="relative flex max-w-full w-full flex-col justify-center mt-14 mb-12 items-center max-md:my-10"
          >
            <div
              className="text-white text-4xl font-bold max-md:max-w-full max-md:text-4xl max-md:leading-[50px]"
            >
              Find solar equipment for the best price
            </div>
            <div
              className="text-white text-md leading-8 max-md:max-w-full max-md:mt-10"
            >
                Solar equipment marketplace that connects installers with sellers
            </div>
            <div className="w-1/2">
                <input type="text" className="w-full mt-4 h-16 rounded-full px-5" placeholder="Search for modules..." />
                <button type="submit" className="relative float-end bg-green-600 bottom-[60px] right-2 p-4 rounded-full">Search</button>
            </div>
          </div>
        </div>
        <div
          className="flex w-full flex-col items-stretch mt-11 px-11 max-md:max-w-full max-md:mt-10 max-md:px-5"
        >
          <div
            className="text-neutral-700 text-2xl leading-9 self-center whitespace-nowrap"
          >
            TRUSTED BY OVER 1K+ COMPANIES
          </div>
          <Logos />
          <MiddleText/>
          
          <div
          className="flex w-full max-w-[1213px] flex-col items-stretch mt-12 max-md:max-w-full max-md:mt-10"
        >
          <div className="max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              
                <Filters/>

              <div
                className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0"
              >
                <div
                  className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10"
                >
                  <div
                    className="justify-between items-center content-center gap-y-4 flex-wrap flex gap-0 max-md:max-w-full"
                  >
                    <div
                      className="items-stretch flex gap-1.5 px-12 my-auto pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5"
                    >
                      <div
                        className="text-neutral-500 text-base font-medium leading-4 tracking-wide grow whitespace-nowrap"
                      >
                        Selected Products:
                      </div>
                      <div
                        className="text-black text-center text-xl font-medium leading-4 tracking-wide whitespace-nowrap"
                      >
                        85
                      </div>
                    </div>
                    <Select>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="rating">By rating</SelectItem>
                    </SelectContent>
                    </Select>
                  </div>
                  <div className="container px-5">
                  <div
                    className="bg-white mt-6 rounded-xl max-md:mt-0 max-md:max-w-full max-md:mr-0 max-md:pr-0"
                  >
                    <div
                      className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
                    >
                      <div
                        className="flex flex-col items-stretch w-[79%] max-md:w-full max-md:ml-0"
                      >
                        <div className="grow max-md:max-w-full max-md:mt-10">
                          <div
                            className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
                          >
                            <div
                              className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0"
                            >
                              <div
                                className="bg-stone-50 flex flex-col justify-center items-center aspect-square w-full px-2 rounded-xl max-md:mt-8"
                              >
                              <Link href={"/shop/product/1"}>
                                <img
                                  loading="lazy"
                                  src="solar-1.jpg"
                                   className="aspect-square object-contain object-center w-full mix-blend-multiply overflow-hidden"
                                />
                                </Link>
                              </div>
                            </div>
                            <div
                              className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0"
                            >
                              <div
                                className="flex flex-col items-stretch my-auto max-md:mt-10"
                              >
                                <div
                                  className="text-neutral-900 text-lg font-semibold leading-5"
                                >
                                  Jinko Solar 565W Mono - JKM565N-72HL4-V SF
                                </div>
                                <div
                                  className="flex justify-between gap-5 mt-8 items-start"
                                >
                                  <div
                                    className="flex grow basis-[0%] flex-col items-stretch"
                                  >
                                    <div className="text-neutral-700 text-xs font-medium">
                                      Leistung
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium whitespace-nowrap mt-5"
                                    >
                                      Rahmenfarbe
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium whitespace-nowrap mt-6"
                                    >
                                      Effektivität
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      Maße
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      Gewicht
                                    </div>
                                  </div>
                                  <div
                                    className="self-stretch flex grow basis-[0%] flex-col items-stretch"
                                  >
                                    <div className="text-neutral-700 text-xs font-medium">
                                      565W
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      Silber
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      21,87%
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium whitespace-nowrap mt-5"
                                    >
                                      2278x1134x35mm
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      28kg
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0"
                      >
                        <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                          <div className="text-neutral-900 text-lg font-semibold">
                            36.99 USD
                          </div>
                          <div className="text-neutral-400 text-xs font-semibold mt-3 line-through">
                            48.56
                          </div>
                          <div className="text-neutral-400 text-xs font-semibold mt-6">
                            Free Shipping
                          </div>
                          <div className="text-neutral-400 text-xs mt-1.5">
                            Delivery in 1 day
                          </div>
                          <div
                            className="bg-neutral-700 flex items-stretch justify-between mt-6 px-4 py-4 rounded-md"
                          >
                            <div className="text-white text-lg">Add To Cart</div>
                            <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                          </div>
                          <div
                            className="bg-neutral-700 flex items-stretch justify-between mt-2 px-5 py-4 rounded-md"
                          >
                            <div className="text-white text-lg">Buy Now</div>
                            <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-white mt-10 rounded-xl max-md:max-w-full max-md:mr-0 max-md:pr-0"
                  >
                    <div
                      className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
                    >
                      <div
                        className="flex flex-col items-stretch w-[79%] max-md:w-full max-md:ml-0"
                      >
                        <div className="grow max-md:max-w-full max-md:mt-10">
                          <div
                            className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
                          >
                            <div
                              className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0"
                            >
                              <div
                                className="bg-stone-50 flex flex-col justify-center items-center aspect-square w-full px-2 rounded-xl max-md:mt-8"
                              >
                                <img
                                  loading="lazy"
                                  src="solar-1.jpg"
                                  className="aspect-square object-contain object-center w-full mix-blend-multiply overflow-hidden"
                                />
                              </div>
                            </div>
                            <div
                              className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0"
                            >
                              <div
                                className="flex flex-col items-stretch my-auto max-md:mt-10"
                              >
                                <div
                                  className="text-neutral-900 text-lg font-semibold leading-5"
                                >
                                  Jinko Solar 565W Mono - JKM565N-72HL4-V SF
                                </div>
                                <div
                                  className="flex justify-between gap-5 mt-8 items-start"
                                >
                                  <div
                                    className="flex grow basis-[0%] flex-col items-stretch"
                                  >
                                    <div className="text-neutral-700 text-xs font-medium">
                                      Leistung
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium whitespace-nowrap mt-5"
                                    >
                                      Rahmenfarbe
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium whitespace-nowrap mt-6"
                                    >
                                      Effektivität
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      Maße
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      Gewicht
                                    </div>
                                  </div>
                                  <div
                                    className="self-stretch flex grow basis-[0%] flex-col items-stretch"
                                  >
                                    <div className="text-neutral-700 text-xs font-medium">
                                      565W
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      Silber
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      21,87%
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium whitespace-nowrap mt-5"
                                    >
                                      2278x1134x35mm
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      28kg
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0"
                      >
                        <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                          <div className="text-neutral-900 text-lg font-semibold">
                            36.99 USD
                          </div>
                          <div className="text-neutral-400 text-xs font-semibold mt-3 line-through">
                            48.56
                          </div>
                          <div className="text-neutral-400 text-xs font-semibold mt-6">
                            Free Shipping
                          </div>
                          <div className="text-neutral-400 text-xs mt-1.5">
                            Delivery in 1 day
                          </div>
                          <div
                            className="bg-neutral-700 flex items-stretch justify-between mt-6 px-4 py-4 rounded-md"
                          >
                            <div className="text-white text-lg">Add To Cart</div>
                            <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                          </div>
                          <div
                            className="bg-neutral-700 flex items-stretch justify-between mt-2 px-5 py-4 rounded-md"
                          >
                            <div className="text-white text-lg">Buy Now</div>
                            <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-white mt-10 rounded-xl max-md:max-w-full max-md:mr-0 max-md:pr-0"
                  >
                    <div
                      className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
                    >
                      <div
                        className="flex flex-col items-stretch w-[79%] max-md:w-full max-md:ml-0"
                      >
                        <div className="grow max-md:max-w-full max-md:mt-10">
                          <div
                            className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
                          >
                            <div
                              className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0"
                            >
                              <div
                                className="bg-stone-50 flex flex-col justify-center items-center aspect-square w-full px-2 rounded-xl max-md:mt-8"
                              >
                                <img
                                  loading="lazy"
                                  src="solar-1.jpg"
                                  className="aspect-square object-contain object-center w-full mix-blend-multiply overflow-hidden"
                                />
                              </div>
                            </div>
                            <div
                              className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0"
                            >
                              <div
                                className="flex flex-col items-stretch my-auto max-md:mt-10"
                              >
                                <div
                                  className="text-neutral-900 text-lg font-semibold leading-5"
                                >
                                  Jinko Solar 565W Mono - JKM565N-72HL4-V SF
                                </div>
                                <div
                                  className="flex justify-between gap-5 mt-8 items-start"
                                >
                                  <div
                                    className="flex grow basis-[0%] flex-col items-stretch"
                                  >
                                    <div className="text-neutral-700 text-xs font-medium">
                                      Leistung
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium whitespace-nowrap mt-5"
                                    >
                                      Rahmenfarbe
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium whitespace-nowrap mt-6"
                                    >
                                      Effektivität
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      Maße
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      Gewicht
                                    </div>
                                  </div>
                                  <div
                                    className="self-stretch flex grow basis-[0%] flex-col items-stretch"
                                  >
                                    <div className="text-neutral-700 text-xs font-medium">
                                      565W
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      Silber
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      21,87%
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium whitespace-nowrap mt-5"
                                    >
                                      2278x1134x35mm
                                    </div>
                                    <div
                                      className="text-neutral-700 text-xs font-medium mt-6"
                                    >
                                      28kg
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0"
                      >
                        <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                          <div className="text-neutral-900 text-lg font-semibold">
                            36.99 USD
                          </div>
                          <div className="text-neutral-400 text-xs font-semibold mt-3 line-through">
                            48.56
                          </div>
                          <div className="text-neutral-400 text-xs font-semibold mt-6">
                            Free Shipping
                          </div>
                          <div className="text-neutral-400 text-xs mt-1.5">
                            Delivery in 1 day
                          </div>
                          <div
                            className="bg-neutral-700 flex items-stretch justify-between mt-6 px-4 py-4 rounded-md"
                          >
                            <div className="text-white text-lg">Add To Cart</div>
                            <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                          </div>
                          <div
                            className="bg-neutral-700 flex items-stretch justify-between mt-2 px-5 py-4 rounded-md"
                          >
                            <div className="text-white text-lg">Buy Now</div>
                            <svg viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#FFF" width="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"></path> <path stroke-linecap="round" d="M19 5l-1 1"></path> <path d="M18 6L5 19"></path> </g></svg>

                          </div>
                        </div>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="justify-center flex gap-4 mt-24 mb-6 self-end max-md:mr-2.5 max-md:mt-10"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2de423749e642867f9234165a24938928b2cdf9588d343cd6065b87c0140930f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
              className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <div className="items-start flex gap-2">
              <div
                className="text-white text-center text-base font-medium leading-6 tracking-wide whitespace-nowrap justify-center items-center bg-black self-stretch aspect-square h-8 px-3 rounded-md"
              >
                1
              </div>
              <div
                className="text-black text-center text-base font-medium leading-6 tracking-wide whitespace-nowrap justify-center items-center bg-neutral-100 self-stretch aspect-square h-8 px-3 rounded-md"
              >
                2
              </div>
              <div
                className="text-black text-center text-base font-medium leading-6 tracking-wide whitespace-nowrap justify-center items-center bg-neutral-100 self-stretch aspect-square h-8 px-3 rounded-md"
              >
                3
              </div>
              <div
                className="items-start flex w-6 shrink-0 h-1.5 flex-col mt-7 self-end"
              ></div>
              <div
                className="text-black text-center text-base font-medium leading-6 tracking-wide whitespace-nowrap justify-center items-stretch bg-neutral-100 self-stretch aspect-[1.25] px-3 py-1 rounded-md"
              >
                12
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e251b14d565c4eb407dc8336096dd9c021e5846afae8e292102cae656ec431?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
              className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
        </div>
        <Footer/>
      </div> 
    </>
  )
}

export default Shop