import React from 'react'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/Krishnasah206" target='blank'>
            <BsGithub />
          </a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/krishnasah2060/" target='blank'>
            <BsLinkedin />
          </a>
        </div>
        <div>
        <a href="https://www.instagram.com/_k.ri.s.h.n.a_/" target='blank'>
            <BsInstagram />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia