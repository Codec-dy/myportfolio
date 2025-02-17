import React, { useContext } from 'react'

import ViewGallery from '../components/viewGallery'

const Certificates = () => {
  
  

  return (
    <div>
      <ViewGallery type={'cert'}/>
        {/* {certificates.length?(certificates.map(certificate => <CertificateCard key={certificate.id} txt={'Completed a Udemy Course on Portfolios'} id={certificate.id} link={certificate.link} title={certificate.title} img={certificate.img} date={certificate.date} institute={certificate.institution} />)):"No certificates to show"} */}
    
    </div>
  )
}

export default Certificates