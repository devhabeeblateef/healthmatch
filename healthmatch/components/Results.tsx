import React, {useState} from 'react'
import {groomDetails} from './groomForm'
import {brideDetails} from './brideForm'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import {Bar} from 'react-chartjs-2'
import {Line} from 'react-chartjs-2'
import {motion} from 'framer-motion'

Chart.register(CategoryScale);
type Props = {} 


function Results({}: Props) {
  const [userData, setUserData] = useState({
    labels:["AA", "AS", "SS", "AC", "SC", "CC"] ,
    datasets: [{
      label: "Children from Marriage [Genotypes] | Probability Percentage", 
      backgroundColor: "	hsl(240, 100%, 65%)",
      borderColor: "hsl(252, 82.9%, 67.8%)",
      data: [10, 30, 20, 80, 70, 200],

    }]
  })

  return (
    <div className=''>
      <h1 className='text-[30px] px-10 pt-10'>Test Results</h1>
      <div className='w-[80%] ml-12 p-2 bg-gray-100 text-[#2b2b2b] border'>
        <p className="px-2 text-sm">Showing Results for</p>
        {groomDetails.map((groom: any) => {
          return brideDetails.map((bride :any, ) => {
            return <p key={groom.key} className='mx-2 text-lg text-[#4D4DFF] w-full'>
              {groom.Groom_Name} & {bride.Bride_Name} </p>
          })
        })}
      </div>

    <div className='w-[90%] snap-center snap-mandatory md:flex md:p-2'>
      <div className='ml-10 md:w-screen border p-4'>
        <p className='text-bold mb-4 font-bold'>Overall match percentage</p>
        
        {/* Raw HTML/CSS */}
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 2}}
        className="circle-wrap">
        <div className="circle">
          <div className="mask full ">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle"> 65% </div>
        </div>
      </motion.div>
    </div>
      <div className='md:w-screen  border ml-10 pt-10'>
        {/* BarChart */}
     <Bar data={userData} options={{animations: {
      tension: {
        duration: 2000,
        easing: 'easeOutQuart',
        from: 0,
        to: 1,
      }
     }}}/>
     <div>
     </div>
      </div>
    </div>
    <div className='px-12 py-2 lg:flex'>
      <div className='w-[90%] my-10 text-sm p-2'>
      <h1>Result Analysis</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At iure error neque optio adipisci labore nulla soluta non laborum quis dolore a velit consequatur aut praesentium, eligendi animi unde nemo!</p>
      </div>
      <div className='w-[90%]'>
        <Line data={userData} options={{animations: {
          tension: {
            duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
          }},
          scales: {
             y: {
              min: 0,
              max: 100
             }
          }}} />
      </div>
    </div>
    </div>
  )
}

export default Results