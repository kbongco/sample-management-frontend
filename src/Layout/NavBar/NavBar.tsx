import React from 'react';
import './NavBar.css';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blank from '../../assets/blank-user.png'

export default function NavBar() {
  return (
    <div className='chbi-navbar-container'>
      <div className='chbi-navbar-settings-icon-container'>
      <FontAwesomeIcon className='chbi-gear-icon' icon={faGear} />
      </div>
      <div className='chbi-navbar-user-photo-container'>
        <div className='chbi-navbar-user-photo'>
          <img className='chbi-navbar-blank-user' src={blank}/>
        </div>
        <div className='chbi-navbar-links-container'>
          <div className='chbi-navbar-links'>
            <a href='/' className='chbi-navbar-links-000'>Home</a>
            <a href='/submit-samples' className='chbi-navbar-links-000'>Submit Samples</a>
            <a href='/view-samples' className='chbi-navbar-links-000'>View Samples</a>
            <a href='/view-team-samples' className='chbi-navbar-links-000'>View Teams Samples</a>
          </div>
        </div>
      </div>
    </div>
  )
}