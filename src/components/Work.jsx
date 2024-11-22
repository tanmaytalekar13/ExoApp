import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

const Work = () => {
  const [elem, setElem] = useState([
    {
      Heading: "Columbia Pictures",
      subHeading: "Celebrating a Century of Cinema",
      video:
        "https://download-video.akamaized.net/v3-1/playback/4bdb3586-71c8-40be-b000-2ba5691333a3/dee0a4f7?__token__=st=1721401671~exp=1721416071~acl=%2Fv3-1%2Fplayback%2F4bdb3586-71c8-40be-b000-2ba5691333a3%2Fdee0a4f7%2A~hmac=72a9ca739cf2b8fb42400cb129880d742817a2b94943b2e831cb484e28b28878&r=dXMtY2VudHJhbDE%3D",
      img:
        "https://a.storyblok.com/f/133769/2400x2990/61c001bac1/columbia-pictures-hero.jpg/m/2400x2990/filters:quality(80)",
    },
    {
      Heading: "Rino & Pelle",
      subHeading: "Effortless chic lifestyle",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      img: "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      Heading: " Aebele Interiors",
      subHeading: " Luxurious design experience",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
      img: "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      Heading: "Pixelflakes",
      subHeading: "Architectural marketing agency",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
      img: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)",
    },
  ]);

  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto py-20 px-5 sm:px-10">
        <div className="features flex gap-3 items-center">
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
          <h3 className="capitalize">Featured Projects</h3>
        </div>
        <h1 className="text-6xl my-5 sm:text-[13rem] sm:leading-none sm:tracking-tight my-5 overflow-hidden">
          {" "}
          <motion.span
            initial={{ rotate: 90, y: "100%", opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
            className="inline-block origine-left "
          >
            Work
          </motion.span>
        </h1>
        <p className="leading-2 text-md">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems sm:flex sm:flex-wrap sm:gap-2 ">
          {elem.map((c, i) => {
            return (
              <div className="elem w-full sm:w-[48%] mt-10" key={i}>
                <div className="video w-full h-[104vw] sm:h-[80vh] relative overflow-hidden mb-3">
                  <motion.img
                    initial={{opacity: 1 
                    }}
                    whileHover={{opacity:0}}
                    data-scroll
                    data-scroll-speed="-.5"
                    className="hidden sm:absolute sm:z-[2] sm:top-0 sm:left-0 sm:block object-cover w-full h-full"
                    src={c.img}
                    alt=""
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full block sm:z-[1]  scale-[1.3] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
                    src={c.video}
                  ></video>
                </div>
                <div className="mb-7">
                  <h3 className="font-semibold">{c.Heading}</h3>
                  <p className="capitalize opacity-40">{c.subHeading}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
