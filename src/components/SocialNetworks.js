import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './SocialNetwork.js.css'
import { ReactComponent as LinkEmail } from '../Assets/email.svg';
const linkedin = 'https://www.linkedin.com/in/iv%C3%A1n-aristiz%C3%A1bal/'
 



 const SocialNetworks = () => {



const email ='ivancho13codigo@gmail.com'

  return (
    <div className='date'>
        <a href= {linkedin}  >
    <button>
    <FontAwesomeIcon className='linkedin-icon' icon={faLinkedin}/>
          Ir a LinkedIn
    </button>
  </a>

  <a href= {`"mailto:"}${email}`}>
 
    <button>
    <LinkEmail className='Email-icon'  />
       Ir a gmail
    </button>
  </a>

     </div>
   )
 }

export {SocialNetworks}
