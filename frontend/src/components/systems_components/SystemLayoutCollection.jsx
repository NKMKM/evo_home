import React from 'react'
import FiveReasons from '../FiveReasons'
import Calculator from '../mainpage_components/Calculator'
import Reasons from '../Reasons'
import SystemProjects from './SystemProjects'

const SystemLayoutCollection = () => {
  return (
    <div className='flex flex-col'>
        <FiveReasons/>
        <Calculator/>
        <Reasons/>
        <SystemProjects/>
    </div>
  )
}

export default SystemLayoutCollection