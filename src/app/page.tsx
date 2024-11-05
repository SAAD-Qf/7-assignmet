import React from 'react';
import Navbar from '../app/Navbar/page';
import Link from 'next/link';

export default function App({  }) {
  return (
    <div className='bg-gradient-to-r from-sky-100 to-slate-900 h-screen w-screen absolute bg-cover '>
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=' text-gradient-to-r from-slate-900 to-sky-100 font-serif text-6xl px-4 py-2 shadow-2xl shadow-black animate-bounce'>
        Welcome To My PortFolio
      </div>
      <br />
      <br />
      <br />
      <p className=' font-serif text-2xl shadow-black'>
        Im passionate web developer to create websites and applications with full of putential and 
      </p>
      <p className='font-serif text-2xl  shadow-black'>
        joy to satisfy my client Experience .
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link className='bg-gradient-to-r from-sky-100 to-slate-900 text-black font-bold rounded-lg hover:bg-black hover:text-white shadow-md shadow-black px-4 py-2' href="/about"> Go To About</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>
        <p className='text-black font-sans text-sm text-center justify-center items-end'>
          Copyright © 2024 This Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
