import React from 'react'

import {ReactComponent as FacebookIcon} from '../Assets/facebook.svg'
import {ReactComponent as GithubIcon} from '../Assets//github.svg'
import {ReactComponent as InstagramIcon} from '../Assets/instagram.svg'
import {ReactComponent as TwitterIcon} from '../Assets/twitter.svg'
import './footer.css'


 const Footer = () => {
  return (
    <div  className='redes'>
 <a href='https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr' >
    <button>
    <FacebookIcon className='facebook-icon' />
         facebook
    </button>

  </a>
  <a href='https://twitter.com/?lang=es' >
    <button>
    <TwitterIcon className='twitter-icon' />
        twitter
    </button>
  </a>

  <a href='https://github.com/IvanAristi' >
    <button>
    <GithubIcon className='github-icon' />
        github
    </button>
  </a>

  <a href='https://www.instagram.com/' >
    <button>
    <InstagramIcon className='instagram-icon' />
        Instagram
    </button>
  </a>



    </div>
  )
}

export {Footer}


