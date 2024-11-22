
import gsap,{ ScrollTrigger, Power4 } from 'gsap/all';
import { Timeline } from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';

const PlayReel = () => {
  const parent = useRef(null);
  const videodiv = useRef(null);
  const play=useRef(null);
  const reel=useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl=gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      }
    })
    tl.to(videodiv.current, {
      
      width: "105%",
      height: "105%",
      ease: Power4
    },'a')
    .to(play.current, {
      x:"100%",
      ease: Power4
    },'a')
    .to(reel.current, {
      x:"-100%",
      ease: Power4
    },'a');

  }, []); 
  return (
    <div ref={parent} className='w-full h-screen overflow-hidden relative bg-black'>
      <div ref={videodiv} className='w-40 sm:w-96 aspect-video bg-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
        <video 
         
          autoPlay 
          muted 
          loop 
          className='w-full h-full scale-[2.5] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' 
          src="src/assets/PlayReel.mp4"
        ></video>
      </div>
      <div className='overlay absolute w-full h-full text-zinc-300 flex flex-col justify-between py-20'>
        <div className='flex gap-3 w-full items-center justify-center'>
          <svg 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-4"
          >
            <path 
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" 
              fill="currentColor"
            ></path>
          </svg>
          <h1 className='text-sm'>Work in motion</h1>
        </div>
        <div className='w-full flex justify-center gap-32 sm:gap-96 items-center'>
          <div ref={play} className='text-4xl font-light sm:text-8xl'>Play</div>
          <div ref={reel} className='text-4xl font-light sm:text-8xl'>Reel</div>
        </div>
        <p className='text-center px-10 text-xs'>
          Our work is best experienced in motion. Don’t forget to put on your headphones.
        </p>
      </div>
    </div>
  );
}

export default PlayReel;
