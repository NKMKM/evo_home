import React from 'react'
import FiveReasons from '../FiveReasons'
import Guarantees from '../mainpage_components/Guarantees'
import Calculator from '../mainpage_components/Calculator'
import Reasons from '../Reasons'
import CommercialPremisesProjects from '../commercial_premises_components/CommercialPremisesProjects'

const SystemLayoutCollection = () => {
  return (
    <>
      <Guarantees/>
      <Calculator/>
      <Reasons/>
      <CommercialPremisesProjects/>
    </>
  )
}

export default SystemLayoutCollection
// made