import React from 'react'
import about from '../assets/about.png'

export default function About() {
  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary py-10'>
        <div className='flex flex-col md:flex-row md:w-1/2 py-5'>
        <img src={about} alt='about'/>
        </div>
        <div className='flex flex-col justify-center md:w-1/2 text-white ml-5 md:mr-5'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About me</h1>
        <p className='mb-5'>I am a Full Stack Developer I know the Front end development of HTML, CSS, JS, React, Redux </p>
        <p>I am a Full Stack Developer I know the Back end development of Nodejs, Expressjs, Mongodb and Mongoose </p>
        </div>
        
    </section>
  )
}
