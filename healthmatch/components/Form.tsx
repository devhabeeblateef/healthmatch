import React from 'react'

type Props = {}

function Form({}: Props) {
  return (
    <div className='text-[#2b2b2b] md:h-[96vh] w-screen lg:w-[55%] md:w-[60%] h-screen'>
    <h1 className='p-10 text-[30px] font-bold pb-0'>Paperworks</h1>
    <p className='p-10 pt-2 text-base text-gray-500'>
        Groom Form (this should be filled carefully by the groom)</p>

    <form className='px-10'>
        <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>Are you the Groom?</h4>
          <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Yes</option>
                <option>No</option>
            </select>
        </div>        
        </menu>
        <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>Email</h4>
          <input type="email" className='focus:outline-[#4d4dff67] w-96 h-8 pl-4 rounded-[10px] border border-gray-300' name="email"/>
        </menu>

        <menu>
          <h4 className='text-gray-400 mb-2 mt-6'>Select Genotype</h4>
          <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select Genotype</option>
                <option>AA</option>
                <option>AS</option>
                <option>SS</option>
                <option>AC</option>
                <option>SC</option>
                <option>CC</option>
            </select>
        </div>  
        </menu>

      <menu>
      <h4 className='text-gray-400 mb-2 mt-6'>Select Genotype</h4>
      <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select Blood Group</option>
                <option>AB</option>
                <option>A</option>
                <option>B</option>
                <option>O+</option>
                <option>O-</option>
            </select>
        </div>  
      </menu>
        
        <button type="submit" className='bg-[#4D4DFF] rounded-[10px] py-2 px-[8px] w-48 mt-6 text-white'>
          Create Account
        </button>
    </form>
    </div>
  )
}

export default Form