import React from 'react'
import FiveReasons from '../FiveReasons'
import Calculator from '../mainpage_components/Calculator'
import Reasons from '../Reasons'
import CommercialPremisesProjects from './CommercialPremisesProjects'

const CommercialPremisesLayoutCollection = () => {
  return (
    <div className='flex flex-col'>
        <FiveReasons/>
        <Calculator/>
        <Reasons/>
        <CommercialPremisesProjects/>
    </div>
  )
}

export default CommercialPremisesLayoutCollection