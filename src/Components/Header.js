import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

export default function Header() {
    const [mobnav, setMobnav] = useState(false)
  return (
    
    <header className="flex justify-between px-5 py-2 bg-primary">
        <a href='#' className='text-white'>Ajin Portfolio</a>
        <nav className='hidden md:block'>
        <ul className="flex px-5 text-yellow-200">
            <li><a href='/'>Home</a></li>
            <li><a href='/#about'>About</a></li>
            <li><a href='/#projects'>Projects</a></li>
            <li><a href='/#contact'>Contact</a></li>
        </ul>
        </nav>
        {mobnav && <nav className='block md:hidden'>
        <ul className="flex flex-col px-5 text-yellow-200 mob-nav">
            <li><a href='/home'>Home</a></li>
            <li><a href='/home'>About</a></li>
            <li><a href='/home'>Projects</a></li>
            <li><a href='/home'>Contact</a></li>
        </ul>
        
        </nav>}
        <button onClick={()=>{setMobnav(!mobnav)}} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
    
    
    
    
  )
}
