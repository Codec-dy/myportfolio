import React, { useContext, useState } from 'react'
import ProjectCard from './ProjectCard';
import { certificates, graphicDesignImages } from '../assets/assets';
import { PortfolioContext } from '../context/portfolioContext';
import CertificateCard from './CertificateCard';

const ViewGallery = ({projectChunks,type}) => {
  
    const [middle, setMiddle] = useState(false);
  const{ chunkProjects,setDisplayImg} = useContext(PortfolioContext);
    const imgChunks = chunkProjects(graphicDesignImages, Math.ceil(graphicDesignImages.length/3));
    const certChunks = chunkProjects(certificates, Math.ceil(certificates.length/3));
    let chunks = type === 'project' ? projectChunks : imgChunks;
    chunks = type==='cert'?certChunks:chunks
  return (
    <div className='flex flex-wrap gap-1 max-w-[1200px] mx-auto'>
    {chunks.map((chunk, index) => {
      const isFirstMiddle = index === 1 && !middle;
      if (isFirstMiddle) {
        setMiddle(true);  
      }
    return (
      <div key={index} className='flex flex-[50%] sm:flex-[30%] flex-col justify-start h-fit'>
        {chunk.map((project,i) => {
        if(type==='project'){
          
            return <ProjectCard key={project.id} link={project.link?project.link:''} index={middle && i===0?index:''} id={project.id} title={project.title} description={project.description} img={project.img}/>
        }else if(type==='cert'){
          console.log(chunks)

         return (<CertificateCard key={project.id} txt={'Completed a Udemy Course on Portfolios'} id={project.id} link={project.link} title={project.title} img={project.img} date={project.date} institute={project.institution} />)
        }
        else{
            return (<img key={i} src={project} onClick={()=>setDisplayImg(project)} className='max-w-full'  />)
        }
        }) }
        
      </div>)
    }       )}
      
  </div>
  )
}

export default ViewGallery