import React, {useState} from 'react'

export let brideDetails:any = []
type Props = {
    onClick ?: (params: any) => any;
}

function Form({onClick}: Props) {
  // Setting States
  const [everGivenBirth, setEverGivenBirth] = useState("");
  const [historyOfMiscarriage, setHistoryOfMiscarriage] = useState("");
  const [attendedAntenatalClinic, setAttendedAntenatalClinic] = useState("");
  const [brideName, setBrideName] = useState("");
  const [brideMail, setBrideMail] = useState("");
  const [brideAge, setBrideAge] = useState("");
  const [brideGenotype, setBrideGenotype] = useState("");
  const [timesOfBirth, setTimesOfBirth] = useState("");
  const [visitsToAntenatal, setVisitsToAntenatal] = useState("");
  const [brideBloodGroup, setBrideBloodGroup] = useState("");
  const [brideRhesusFactor, setBrideRhesusFactor] = useState("");

  // Form Methods
  const selectGenotype = (e: any) => {
    setBrideGenotype(e.target.value)
  }


   //Saving Bride Details
   brideDetails = [
    {
     Bride_Name: brideName,
     Bride_Age: brideAge,
     Bride_Email: brideBloodGroup,
     Bride_Genotype: brideGenotype,
     Bride_BloodGroup: brideBloodGroup,
     Bride_Rhesus: brideRhesusFactor,
     Bride_BirthStatus: everGivenBirth,
     Bride_NoOfBirth: timesOfBirth,
     Bride_MiscarriageStatus: historyOfMiscarriage,
     Bride_AntenatalStatus: attendedAntenatalClinic,
     Bride_NoOfAntenatal: visitsToAntenatal,
     key: 0
  }];
    
  return (
    
    <div className='text-[#2b2b2b] md:h-[96vh] w-screen lg:w-[55%] md:w-[60%] h-screen'>
    <h1 className='p-10 text-[30px] font-bold pb-0'>Paperworks</h1>
    <p className='p-10 pt-2 text-base text-gray-500'>
        Bride Form (this should be filled carefully by the Bride)</p>

    <form className='px-10'>
        <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>Name</h4>
          <input value={brideName}  placeholder="This is an optional field" onChange={(e) => setBrideName(e.target.value) } type="email" className='relative lg:max-w-sm w-96 p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600' name="email" required/>
        </menu>

        <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>Age</h4>
          <input value={brideAge}  placeholder="This information is needed for our analysis" onChange={(e) => setBrideAge(e.target.value) } type="email" className='relative lg:max-w-sm w-96 p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600' name="email" required/>
        </menu>
        <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>Email</h4>
          <input value={brideMail} placeholder="This is an optional field" onChange={(e) => setBrideMail(e.target.value) } type="email" className='relative lg:max-w-sm w-96 p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600' name="email" required/>
        </menu>

        <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>Select Genotype</h4>
          <div className="relative w-full lg:max-w-sm">
            <select value={brideGenotype} onChange={selectGenotype} className="w-full p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600" required>
                <option value="">Click to choose one</option>
                <option value="AA">AA</option>
                <option value="AS">AS</option>
                <option value="SS">SS</option>
                <option value="AC">AC</option>
                <option value="SC">SC</option>
                <option value="CC">CC</option>
            </select>
        </div>  
        </menu>

      <menu>
      <h4 className='text-gray-400 mb-2 mt-6'>Select Blood Group</h4>
      <div className="relative w-full lg:max-w-sm">
            <select value={brideBloodGroup} onChange={(e) => setBrideBloodGroup(e.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600" required>
                <option>Click to choose one</option>
                <option value="AB">AB</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
        </div>  
      </menu>

      <menu>
      <h4 className='text-gray-400 mb-2 mt-6'>Select Rhesus Factor</h4>
      <div className="relative w-full lg:max-w-sm">
            <select value={brideRhesusFactor} onChange={(e) => setBrideRhesusFactor(e.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600" required>
                <option>Click to choose one</option>
                <option value="AB">+</option>
                <option value="A">-</option>
            </select>
        </div>  
      </menu>

      <menu>
      <h4 className='text-gray-400 mb-2 mt-6'>Ever Given Birth</h4>
      <div className="relative w-full lg:max-w-sm">
            <select value={everGivenBirth} onChange={(e) => setEverGivenBirth(e.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600" required>
                <option>Click to choose one</option>
                <option value="AB">Yes</option>
                <option value="A">No</option>
            </select>
        </div>  
      </menu>

      <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>If yes, how many times?(1-8)</h4>
          <input value={timesOfBirth} placeholder="This is an optional field" onChange={(e) => setTimesOfBirth(e.target.value) } type="number" className='relative lg:max-w-sm w-96 p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600' name="email" required/>
        </menu>

        <menu>
      <h4 className='text-gray-400 mb-2 mt-6'>Any history of miscarriage or abortion?</h4>
      <div className="relative w-full lg:max-w-sm">
            <select value={historyOfMiscarriage}  onChange={(e) => setHistoryOfMiscarriage(e.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600" required>
                <option>This field is needed for our analysis</option>
                <option value="AB">Yes</option>
                <option value="A">No</option>
            </select>
        </div>  
      </menu>

      <menu>
      <h4 className='text-gray-400 mb-2 mt-6'>Have you ever attended an Antenatal clinic?</h4>
      <div className="relative w-full lg:max-w-sm">
            <select value={attendedAntenatalClinic} onChange={(e) => setAttendedAntenatalClinic(e.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600" required>
                <option>Click to choose one</option>
                <option value="AB">Yes</option>
                <option value="A">No</option>
            </select>
        </div>  
      </menu>

      <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>If yes, how many visits?(1-8)</h4>
          <input value={visitsToAntenatal} placeholder="This is an optional field" onChange={(e) => setVisitsToAntenatal(e.target.value) } type="number" className='relative lg:max-w-sm w-96 p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600' name="email" required/>
        </menu>
        
        <button onClick={onClick} type="submit" className='bg-[#4D4DFF] rounded-[10px] py-2 px-[8px] w-48 mt-6 text-white'>
          Continue
        </button>
    </form>
    </div>
  )
}

export default Form