import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    

<footer style={{backgroundImage: 'radial-gradient(farthest-corner at 40px 40px, #151438  0%, rgb(30, 7, 34) 100%)'}}>
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="md:flex md:items-center md:justify-between">
            <a href="/" className="flex items-center mb-4 md:mb-0 space-x-3 rtl:space-x-reverse max-md:justify-center">
                <Image src='/wombwatch_logo.JPG' alt='' width={200} height={200} />
            </a>
            <ul className="flex max-md:justify-center flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 md:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 max-md:text-center">© 2024 <a href="/" className="hover:underline">Womb Watch</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer