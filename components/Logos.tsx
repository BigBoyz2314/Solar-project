import Image from 'next/image'
import React from 'react'

const Logos = () => {
  return (
    <div
    className="self-center flex w-full max-w-[987px] items-start justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap"
    >
    <Image
        width={200}
        height={200}
        alt='microsoft logo'
        loading="lazy"
        src="/microsoft.png"
        className="aspect-square object-contain object-center w-[200px] overflow-hidden self-stretch shrink-0 max-w-full"
    />
    <Image
        width={200}
        height={200}
        alt='decor logo'
        loading="lazy"
        src="/decor.png"
        className="aspect-[2.5] object-contain object-center w-[155px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
    <Image
        width={200}
        height={200}
        alt='urban interior logo'
        loading="lazy"
        src="/urbaninterior.png"
        className="aspect-[2.24] object-contain object-center w-[132px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
    <Image
        width={200}
        height={200}
        alt='hooker furnishings logo'
        loading="lazy"
        src="/hookerfurnishings.png"
        className="aspect-[3.95] object-contain object-center w-[146px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
    <Image
        width={200}
        height={200}
        alt='bassett logo'
        loading="lazy"
        src="/bassett.png"
        className="aspect-[3.75] object-contain object-center w-[150px] overflow-hidden self-center shrink-0 max-w-full my-auto"
    />
    </div>
  )
}

export default Logos