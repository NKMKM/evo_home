import React from 'react'
import { Link } from 'react-router-dom'

const RoomRenovationServices = () => {
  return (
    <ul className='text-3xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <Link to={'/room_renovation/living_room'}  className='hover:text-[#F9B33B] transition duration-200'>Ремонт гостинных</Link>
        <Link to={'/room_renovation/bedroom'}  className='hover:text-[#F9B33B] transition duration-200'>Ремонт спальных комнат</Link>
        <Link to={'/room_renovation/children_room'}  className='hover:text-[#F9B33B] transition duration-200'>Ремонт детских комнат</Link>
        <Link to={'/room_renovation/corridor'}  className='hover:text-[#F9B33B] transition duration-200'>Ремонт коридора</Link>
        <Link to={'/room_renovation/kitchen'}  className='hover:text-[#F9B33B] transition duration-200'>Ремонт кухни</Link>
        <Link to={'/room_renovation/bathroom'}  className='hover:text-[#F9B33B] transition duration-200'>Ремонт ванных комнат</Link>
        <Link to={'/room_renovation/stairs'}  className='hover:text-[#F9B33B] transition duration-200'>Ремонт лестниц</Link>
    </ul>
  )
}

export default RoomRenovationServices