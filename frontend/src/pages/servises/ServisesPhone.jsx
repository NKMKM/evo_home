import React from 'react'
import { Link } from 'react-router-dom'

const ServisesPhone = () => {
  return (
    <ul className='font-bold text-4xl  h-[670px] flex flex-col justify-around my-32 px-10 '>
        <Link to={'/services/turnkey_renovation'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">РЕМОНТ КВАРТИР ПОД КЛЮЧ</span> </Link>
        <Link to={'/services/room_renovation'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">РЕМОНТ КОМНАТ</span> </Link>
        <Link to={'/services/commercial_premises'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">РЕНОВАЦИЯ КОММЕРЧЕСКИХ ПОМЕЩЕНИЙ</span> </Link>
        <Link to={'/services/systems'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">СИСТЕМЫ</span> </Link>
    </ul>
  )
}

export default ServisesPhone