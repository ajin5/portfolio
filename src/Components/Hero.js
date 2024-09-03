import React from 'react'
import hero from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
  return (
    <section id='/'className='flex flex-col md:flex-row bg-primary px-5 py-10'>
        <main className=' flex flex-col justify-center md:w-1/2 px-10 font-hero-font-name text-white text-2xl'>
            <h1>Hi, I am Ajin - Full Stack Developer & Digital Marketer</h1>
            <p>I Expertise Developing & Digital Marketing</p>
            <div className='flex py-10'>
                <a href='#' className='pr-5 hover:text-black'><AiOutlineLinkedin size={40} /></a>
                <a href='#' className='pr-5 hover:text-black'><AiOutlineTwitter size={40}/></a>
                <a href='#' className='pr-5 hover:text-black'><AiOutlineFacebook size={40}/></a>
                

            </div>
        </main>
        <img className='md:w-1/3 pt-5'src={hero} alt='hero'/>
    </section>
  )
}
