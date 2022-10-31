import React from 'react'
import Review from './Review'

type Props = {}

function Home({}: Props) {
  return (
    <div className='h-screen md:h-[96vh] md:rounded-[10px] w-screen lg:w-[35%] md:w-[40%] bg-[#4D4DFF] snap-start snap-mandatory'>
        <h3 className='text-white uppercase tracking-widest p-10 font-thin'>Health Match</h3>

    <h1 className='text-white w-38 p-10 pb-0 mt-10 text-[5ch]'>
        Start your journey with us.</h1>
        <p className='text-white font-thin font-sans p-10 pt-4'>
            Discover the world's best community of freelancers and business owners.</p>
{/* 
    <article className='w-full h-52 overflow-x-scroll overflow-y-hidden
    snap-x scroll-smooth snap-mandatory scrollbar scrollbar-thumb-[#2121a9] scrollbar-track-[#4D4DFF] flex p-10 pt-0 -mt-10'>
        
        <Review/>
        <Review/>
        <Review/>
        <Review/>
    </article> */}
    
    </div>
  )
}

export default Home