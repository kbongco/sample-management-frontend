import React from 'react';
import { useTranslation } from 'react-i18next';
import './SubmitSamples.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faExclamation } from '@fortawesome/free-solid-svg-icons';
import Input from '../../Components/Input/Input';

export default function SubmitSamples() {
  const { t } = useTranslation();
  return (
    <div className='chbi-submit-samples-form-container'>
      <div className='chbi-submit-header-container'>
        <h1 className='chbi-submit-header'>Submit Samples</h1>
      </div>
      <div className='chbi-submit-instructions-container'>
        <ol className='chbi-submit-instructions'>
          <li>Please provide a paper copy to the lab, as well as an uploaded version of your samples paperwork. This is to ensure that we have a record that you submitted samples for testing</li>
          <li>Please provide any special instructions for testing below</li>
          <li>Once we have recieved everything, you will recieve an email notifying you that we have it on record and testing will begin as scheduled</li>
          <li>Any issues please contact the lab, and we will get back to you ASAP</li>
        </ol>
        <div className='chbi-submit-warning-label'>
          <h2>Any missing samples or missing information will cause a delay in processing</h2>
        </div>
        <div className='chbi-submit-form'>
          <div className='chbi-submit-form-column1'>
            <Input type="text" label='Sample Name' placeholder='test placeholder' name='test input' />
          </div>
          <div className='chbi-submit-form-column2'>
          <Input type="text" label='Chemist Name' placeholder='test placeholder' name='test input' />
          </div>
        </div>
      </div>
    </div>
  )
}