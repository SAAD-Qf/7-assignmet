import Link from 'next/link'
export default function 
() {
  return (
    <div>
        <nav>
            <div className='grid grid-cols-12 text-center justify-center'>
                <Link className='bg-gradient-to-r from-sky-100 to-slate-900 text-black font-bold rounded-lg hover:bg-black hover:text-white shadow-md shadow-black' href="/">
                    Home
                </Link>
                <br />
                <Link className='bg-gradient-to-r from-sky-100 to-slate-900 text-black font-bold rounded-lg hover:bg-black hover:text-white shadow-md shadow-black' href="/about">
                    About
                </Link>
                <br />
                <Link className='bg-gradient-to-r from-sky-100 to-slate-900 text-black font-bold rounded-lg hover:bg-black hover:text-white shadow-md shadow-black' href="/projects">
                    Projects
                </Link>
                <br />
                <Link className='bg-gradient-to-r from-sky-100 to-slate-900 text-black font-bold rounded-lg hover:bg-black hover:text-white  shadow-md shadow-black' href="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    </div>
  )
}



