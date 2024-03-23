import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-4xl'>
            Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full border-t-[1px] border-[#98b048] mt-10 pt-10 flex' >
            <div className='w-1/2'>
                <h1 className='text-6xl'>Our Approach:</h1>
                <button className='px-10 py-6 bg-zinc-900 rounded-full text-white mt-5 flex gap-10 items-center uppercase'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-red-500 rounded-2xl'></div>
        </div>
    </div>
  )
}

export default About