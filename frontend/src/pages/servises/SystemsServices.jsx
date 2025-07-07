import React from 'react'
import { Link } from 'react-router-dom'

const SystemsServices = () => {
  return (
    <ul className='text-3xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <Link to={'/systems/electrical_system'} className='hover:text-[#F9B33B] transition duration-200'>Электрическая система</Link>
        <Link to={'/systems/gas_system'} className='hover:text-[#F9B33B] transition duration-200'>Газовая система</Link>
        <Link to={'/systems/floor_heating'} className='hover:text-[#F9B33B] transition duration-200'>Подогрев пола</Link>
        <Link to={'/systems/sewage'} className='hover:text-[#F9B33B] transition duration-200'>Система дренажа и канализации</Link>
        <Link to={'/systems/climate_control'} className='hover:text-[#F9B33B] transition duration-200'>Кондиционирования и климат контроль</Link>
    </ul>
  )
}

export default SystemsServices