import React from 'react'
import { experience } from '../assets/assets'
import SummaryCard from './SummaryCard'

const Experience = () => {
  return (
    <div className='bg-gray-800 p-6 overflow-hidden'>
        <p className='text-4xl text-gray-300 mb-10'>Experience Summary</p>
        {experience.map((exp,index)=><SummaryCard direction={index%2==0?'-50vw':'50vw'} Title={exp.title} Company={exp.company} Summary={exp.summary} key={index}/>)}
    </div>
  )
}

export default Experience