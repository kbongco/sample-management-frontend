import React, {useState} from 'react';
import './Login.css'
// import 'LoginTypes'
import LoginTypes from '../../interfaces/login-interface';

export default function Login() {

  const [isScientist, setIsScientist] = useState<LoginTypes | undefined>();
  const [isTechnician, setIsTechnician] = useState<LoginTypes | undefined>();

  const login = () => {
    console.log('yes');
  }
  
  return (
    <div className='chbi-login-form'>
      <div className='chbi-login-form-container'>
        <div className='chbi-information'>
          <div className='chbi-login-tabs'>
            <div className='chbi-tab-link'>
              <a href=''>Scientist</a>
            </div>
            <div className='chbi-tab-link'>
              Lab Technician
            </div>
          </div>
        </div>
        <div className='chbi-login-inputs'>
          <div className='chbi-login-input-text'>
            <div className='chbi-input-container'>
              <div className='chbi-input-text'>
                Email
              </div>
              <input/>
            </div> 
          </div>
          <div className='chbi-login-input-text'>
            <div className='chbi-input-container'>
            <div className='chbi-input-text'>
                Password
              </div>
              <input/>
            </div> 
          </div>

          <div className='chbi-login-button-container'>
            <div className='chbi-login-button'>
            <button className='chbi-login-submit-button' onClick={login}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}