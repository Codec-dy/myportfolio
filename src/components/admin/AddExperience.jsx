import React, { useContext, useState } from 'react'
import Button from '../Button'
import axios from 'axios';
import { toast } from 'react-toastify';
import { handleAdd } from '../Utils/crud';
import { PortfolioContext } from '../../context/portfolioContext';

const AddExperience = ({cancel}) => {
    const [experience, setExperience] = useState({title:'', company: '', location: '', date: '', description: ''});
    const {setRefresh,refresh} = useContext(PortfolioContext);
     
    return (
        <div className='flex flex-col gap-4 p-4 border border-gray-300 rounded-md'>
            <h1>Add a new Experience</h1>
            <input placeholder='Title'  onChange={(e)=>setExperience({...experience,title:e.target.value})} type='text' value={experience.title} className='p-3 rounded-sm border border-gray-400' />
            <div className='flex flex-col sm:flex row gap-2'><input onChange={(e)=>setExperience({...experience,company:e.target.value})} className='flex-1 p-3 rounded-sm border border-gray-400' type='text' value={experience.company}  placeholder='Company'/>
            <input onChange={(e)=>setExperience({...experience,location:e.target.value})} className='flex-1 p-3 rounded-sm border border-gray-400' type='text' value={experience.location}  placeholder='Location'/></div>
            <input onChange={(e)=>setExperience({...experience,date:e.target.value})} className='flex-1 p-3 rounded-sm border border-gray-400' type='text' value={experience.date}  placeholder='Date'/>
            <input onChange={(e)=>setExperience({...experience,description:e.target.value})} className='flex-1 p-3 rounded-sm border border-gray-400' type='text' value={experience.description}  placeholder='Description'/>
            <div onClick={()=>{handleAdd('?model=experience',experience),cancel(false),setRefresh('add')}}><Button text={'Add Experience'}/></div> <span onClick={()=>{cancel(false)}}><Button text={"Cancel"}/> </span>
        </div>
    )
}

export default AddExperience