import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="bg-blue-950 w-full px-12 py-12 max-md:max-w-full max-md:px-5">
          <div className="gap-5 flex max-md:flex-col justify-center items-stretch max-md:gap-0">
            <div className="flex flex-col text-nowrap items-stretch max-md:w-full max-md:ml-0">
              <div className="my-auto max-md:mt-10">
                <div className="gap-10 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                      <div className="text-white text-3xl font-bold leading-10">
                        COMPANY
                      </div>
                      <div
                        className="text-white text-base leading-6 tracking-tight mt-14 max-md:mt-10"
                      >
                        Imprint
                      </div>
                      <div
                        className="text-white text-base leading-6 tracking-tight whitespace-nowrap mt-6"
                      >
                        Data protection declaration
                      </div>
                      <div className="text-white text-base leading-6 tracking-tight mt-6">
                        General terms
                      </div>
                      <div className="text-white text-base leading-6 tracking-tight mt-6">
                        Cooperation partners
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                      <div className="text-white text-3xl font-bold leading-10">
                        Info
                      </div>
                      <div className="text-white text-base leading-6 tracking-tight mt-14 max-md:mt-10">
                        Payment methods
                      </div>
                      <div className="text-white text-base leading-6 tracking-tight whitespace-nowrap mt-6">
                        Contact
                      </div>
                      <div className="text-white text-base leading-6 tracking-tight mt-6">
                        Shipping & Delivery
                      </div>
                      <div className="text-white text-base leading-6 tracking-tight mt-6">
                        Status
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                      <div className="text-white text-3xl font-bold leading-10">
                        CONNECT
                      </div>
                      <div className="text-white text-base leading-6 tracking-tight mt-14 max-md:mt-10">
                        Instagram
                      </div>
                      <div className="text-white text-base leading-6 tracking-tight whitespace-nowrap mt-6">
                        Likedin
                      </div>
                      <div className="text-white text-base leading-6 tracking-tight mt-6">
                        Twitter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0"
            >
              <div className="mt-3.5 max-md:max-w-full max-md:mt-10">
                <div
                  className="gap-5 flex max-md:flex-col justify-end max-md:items-stretch max-md:gap-0"
                >
                  <div
                    className="flex flex-col items-stretch w-9/12 flex-end max-md:w-full max-md:ml-0"
                  >
                    <div
                      className="flex flex-col items-end max-md:max-w-full max-md:mt-10"
                    >
                      <img
                        loading="lazy"
                        src="solar-logo.png"
                        className="aspect-[3.54] bg-white object-contain object-center w-[209px] overflow-hidden max-w-full"
                      />
                      <div
                        className="text-white text-right text-base leading-8 self-stretch mt-9 max-md:max-w-full"
                      >
                        It is very important to us that our customers are 100%
                        satisfied. If you have any questions or suggestions, please
                        get in touch.
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer