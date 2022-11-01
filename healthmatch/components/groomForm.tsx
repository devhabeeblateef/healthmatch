import React, {useState} from 'react'

export let groomDetails:any = []

type Props = {
    onClick ?: (params: any) => any;
}

function Form({onClick}: Props) {
  // Setting States
  const [isGroom, setIsGroom] = useState(true);
  const [groomName, setGroomName] = useState("");
  const [groomMail, setGroomMail] = useState("");
  const [groomGenotype, setGroomGenotype] = useState("");
  const [groomBloodGroup, setGroomBloodGroup] = useState("");

  // Form Methods
  const handleChange = () => {
    setIsGroom(!isGroom)
  }
  const selectGenotype = (e: any) => {
    setGroomGenotype(e.target.value)
  }

   //Saving Groom Details
   groomDetails = [{
      correctGender : isGroom,
      Groom_Email : groomMail,
      Groom_Genotype: groomGenotype,
      Groom_Blood_Group: groomBloodGroup,
      Groom_Name: groomName
   }]
  return (
    <div className='text-[#2b2b2b] md:h-[96vh] w-screen lg:w-[55%] md:w-[60%] h-screen'>
    <h1 className='p-10 text-[30px] font-bold pb-0'>Paperworks</h1>
    <p className='p-10 pt-2 text-base text-gray-500'>
        Groom Form (this should be filled carefully by the Groom)</p>

    <form  className='px-10'>
        <menu>
          <h4 className='text-gray-400 mb-2 mt-2'>Are you the Groom?</h4>
          <div className="relative w-full  lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600" onChange={handleChange} required>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>        
        </menu>
        <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>Name</h4>
          <input value={groomName} onChange={(e) => setGroomName(e.target.value) } type="text" className='relative lg:max-w-sm w-96 p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600' name="groomName" required/>
        </menu>

        <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>Email</h4>
          <input value={groomMail} onChange={(e) => setGroomMail(e.target.value) } type="email" className='relative lg:max-w-sm w-96 p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600' name="email" required/>
        </menu>

        <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>Select Genotype</h4>
          <div className="relative w-full lg:max-w-sm">
            <select value={groomGenotype} onChange={selectGenotype} className="w-full p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600" required>
                <option value=""></option>
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
            <select value={groomBloodGroup} onChange={(e) => setGroomBloodGroup(e.target.value)} className="w-full p-2.5 text-gray-500 bg-white border rounded-md 
            shadow-sm outline-none appearance-none focus:border-indigo-600" required>
                <option></option>
                <option value="AB">AB</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
        </div>  
      </menu>
        
        <button onClick={onClick} type="submit" className='bg-[#4D4DFF] rounded-[10px] py-2 px-[8px] w-48 mt-6 text-white'>
          Next
        </button>
    </form>
    </div>
  )
}

export default Form