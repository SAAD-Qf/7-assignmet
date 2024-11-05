
import Navbar from "../Navbar/page"
import Link from "next/link";
import figp from "../public/figp.png"
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
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div className="min-h-[256px]">
        <Image src={figp} alt="figp" className="w-full" />
      </div>

      <div className="p-6">
        <h3 className="text-gray-800 text-xl font-serif">Project2</h3>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed font-serif">
         That was my secound simple portfolio that is make with next.js and tailwind css 
         and with so functinally with perfect style .
        </p>
        <br />
        <Link href="/project3"
          className="bg-black text-white font-serif rounded-lg hover:bg-black hover:text-white shadow-md shadow-black px-4 py-2"
        >
          Project2
        </Link>
      </div>
    </div>
    </div>
  )
}
