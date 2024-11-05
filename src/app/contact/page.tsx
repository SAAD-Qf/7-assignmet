import React from 'react';
import Navbar from '../Navbar/page';
import ContactForm from '../contform/page';

export default function App({  }) {
  return (
    <div className='bg-gradient-to-r from-sky-100 to-slate-900 h-screen w-screen absolute bg-cover'>
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <ContactForm/>
    </div>
  );
}