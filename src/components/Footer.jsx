import React from 'react'
import '../stylesheets/Footer.css'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'

export default function Footer() {
  return (
    <footer>
      <div className='contact-container'>
        <div className='socials'>
          <span>Follow us</span>
          <p><BsInstagram /> <BsFacebook /> <BsTwitter /></p>
        </div>
        <div className='address'>
          <p>950X State Street</p>
          <p>San Diego, CA 9209X</p>
          <p>{'+1 (858) 534-2230'}</p>
        </div>
        <div className='copyright'>
          <p>English School</p>
          <p><BiCopyright /> 2023</p>
        </div>
      </div>
    </footer>
  )
}
