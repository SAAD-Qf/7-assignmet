import React from 'react';
import Navbar from '../Navbar/page';
import Link from 'next/link';

export default function App({  }) {
      <br />
      return(
        <div className='bg-gradient-to-r from-sky-100 to-slate-900 h-screen w-screen absolute bg-cover'>
          <Navbar/>
          <br />
            <br />
      <h3 className='text-5xl text-gradient-to-r from-slate-900 text-center justify-center to-sky-100 font-serif px-4 py-2 rounded-3xl shadow-2xl shadow-black animate-bounce'>
        ABOUT
      </h3>
      <br />
      <br />
      <div className='text-xl font-serif px-3 py-2 hover:text-slate-300 shadow-sm border-black shadow-black rounded-2xl'>
      <li>
      My Journey
My journey into web development began with a curiosity about how the internet works. I started by learning HTML and CSS, quickly progressing to JavaScript and modern frameworks. Over the years, I have honed my skills in responsive design, user experience, and front-end technologies, always striving to stay updated with the latest industry trends.</li>
<li>
What I Do
I specialize in creating user-friendly, high-performance websites and applications. Whether it's building a simple landing page or a complex web application, I approach each project with a problem-solving mindset. My experience spans various industries, allowing me to adapt and tailor solutions to meet specific client needs.
</li>
<li>
My Approach
I believe in a collaborative approach to development. Working closely with clients, I prioritize understanding their vision and objectives. This enables me to create solutions that not only meet technical requirements but also align with business goals. I value feedback and iteration, ensuring that the final product exceeds expectations.
</li>
  <li>
  Skills
  </li>
  <li>
  Front-End Development: HTML, CSS, JavaScript, React, TypeScript,Next.js ,TailWind CSS 
  </li>
  <li>
I am always excited to take on new challenges and collaborate with fellow creatives. If you're looking to bring your ideas to life or simply want to connect, feel free to reach out. Let’s create something amazing together!
</li> 
</div>
<br />
<br />
<div className='text-center justify-center'>
<Link className='bg-gradient-to-r from-sky-100 to-slate-900 text-black font-bold rounded-lg hover:bg-black hover:text-white shadow-md shadow-black px-4 py-2' href="/projects"  > Go To Projects</Link>
</div>
    </div>
  );
}