import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { web } from "../assets"
import { projects } from "../constants";
import { SectionWrapper } from '../HOC';
import { fadeIn, textVariant } from "../utls/motion";
import './Swiper.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const ProjectCard = ({ isMobile, name, description, tags, image, source_code_link, github_link }) => {
  return (
    <div className='proj-card'>
    <div className='projimage'>
      <img src={image} alt='lexflix picture'></img>
    </div>
    <div className='proj-descr'>
      <div className='mt-6'>
        <h3 className={`text-white font-bold ${isMobile ? 'text-[25px]' : 'text-[30px]' }`}>{name}</h3>
        <p className={`mt-2 text-secondary ${isMobile ? 'text-[11px]' : 'text-[15px]'}`}>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2 justify-center'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`${isMobile ? 'text-[9px]' : 'text-[14px]'} ${tag.color}`}
          >
            ⚬ {tag.name} 
          </p>
        ))}
      </div>

      <div className='flex w-full justify-end mt-7'>
      <div
        onClick={() => window.open(github_link, "_blank")}
        className={` ${isMobile ? 'w-8 h-8' : 'w-10 h-10' } mr-4 rounded-full flex justify-center items-center cursor-pointer`}
      >
        <img
          src={github}
          alt='source code'
          className='w-full h-full object-contain'
        />
      </div>
      <div
        onClick={() => window.open(source_code_link, "_blank")}
        className={` ${isMobile ? 'w-8 h-8' : 'w-10 h-10' } mr-4 rounded-full flex justify-center items-center cursor-pointer`}
      >
        <img
          src={web}
          alt='live site'
          className='w-full h-full object-contain'
        />
      </div>
      </div>
    </div>
  </div>
  )
}


const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 mb-8 text-secondary text-[16px] max-w-2xl leading-[25px]'
        >
          Welcome to my professional portfolio showcasing my expertise in full stack development. Each project featured here demonstrates the seamless integration of front-end and back-end technologies, highlighting my ability to create captivating web applications. Explore live sites and accompanying GitHub repositories to see my skills and experience firsthand.
        </motion.p>
      </div>
      {/* swiper */}
      <div className={`swiper-container ${isMobile && 'h-80'}`}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ 
            clickable: true,
          }}
          navigation={isMobile ? false : true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={`project-${index}`}>
                <ProjectCard key={`project-${index}`} {...proj} isMobile={isMobile} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");
