import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 h-10 border'>
     <Link href={"/dashboard"}>MET</Link>
    </div>
  )
}

export default Navbar