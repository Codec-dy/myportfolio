import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../../context/portfolioContext';
import { handleAdd } from '../Utils/crud';
import Button from '../Button';

const AddSkills = ({cancel}) => {
    const [skill,setSkill] = useState({description:''});
   const {setRefresh,refresh} = useContext(PortfolioContext);
       
      return (
          <div className='flex flex-col gap-4 p-4 border border-gray-300 rounded-md'>
              <h1>Add a new Experience</h1>
              <textarea placeholder='Description'  onChange={(e)=>setSkill({...skill,description:e.target.value})} type='text' value={skill.description} className='p-3 rounded-sm border border-gray-400' />
        
              <div onClick={()=>{handleAdd('http://localhost:3000/api/collection?model=skills',skill),cancel(false),setRefresh('add')}}><Button text={'Add Experience'}/></div> <span onClick={()=>{cancel(false)}}><Button text={"Cancel"}/> </span>
          </div>
      )
}

export default AddSkills