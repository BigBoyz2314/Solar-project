import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const TopSort = () => {
  return (
    <>

        <div className='flex flex-row py-2 w-full sticky top-[126px] bg-white pl-12 z-50'>
            <Button variant='ghost' size='lg' className='text-sm'>Shop all</Button>
            <Button variant='ghost' size='lg' className='text-sm'>Modules</Button>
            <Button variant='ghost' size='lg' className='text-sm'>Inverters</Button>
            <Button variant='ghost' size='lg' className='text-sm'>Batteries</Button>
            <Button variant='ghost' size='lg' className='text-sm'>Accessories</Button>
        </div>

    </>
  )
}

export default TopSort