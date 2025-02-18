import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { projects } from '../assets/assets'
import { PortfolioContext } from '../context/portfolioContext'
import ProPageTop from '../components/ProPageTop'
import Button from '../components/Button'

const ProjectPage = () => {
  const [project, setProject] = useState(null)
  const navigate = useNavigate()
  const { projectId} = useContext(PortfolioContext);
  const {id} = useParams()
  
  useEffect(() => {
    console.log(id);
    const proj = projects.find(proj => proj.id === parseInt(id));
    setProject(proj);
    console.log(proj);
  }, [id]);
  
  return id?(
    <div>
      <ProPageTop project={project}/>
       <div className='relative sm:max-w-[70%] w-full mx-auto mt-10'>
          {project?project.vid:'' && <video className='w-full h-[300px] object-cover' src={project?project.vid:''} controls></video>}
          {project && !project.vid?<img className='w-full h-[300px] object-cover blur-xs' src={project.img}/>:''}
          <Link target='_blank' to={project && project.projlink?project.projlink:''} ><div className='absolute bottom-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'><Button text={"Visit Project"} /></div></Link>
        </div>
    </div>
  ):"<div>Loading...</div>"
}

export default ProjectPage