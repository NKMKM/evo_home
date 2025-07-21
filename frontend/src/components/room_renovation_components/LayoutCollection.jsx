import React from 'react'
import Guarantees from '../mainpage_components/Guarantees'
import Projects from './Projects'
import Calculator from '../mainpage_components/Calculator'
import Reasons from '../Reasons'

const LayoutCollection = () => {
  return (
    <div className='flex flex-col'>
        <Guarantees/>
        <Calculator/>
        <Reasons/>
        <Projects/>
    </div>
  )
}

export default LayoutCollection
//made