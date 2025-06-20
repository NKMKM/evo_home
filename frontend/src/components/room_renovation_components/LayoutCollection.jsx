import React from 'react'
import Projects from './Projects'
import FiveReasons from '../FiveReasons'
import Calculator from '../mainpage_components/Calculator'
import Reasons from '../Reasons'

const LayoutCollection = () => {
  return (
    <div className='flex flex-col'>
        <FiveReasons/>
        <Calculator/>
        <Reasons/>
        <Projects/>
    </div>
  )
}

export default LayoutCollection