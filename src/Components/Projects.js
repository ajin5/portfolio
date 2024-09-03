import React from 'react'
import ecommerce from '../assets/ecommerce.jpg'
import blog from '../assets/blog.jpg'
import food from '../assets/food.jpg'

export default function Projects() {
  const config ={
    projects:[
      {
        image:ecommerce,
        descrption:'This is an e-commerce website made using the MERN stack.',
        link:''
      },
      {
        image:blog,
        descrption:'This is an blog website made using the MERN stack.',
        link:''
      },
      {
        image:food,
        descrption:'This is an Food website made using the MERN stack.',
        link:''
      }
    ]
  }
  return (
    <section id='projects' className='flex flex-col px-10 py-10 bg-primary'>
        <div className=''>
            <h1 className='text-5xl text-white font-bold border-b-4 border-secondary w-[180px]'>Projects</h1>
        </div>
        <div className='w-full flex justify-between gap-5 pt-5'>
          {config.projects.map((project)=>(<div className='relative'>
            <img className ='w-[300px] h-[200px]' src={project.image} alt='ecom'/>
            <div className='project-desc flex flex-col'>
            <p className='text-2xl text-white  '>{project.descrption}</p>
            <button className='flex justify-center pt-5 text-2xl text-white'>{project.link}Click here</button>
            </div>
            </div>))
            
}
        </div>
    </section>
  )
}
