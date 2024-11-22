import React, { useEffect, useRef } from "react";
import { Timeline } from "gsap/gsap-core";
import gsap from "gsap";
import { ScrollTrigger,Power4 } from "gsap/all";

const Images = () => {
  const parent = useRef(null);
 const first= useRef(null);
 const second= useRef(null);
 const third= useRef(null);
 const fourth= useRef(null);

 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  
   var tl=gsap.timeline(
    {
      scrollTrigger: {
        trigger: parent.current,
        start: "0 0",
        scrub: 1,
      },
    }
   );
   tl.to(first.current,{
    x:"50%",
    ease: Power4,
   },'a');
   tl.to(second.current,{
    x:"-50%",
    ease: Power4,
   },'a')
   tl.to(third.current,{
    x:"-50%",
    ease: Power4,
   },'a');
   tl.to(fourth.current,{
    x:"50%",
    ease: Power4,
   },'a');
    
 })
  return (
    <div ref={parent} className="w-full h-[70vh] sm:h-[100vh]  flex items-center justify-center overflow-hidden">
      <div className="w-[40%] sm:w-[20%] sm:h-[70%] h-1/2  relative">
        <div ref={first} className="absolute w-20 sm:w-40 h-[7rem] sm:h-[15rem]  -right-1/3 top-6">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/440x625/filters:quality(90)"
            alt=""
          />
        </div>
        <div ref={second} className="absolute w-[8rem] sm:w-[20rem] aspect-video bg-red-500 -left-1/2 sm:-left-2/3 top-1/3 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div ref={third} className="absolute w-[9rem] sm:w-[16rem] aspect-video -left-[50%] -bottom-10 bg-red-500">
            <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
        </div>
        <div ref={fourth} className="absolute w-[10rem] sm:w-[15rem] aspect-[1.5] -right-[70%] sm:-right-[50%] -bottom-[37%] sm:-bottom-[17%] bg-red-600 ">
         <video autoPlay loop muted src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
        </div>

        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
