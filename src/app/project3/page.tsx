
import Navbar from "../Navbar/page"
import Link from "next/link";
import port from "../public/port.png"
import Image from "next/image";

import React from 'react'

export default function page() {
  return (
    <div className='bg-gradient-to-r from-sky-100 to-slate-900 h-screen w-screen absolute bg-cover'>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-white shadow-2xl shadow-black w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4  ">
      <div className="min-h-[256px]">
        <Image src={port} alt="port" className="w-full" />
      </div>

      <div className="p-6">
        <h3 className="text-gray-800 text-xl font-serif">Project3</h3>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed font-serif">
         That is my first simple portfolio project that i create with next.js and tailwind css 
         with little bit of experience .
        </p>
        <br />
        <div>
          <Link href="/contact" className="bg-black text-white font-serif rounded-lg hover:bg-black hover:text-white shadow-md shadow-black px-4 py-2">
            Contact 
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
