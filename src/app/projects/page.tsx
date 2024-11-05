
import Navbar from "../Navbar/page"
import Link from "next/link";
import Hack from "../public/hack.png"
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
      <div className="bg-white shadow-2xl shadow-black w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div className="min-h-[256px]">
        <Image src={Hack} alt="Hack" className="w-full" />
      </div>

      <div className="p-6">
        <h3 className="text-gray-800 text-xl font-serif">Project1</h3>
        <p className="mt-4 text-sm text-gray-500 leading-relaxed font-serif">
         This is my project the resume builder in that you create your 
         perfect new resume for free thats is make with html
         css and TypeScript .
        </p>
        <br />
        <Link href="/project2"
          className="bg-black text-white font-serif rounded-lg hover:bg-black hover:text-white shadow-md shadow-black px-4 py-2"
        >
          Project2
        </Link>
      </div>
    </div>
    </div>
  )
}
