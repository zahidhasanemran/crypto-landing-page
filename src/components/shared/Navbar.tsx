import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../ui/button'

const Navbar = () => {
  return (
    <header className='bg-black'>
      <div className='container mx-auto'>
        <div className='flex justify-between py-6'>
          <div className="flex items-center">
            <Link href="/" className='block'>
              <Image
                src="./images/crypgo.svg"
                alt="crypgo"
                width={135}
                height={32}
              />
            </Link>
          </div>
          <nav className='flex '>
            <Link href="/" className='block px-8 py-4 text-white font-medium leading-[120%] tracking-[-0.6%] '>Features</Link>
            <Link href="/" className='block px-8 py-4 text-white font-medium leading-[120%] tracking-[-0.6%] '>Benefits</Link>
            <Link href="/" className='block px-8 py-4 text-white font-medium leading-[120%] tracking-[-0.6%] '>Services</Link>
            <Link href="/" className='block px-8 py-4 text-white font-medium leading-[120%] tracking-[-0.6%] '>Why Crypgo</Link>
            <Link href="/" className='block px-8 py-4 text-white font-medium leading-[120%] tracking-[-0.6%] '>FAQs</Link>
          </nav>
          <div className="">
            <Button text='Book a Call' />
          </div>
        </div>
      </div>
    </header >
  )
}

export default Navbar