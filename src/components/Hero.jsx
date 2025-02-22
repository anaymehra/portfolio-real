import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Anay</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>Hi, I'm Anay Mehra. <br className='sm:block hidden'/> A passionate Full Stack Developer based in New Delhi, India.</p>
          </div>
       
      </div>
      <ComputersCanvas />
      
    </section>
  )
}

export default Hero