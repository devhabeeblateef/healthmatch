import React, {useState, useEffect} from 'react'

import {groomDetails} from './groomForm'
import {brideDetails} from './brideForm'
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import {Bar} from 'react-chartjs-2'
import {Line} from 'react-chartjs-2'
import {motion} from 'framer-motion'
import { match } from 'assert';

Chart.register(CategoryScale);

type Props = {} 

function Results({}: Props) {
  var groomArray: any[] = [];
  var brideArray: any[] = [];
  var rhesusFactorGroom :any[] =[];
  var rhesusFactorBride :any[] =[];
  var AAPercentage = 0;
  var ASPercentage = 0;
  var SSPercentage = 0;

  var genotypeResult: (string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined)[] = [];
  var rhesusResult: (string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined)[] = [];
  // Saving form details as Array
  groomArray = Object.values(groomDetails);
  brideArray = Object.values(brideDetails);

  // Results
  const genotypeAssessment = () => {
    if (groomArray[0].Groom_Genotype == "AA" && brideArray[0].Bride_Genotype == "AA"){
      genotypeResult.push("Excellent Compatibility");
      AAPercentage = 100;
      SSPercentage = 0;
      ASPercentage = 0;
    }
    else if (groomArray[0].Groom_Genotype == "AA" && brideArray[0].Bride_Genotype == "AS" ){
      genotypeResult.push("Good Compatibility");
      AAPercentage = 75;
      ASPercentage = 25;
      SSPercentage = 0;
    }
    else if (groomArray[0].Groom_Genotype == "AA" && brideArray[0].Bride_Genotype == "SS"){
      genotypeResult.push("Fair Compatibility");
      AAPercentage = 0;
      ASPercentage = 100;
      SSPercentage = 0;
    }
    else if (groomArray[0].Groom_Genotype == "AS" && brideArray[0].Bride_Genotype == "SS") {
      genotypeResult.push("Poor Compatibility");
      AAPercentage = 0;
      ASPercentage = 25;
      SSPercentage = 75;
    }
    else if (groomArray[0].Groom_Genotype == "AS" && brideArray[0].Bride_Genotype == "AS") {
      genotypeResult.push("Poor Compatibility");
      AAPercentage = 25;
      ASPercentage = 50;  
      SSPercentage = 25;
    }
    else if (groomArray[0].Groom_Genotype == "SS" && brideArray[0].Bride_Genotype == "SS"){
      genotypeResult.push("Very Poor Compatibility");
      AAPercentage = 0;
      ASPercentage = 0;
      SSPercentage = 100;
    }
    else{
      genotypeResult.push("Not Specified");
    }
  }

  const rhesusFactorAssessmentResult = () => {
    if (groomArray[0].Groom_RhesusFactor == brideArray[0].BrideRhesusFactor){
      rhesusResult.push("Incompatible - Seek Medical Counsel to prevent complications like miscarriage");
    }
    else{
      rhesusResult.push("Compatible")
    }
  }

    rhesusFactorAssessmentResult()
  genotypeAssessment();
  const [userData, setUserData] = useState({
    labels:["AA", "AS", "SS"] ,
    datasets: [{
      label: "Children from Marriage [Genotypes] | Probability Percentage", 
      backgroundColor: "	hsl(240, 100%, 65%)",
      borderColor: "hsl(252, 82.9%, 67.8%)",
      data: [AAPercentage, ASPercentage, SSPercentage],

    }]
  })

  return (
    <div className=''>
      <h1 className='text-[30px] px-10 pt-10'>Test Results</h1>
      <div className='w-[80%] ml-12 p-2 bg-gray-100 text-[#2b2b2b] border'>
        <p className="px-2 text-sm">Showing Results for</p>
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
          <div className="inside-circle"> </div>
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
      <h4 className='text-lg text-blue-500'>Genotype Compatibility: {genotypeResult[0]}</h4>  
      <h4 className='text-lg text-blue-500'>Rhesus Compatibility: {rhesusResult[0]}</h4>  
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
              </div>
            )  
          }

export default Results