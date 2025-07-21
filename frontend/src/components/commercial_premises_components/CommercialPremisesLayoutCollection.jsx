import React from 'react'

import FiveReasons from '../FiveReasons'
import Guarantees from '../mainpage_components/Guarantees'
import Calculator from '../mainpage_components/Calculator'
import Reasons from '../Reasons'
import CommercialPremisesProjects from './CommercialPremisesProjects'

const CommercialPremisesLayoutCollection = () => {
  return (
    <div className='flex flex-col'>
        <Guarantees/>
        <Calculator/>
        <Reasons/>
        <CommercialPremisesProjects/>
    </div>
  )
}
//made
export default CommercialPremisesLayoutCollection