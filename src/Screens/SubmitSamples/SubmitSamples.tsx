import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SubmitSamples.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faExclamation } from '@fortawesome/free-solid-svg-icons';
import Input from '../../Components/Input/Input';
import DropDown from '../../Components/DropDownInput/DropDownInput';
import * as constants from '../../utils/constants';

export default function SubmitSamples() {
  
  const [selectedOption, setSelectedOption] = useState<string>('Select Options');

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
  };

  const { t } = useTranslation();
  return (
    <div className='chbi-submit-samples-form-container'>
      <div className='chbi-submit-header-container'>
        <h1 className='chbi-submit-header'>{t('submitScreen.submitHeader')}</h1>
      </div>
      <div className='chbi-submit-instructions-container'>
        <ol className='chbi-submit-instructions'>
          <li>{t('submitScreen.instructions.first')}</li>
          <li>{t('submitScreen.instructions.second')}</li>
          <li>{t('submitScreen.instructions.third')}</li>
          <li>{t('submitScreen.instructions.fourth')}</li>
        </ol>
        <div className='chbi-submit-warning-label'>
          <h2>{t('submitScreen.instructions.warning')}</h2>
        </div>
        <div className='chbi-submit-form'>
          <div className='chbi-submit-form-column1'>
            <Input type="text" label='Sample Name' placeholder='test placeholder' name='test input' />
            <DropDown
        label="Select Sample Type"
        options={constants.sampleType}
        value={selectedOption}
        onChange={handleSelectChange}
      />
          </div>
          <div className='chbi-submit-form-column2'>
            <Input type="text" label='Chemist Name' placeholder='test placeholder' name='test input' />
            <DropDown
        label="Select test"
        options={constants.sampleTests}
        value={selectedOption}
        onChange={handleSelectChange}
      />
          </div>
        </div>
      </div>
    </div>
  )
}