import { motion } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all"

function Feature() {
    const [hover, sethover]=useState(false);
    const [hover2, sethover2]=useState(false);

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
            <h1 className='text-6xl'>Featured Projects</h1>
        </div>
        <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-10">
                <div onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)} className="cardcontainer w-1/2 h-[70vh] relative">
                    <h1 className='absolute flex overflow-hidden text-[#49d653] z-[9] text-6xl left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none uppercase tracking-tighter font-semibold'>
                        {"FYDE".split('').map((item, index)=><motion.span initial={{y: "100%"}} animate={hover ? {y:"0"} : {y:"100%"}} transition={{ease: [0.22, 1, 0.36, 1],duration:0.2, delay: index*0.1}} className='inline-block'>{item}</motion.span>)}
                    </h1>
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div onMouseEnter={()=>sethover2(true)} onMouseLeave={()=>sethover2(false)} className="cardcontainer w-1/2 h-[70vh] relative">
                <h1 className='absolute flex overflow-hidden text-[#49d653] z-[9] text-6xl right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none uppercase tracking-tighter font-semibold'>
                    {"VISE".split('').map((item, index)=><motion.span initial={{y: "100%"}} animate={hover2 ? {y:"0"} : {y:"100%"}} transition={{ease: [0.22, 1, 0.36, 1],duration:0.2, delay: index*0.1}} className='inline-block'>{item}</motion.span>)}
                </h1>
                    <div className="w-full h-full rounded-xl overflow-hidden">
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature