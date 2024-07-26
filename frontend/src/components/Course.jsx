import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
    
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
    <div className=' item-center justify-center text-center mt-18 dark:bg-slate-900 dark:text-white '>
      <h1 className='text-2xl md:text-4xl pt-28 '>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
      <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda inventore maiores aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, provident. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, optio.

      </p>
     <Link to='/'> <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button></Link>
    </div>

    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {
      list.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))
      }
    </div>


    </div>
    </>
  )
}

export default Course