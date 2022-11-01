import React from 'react'
import Review from './Review'
import {motion} from 'framer-motion'

type Props = {}

function Home({}: Props) {
  return (
    <motion.div
    initial={{x: -50, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{duration: 1}}
    className='h-screen md:h-[96vh] md:rounded-[10px] w-screen lg:w-[35%] md:w-[40%] bg-[#4D4DFF] snap-start snap-mandatory'>
        <h3 className='text-white uppercase tracking-widest p-10 font-thin'>Health Match</h3>

    <h1 className='text-white w-38 p-10 pb-0 mt-10 text-[5ch]'>
        Health comes first.</h1>
        <p className='text-white font-thin font-sans p-10 pt-4'>
            Match your partner healthwise too. Please attend to the paperworks.</p>
    
    </motion.div>
  )
}

export default Home