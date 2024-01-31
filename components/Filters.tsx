import React from 'react'
import { Slider } from './ui/slider'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'

const Filters = () => {
  return (
    <>
        <div
                className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:px-12 max-md:ml-0"
              >
                <div className="flex flex-col max-md:mt-10">
                <details open>
                  <summary className="justify-between items-stretch rounded flex gap-0 py-3">
                    <div
                      className="text-black text-lg font-medium leading-6 tracking-wide grow whitespace-nowrap"
                    >
                      Price
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e77ffc7f9892620d38a959c2fac6e007c762c7c55f4338574b3f80b7ed9c92?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </summary>
                  <div className="justify-between items-stretch flex gap-5 mt-6">
                    <div className="text-neutral-400 text-sm leading-6 tracking-normal">
                      <span className="text-neutral-400">From</span>
                    </div>
                    <div className="text-neutral-400 text-sm leading-6 tracking-normal">
                      To
                    </div>
                  </div>
                  <div className="justify-between items-center flex gap-3 mt-2">
                  <Input 
                    type="number"
                    value="1299"
                      className="text-black text-right text-sm leading-6 tracking-normal w-10 bg-white grow justify-center py-2 rounded border-[0.5px] border-solid border-neutral-400"
                    />
                    <div className="bg-neutral-200 w-5 shrink-0 h-px my-auto"></div>
                    <Input 
                    type="number"
                    value="1299"
                      className="text-black text-right text-sm leading-6 tracking-normal w-10 bg-white grow justify-center py-2 rounded border-[0.5px] border-solid border-neutral-400"
                    />
                  </div>
                  <div className="items-stretch  flex w-full justify-between mt-4">
                    <Slider
                      className="w-full"
                      min={0}
                      max={100}
                      step={1}
                      defaultValue={[50, 100]}
                      />
                  </div>
                </details>
                <details open>
                  <summary
                    className="justify-between items-stretch rounded flex gap-0 mt-6 py-3"
                  >
                    <div
                      className="text-black text-lg font-medium leading-6 tracking-wide grow whitespace-nowrap"
                    >
                      Brand
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e77ffc7f9892620d38a959c2fac6e007c762c7c55f4338574b3f80b7ed9c92?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </summary>
                  <div className="items-stretch flex mt-6">
                    <div className="items-stretch flex grow basis-[0%] flex-col">
                      <div
                        className="items-stretch bg-neutral-100 flex justify-between px-4 gap-2 w-full py-2 rounded-lg max-md:pr-5"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e19dc35dd213e656474aa0288d1d6968a56aec699761271179437a1d7f07a00?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                          className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <Input
                            type="text"
                            className="text-stone-500 border-none bg-neutral-100 text-sm font-medium leading-5 self-center grow whitespace-nowrap my-auto"
                            />
                      </div>
                      <div className="items-center flex justify-between gap-2 mt-4">
                        <div
                          className="text-neutral-400 text-sm font-medium leading-6 self-stretch grow whitespace-nowrap"
                        >
                        <Checkbox
                            className="w-4 h-4 accent-black mr-1"
                            id="brand"
                            />
                          <span>Brand 1</span>
                          <span className="text-xs text-neutral-400">(110)</span>
                        </div>
                      </div>
                      <div className="items-center flex justify-between gap-2 mt-2">
                        <div
                          className="text-neutral-400 text-sm font-medium leading-6 self-stretch grow whitespace-nowrap"
                        >
                        <Checkbox
                            className="w-4 h-4 accent-black mr-1"
                            id="brand"
                            />
                          Brand 2
                          <span className="text-xs text-neutral-400">(125)</span>
                        </div>
                      </div>
                      <div className="items-center flex justify-between gap-2 mt-2">
                        
                        <div
                          className="text-neutral-400 text-sm font-medium leading-6 self-stretch grow whitespace-nowrap"
                        >
                        <Checkbox
                            className="w-4 h-4 accent-black mr-1"
                            id="brand"
                            />
                          Brand 3
                          <span className="text-xs text-neutral-400">(68)</span>
                        </div>
                      </div>
                      <div className="items-center flex justify-between gap-2 mt-2">
                        
                        <div
                          className="text-neutral-400 text-sm font-medium leading-6 self-stretch grow whitespace-nowrap"
                        >
                        <Checkbox
                            className="w-4 h-4 accent-black mr-1"
                            id="brand"
                            />
                          Brand 4
                          <span className="text-xs text-neutral-400">(44)</span>
                        </div>
                      </div>
                      <div className="items-center flex justify-between gap-2 mt-2">
                        
                        <div
                          className="text-neutral-400 text-sm font-medium leading-6 self-stretch grow whitespace-nowrap"
                        >
                        <Checkbox
                            className="w-4 h-4 accent-black mr-1"
                            id="brand"
                            />
                          Brand 6
                          <span className="text-xs text-neutral-400">(36)</span>
                        </div>
                      </div>
                      <div className="items-center flex justify-between gap-2 mt-2">
                        
                        <div
                          className="text-neutral-400 text-sm font-medium leading-6 self-stretch grow whitespace-nowrap"
                        >
                        <Checkbox
                        className="w-4 h-4 accent-black mr-1"
                        id="brand"
                        />
                          Brand 7
                          <span className="text-xs text-neutral-400">(10)</span>
                        </div>
                      </div>
                      <div className="items-center flex justify-between gap-2 mt-2">
                        
                        <div
                          className="text-neutral-400 text-sm font-medium leading-6 self-stretch grow whitespace-nowrap"
                        >
                        <Checkbox
                            className="w-4 h-4 accent-black mr-1"
                            id="brand"
                            />
                          Brand 8
                          <span className="text-xs text-neutral-400">(34)</span>
                        </div>
                      </div>
                      <div className="items-center flex justify-between gap-2 mt-2">
                        
                        <div
                          className="text-neutral-400 text-sm font-medium leading-6 self-stretch grow whitespace-nowrap"
                        >
                        <Checkbox
                            className="w-4 h-4 accent-black mr-1"
                            id="brand"
                            />
                          Brand 9
                          <span className="text-xs text-neutral-400">(22)</span>
                        </div>
                      </div>
                      <div className="items-center flex justify-between gap-2 mt-2">
                        
                        <div
                          className="text-neutral-400 text-sm font-medium leading-6 self-stretch grow whitespace-nowrap"
                        >
                        <Checkbox
                            className="w-4 h-4 accent-black mr-1"
                            id="brand"
                            />
                          Brand 10
                          <span className="text-xs text-neutral-400">(35)</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="items-stretch flex basis-[0%] flex-col justify-center"
                    >
                      <div
                        className="bg-zinc-300 flex flex-col items-stretch pb-12 rounded-sm"
                      >
                        <div
                          className="bg-zinc-600 flex shrink-0 h-[92px] flex-col mb-36 rounded-sm max-md:mb-10"
                        ></div>
                      </div>
                    </div>
                  </div>
                </details>
                  <div
                    className="justify-between items-stretch rounded flex gap-0 mt-6 py-3"
                  >
                    <div
                      className="text-black text-lg font-medium leading-6 tracking-wide grow whitespace-nowrap"
                    >
                      Availability from
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e77ffc7f9892620d38a959c2fac6e007c762c7c55f4338574b3f80b7ed9c92?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                  <div
                    className="justify-between items-stretch rounded flex gap-0 mt-6 py-3"
                  >
                    <div
                      className="text-black text-lg font-medium leading-6 tracking-wide grow whitespace-nowrap"
                    >
                      Categories
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b44be660871b000454d1d6ea108e6120f8bec04cd17166c2ca1c0e680053543d?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                  <div
                    className="justify-between items-stretch rounded flex gap-0 mt-6 py-3"
                  >
                    <div
                      className="text-black text-lg font-medium leading-6 tracking-wide grow whitespace-nowrap"
                    >
                      Product location
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b44be660871b000454d1d6ea108e6120f8bec04cd17166c2ca1c0e680053543d?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                  <div
                    className="justify-between items-stretch rounded flex gap-0 mt-6 py-3"
                  >
                    <div
                      className="text-black text-lg font-medium leading-6 tracking-wide grow whitespace-nowrap"
                    >
                      Availability (pcs)
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b44be660871b000454d1d6ea108e6120f8bec04cd17166c2ca1c0e680053543d?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                  <div
                    className="justify-between items-stretch rounded flex gap-0 mt-6 pt-3"
                  >
                    <div
                      className="text-black text-lg font-medium leading-6 tracking-wide grow whitespace-nowrap"
                    >
                      Shipping to
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b44be660871b000454d1d6ea108e6120f8bec04cd17166c2ca1c0e680053543d?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                      className="aspect-[1.5] object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                </div>
              </div>
    </>
  )
}

export default Filters