import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate, setRotate]=useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            const mouseX=e.clientX;
            const mouseY=e.clientY;

            let deltaX=mouseX-window.innerWidth/2;
            let deltaY=mouseY-window.innerHeight/2;

            var angle=Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-0.7" className='relative w-full h-screen bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                    <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute line w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-6 h-6 bg-zinc-100 rounded-full '></div>
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                    <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute line w-full h-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-6 h-6 bg-zinc-100 rounded-full '></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes