import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen px-20 pt-20 bg-zinc-100 flex gap-5 items-center'>
        <div className="cardcontainer relative w-1/2 h-[55vh] bg-[#004D43] rounded-lg flex justify-center items-center">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 px-4 py-1 bottom-10 border-2 border-[#CDEA68] rounded-3xl text-[#CDEA68]'>&copy;2019-2022</button>
        </div>
        <div className="cardcontainer w-1/2 h-[55vh] flex gap-5">
            <div className='w-1/2 h-full bg-[#212121] rounded-lg relative flex justify-center items-center'>
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
              <button className='absolute left-10 px-4 py-1 bottom-10 border-2 border-zinc-100 rounded-3xl text-zinc-100'>RATING 5.0 ON CLUTCH</button>            </div>
            <div className='w-1/2 h-full bg-[#212121] rounded-lg relative flex justify-center items-center'>
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='absolute left-10 px-4 py-1 bottom-10 border-2 border-zinc-100 rounded-3xl text-zinc-100'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards