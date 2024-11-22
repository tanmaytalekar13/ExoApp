import React from "react";
import { motion, stagger } from "framer-motion";
import { Power4 } from "gsap";
import { Expo } from "gsap";
const Landing = () => {
  stagger
  return (
    <div className="w-full h-[150vh] sm:h-[250vh] relative">
      <div className="picture w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1"
          className="w-full h-full object-cover "
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
        />
      </div>

      <div className="w-full absolute top-0">
        <div className=" h-full text max-w-screen-2xl mx-auto px-5 sm:px-10 text-white">
          <div className="para mt-72 sm:mt-[35rem]">
            {[
              "Global digital design studio partnering with",
              "brands and bussinesses that create exceptional",
              "experiences where people",
              "live,work,and unwind",
            ].map((items,index) =>{
                return <p className="text-md sm:text-3xl  w-fit overflow-hidden">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{ ease: [0.22,1,0.36,1], duration: 1.3 ,delay:index*.12}}
                  className="inline-block origin-left  "
                >{items}
                  
                </motion.span>
              </p>
             })}
          </div>
          <div className="heading mt-5 sm:mt-10">
            {["Digital"," Design","Experience"].map((items,index) =>{
              return <h1 className="text-6xl sm:text-[19rem] font-light tracking-tighter -mt-20 py-5 sm:text-9xl leading-none overflow-hidden">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{ ease: [0.22,1,0.36,1], duration:.8, delay:1+index*.15}} 
                className="inline-block origin-left mt-10">
                {items}
                </motion.span>
              
               </h1>
            })}
           
           
          </div>
          <div className="para mt-10 sm:w-1/3 sm:mt-20">
            <p className="sm:text-xl">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              href="#"
              className="sm:text-xl border-b-[.3px] sm:border-b-[1px] border-zinc-100 pb-1 inline-block mt-10"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
