import React from 'react'
import ecommerce from '../assets/ecommerce.jpg'
import blog from '../assets/blog.jpg'
import food from '../assets/food.jpg'

export default function Projects() {
  return (
    <section id='projects' className='flex flex-col px-10 py-10 bg-primary'>
        <div className=''>
            <h1 className='text-5xl text-white font-bold border-b-4 border-secondary w-[180px]'>Projects</h1>
        </div>
        <div className='w-full flex justify-between gap-5 pt-5'>
            <div className='relative'>
            <img className ='w-[300px] h-[200px]' src={ecommerce} alt='ecom'/>
            <div className='project-desc'>
            <p className='text-2xl text-white'>This is an e-commerce website made using the MERN stack.</p>
            </div>
            </div>
            <div className='relative'>
            <img className ='w-[300px] h-[200px]' src={blog} alt='ecom'/>
            <div className='project-desc'>
            <p className='text-2xl text-white'>This is an Blog website made using the MERN stack.</p>
            </div>
            </div>
            <div className='relative'>
            <img className ='w-[300px] h-[200px]' src={food} alt='ecom'/>
            <div className='project-desc'>
            <p className='text-2xl text-white'>This is website made using the MERN stack.</p>
            </div>
            </div>
        </div>
    </section>
  )
}
