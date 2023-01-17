import React from 'react'
import '../stylesheets/Programs.css'
import onCampus from '../images/on-campus.jpg'
import onlineClasses from '../images/online-classes.jpg'
import summerClasses from '../images/summer-classes.jpg'
import { Link } from 'react-router-dom'

export default function Programs() {
  return (
    <div className='programs'>
      <h1>PROGRAMS</h1>
      <div className='programs-container'>
        <div className='program-content'>
          <img src={onCampus} alt="on-campus" />
          <h2>ON CAMPUS</h2>
          <div className='program-text'>
            <Link to="/register">
              <span>
                Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
                Cras semper auctor neque vitae tempus.
                Non consectetur a erat nam at lectus urna duis convallis.
                Non curabitur gravida arcu ac. Accumsan in nisl nisi scelerisque eu ultrices vitae.
                Gravida arcu ac tortor dignissim convallis aenean et tortor at.
              </span>
              <p>Register Now!</p>
            </Link>
          </div>
        </div>
        <div className='program-content'>
          <img src={onlineClasses} alt="online-classes" />
          <h2>ONLINE</h2>
          <div className='program-text'>
            <Link to="/register">
              <span>
                Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
                Cras semper auctor neque vitae tempus.
                Non consectetur a erat nam at lectus urna duis convallis.
                Non curabitur gravida arcu ac. Accumsan in nisl nisi scelerisque eu ultrices vitae.
                Gravida arcu ac tortor dignissim convallis aenean et tortor at.
              </span>
              <p>Register Now!</p>
            </Link>
          </div>
        </div>
        <div className='program-content'>
          <img src={summerClasses} alt="summer-classes" />
          <h2>SUMMER CLASSES</h2>
          <div className='program-text'>
            <Link to="/register">
              <span>
                Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
                Cras semper auctor neque vitae tempus.
                Non consectetur a erat nam at lectus urna duis convallis.
                Non curabitur gravida arcu ac. Accumsan in nisl nisi scelerisque eu ultrices vitae.
                Gravida arcu ac tortor dignissim convallis aenean et tortor at.
              </span>
              <p>Register Now!</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
