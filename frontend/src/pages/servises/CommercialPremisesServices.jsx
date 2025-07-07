import React from 'react'
import { Link } from 'react-router-dom'

const CommercialPremisesServices = () => {
  return (
    <ul className='text-3xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <Link to={'/commercial_premises/business_center'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт бизнес-центров</Link>
        <Link to={'/commercial_premises/restaurant'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт баров и ресторанов</Link>
        <Link to={'/commercial_premises/commercial_premises_renovation'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт коммерческих помещений</Link>
        <Link to={'/commercial_premises/office'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт офисов</Link>
        <Link to={'/commercial_premises/warehouse'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт складов</Link>
        <Link to={'/commercial_premises/fitness_club'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт фитнес-клубов</Link>
        <Link to={'/commercial_premises/hotel'} className='hover:text-[#F9B33B] transition duration-200'>Ремонт отелей</Link>
    </ul>
  )
}

export default CommercialPremisesServices