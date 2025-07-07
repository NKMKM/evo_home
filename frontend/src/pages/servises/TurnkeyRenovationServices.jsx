import React from 'react'
import { Link } from 'react-router-dom'

const TurnkeyRenovationServices = () => {
  return (
    <ul className='text-3xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <Link to={'/turnkey_renovation/designer_renovation'} className='hover:text-[#F9B33B] transition duration-200'>Дизайнерский ремонт</Link>
        <Link to={'/turnkey_renovation/exclusive_renovation'} className='hover:text-[#F9B33B] transition duration-200'>Эксклюзивный ремонт</Link>
        <Link to={'/turnkey_renovation/studio'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт квартир-студий</Link>
        <Link to={'/turnkey_renovation/tworoom_apartments'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт двухкомнатных квартир</Link>
        <Link to={'/turnkey_renovation/threeroom_apartments'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт трехкомнатных квартир</Link>
        <Link to={'/turnkey_renovation/fourroom_apartments'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт четырехкомнатных квартир</Link>
        <Link to={'/turnkey_renovation/twostory_apartments'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт двухэтажных квартир</Link>
    </ul>
  )
}

export default TurnkeyRenovationServices