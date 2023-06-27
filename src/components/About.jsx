import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
// import { services } from '../constants';
import { personalpic } from '../assets';
import { SectionWrapper } from '../HOC';
import { fadeIn, textVariant } from '../utls/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.div className='flex flex-wrap'>
        <motion.p
          //(direction, type, delay, duration)
          variants={fadeIn("", "", 0.1, 1)}
          className='text-[#bffeff] mt-4 text-[17px] max-w-3xl leading-[28px]'>

          From a young age, I was drawn to programming. It all started when I would play around with the HTML and CSS on my old Tumblr blog. After graduating from San Francisco State University, I decided that I wanted to dive deeper and focus on software engineering.
          <br />
          Enter Harvard CS50's course. It was a game-changer! I learned the fundamentals of coding languages and computer science, and I still remember the rush of writing my first lines of code and creating a fun Spongebob-themed game on Scratch. That experience sparked my desire to bring my ideas to life.
          <br />
          So, I enrolled in App Academy's intense 24-week software engineering program. I mastered JavaScript, Python, React/Redux, different backend frameworks, PostgreSQL, and more. I also built three full-stack websites, including a team project. Along the way, I became a pro at picking up new languages quickly by diving into documentation and adopting agile workflows.
          <br />
          Now, I'm filled with excitement to contribute my skills to an awesome software engineering opportunity. I thrive on challenges and love turning ideas into reality. Let's join teams and create something extraordinary together! 
          <br />
          <br />
          (ps: the graphics in this website are interactive)
        </motion.p>

        <Tilt className='xs:w-[250px] w-full ml-12 xs:ml-[80px] xs:mt-[25px]'>
          <motion.div
            className='w-full bg-gradient-to-b from-[#58bf6d] via-[#f09b2b] to-pink-500 p-[1px] rounded-[20px] shadow-card'
          >
            <img
              src={personalpic}
              alt='web-development'
              className='w-full object-cover rounded-[20px]'
            />
          </motion.div>
        </Tilt>

      </motion.div>

    </>
  )
}

export default SectionWrapper(About, "about");
