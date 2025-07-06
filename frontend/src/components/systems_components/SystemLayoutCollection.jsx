import React from 'react'
import FiveReasons from '../FiveReasons'
import Calculator from '../mainpage_components/Calculator'
import Reasons from '../Reasons'
import SystemProjects from './SystemProjects'

const SystemLayoutCollection = () => {
  return (
    <>
      <FiveReasons/>
      <Calculator/>
      <Reasons/>
      <SystemProjects/>    
    </>
  )
}

export default SystemLayoutCollection