import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SubmitSamples.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import Input from '../../Components/Input/Input';
import DropDown from '../../Components/DropDownInput/DropDownInput';
import * as constants from '../../utils/constants';
import { useForm, Controller } from "react-hook-form";
import TextArea from '../../Components/TextArea/TextArea';
import CheckBox from '../../Components/CheckBox/CheckBox';
import Button from '../../Components/Button/Button';

type FormValues = {
  sampleName: string;
  sampleType?: any;
  totalSamples: string;
  uploadFile?: any;
  chemistName: string;
  selectedTest?: any;
  specialInstructions: string;

}

export default function SubmitSamples() {
  const { register, handleSubmit, control, formState: {
    errors, isDirty
  } } = useForm();
  // const {
  //   register,
  //   control,
  //   handleSubmit,
  //   watch,
  //   formState: { errors, isDirty }
  // } = useForm();


  const useSelectedState = (initialValue: string) => {
    const [selectedValue, setSelectedValue] = useState<string>(initialValue);

    const handleSelectChange = (value: string) => {
      setSelectedValue(value);
      console.log(value);
    };

    return [selectedValue, handleSelectChange] as const;
  };

  const [selectedOption, setSelectedOption] = useState<string>('Select Options');
  const [selectedTest, setSelectedTest] = useState<string>('Select Test')
  const [nameLength, setNameLength] = useState<number>(0)

  const onSubmit = (data: any) => {
    console.log(data);
    console.log('test');
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
        <form className='chbi-submit-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='chbi-submit-form-layout'>
            <div className='chbi-submit-form-column1'>
              <div className='chbi-input-1'>
                <Controller
                  name='sampleName'
                  control={control}
                  rules={{ minLength: 5, required: true }}
                  render={({ field }) => <Input label='Sample Name'
                    error={!!isDirty}
                    errorMessage={`${!!isDirty ? t('formMessages.requiredField') : ''}`}
                    {...register("sampleName", {
                    })}      {...field} />} />
              </div>
              <div className='chbi-input-2'>
                <Controller
                  name='sampleType'
                  control={control}
                  render={({ field }) => <DropDown
                    {...field}
                    label="Select Sample Type"
                    options={constants.sampleType}
                    value={selectedOption}
                    onChange={setSelectedOption}
                  />}
                />
              </div>
              <div className='chbi-input-3'>
                <Controller
                  name='totalSamples'
                  control={control}
                  rules={{ minLength: 1, required: true }}
                  render={({ field }) => <Input label='Number of Samples' {...field}
                    error={!!isDirty}
                    errorMessage={`${!!isDirty ? t('formMessages.requiredField') : ''}`} />} />
              </div>
              <div className='chbi-input-4'>
                <Controller
                  name='uploadfile'
                  control={control}
                  render={({ field }) => <Input label='Upload File' {...field} />} />
              </div>
            </div>
            <div className='chbi-submit-form-column2'>
              <div className='chbi-input-8'>
                <Controller name='chemistName'
                  control={control}
                  rules={{ minLength: 5, required: true }}
                  render={({ field }) => <Input
                    error={!!isDirty}
                    errorMessage={t('formMessages.requiredField')} label='Chemist Name' {...field} />} />
              </div>
              <div className='chbi-input-9'>
                <Controller
                  name='sampleType'
                  control={control}
                  render={({ field }) => <DropDown
                    label="Select test"
                    options={constants.sampleTests}
                    value={selectedTest}
                    onChange={setSelectedTest}
                  />}
                />
              </div>
              <div className='chbi-input-10'>
                <Controller
                  name='uploadfile'
                  control={control}
                  render={({ field }) => <CheckBox label={t('submitScreen.25C')} checked={false} />} />
                <Controller
                  name='temperatureCheck'
                  control={control}
                  render={({ field }) => <CheckBox label={t('submitScreen.F/T')} checked={false} />} />
                <Controller
                  name='temperatureCheck'
                  control={control}
                  render={({ field }) => <CheckBox label={t('submitScreen.40C')} checked={false} />} />
                <Controller
                  name='temperatureCheck'
                  control={control}
                  render={({ field }) => <CheckBox label={t('submitScreen.50C')} checked={false} />} />
                <Controller
                  name='temperatureCheck'
                  control={control}
                  render={({ field }) => <CheckBox label={t('submitScreen.All')} checked={false} />} />
              </div>
              <div className='chbi-input-11'>
                <Controller
                  name='uploadfile'
                  control={control}
                  render={({ field }) => <Input label='Upload Photo' {...field} />} />
              </div>
            </div>
          </div>
          <div className='chbi-textarea-submit-container'>
            <div className='chbi-input-5'>
              <Controller 
              name='specialInstructions'
              control={control}
                rules={{ minLength: 5, required: true }}
                render={({ field }) => <TextArea rows={5} cols={35} label='Special Instructions' {...field} />} />
              </div>
            </div>
          <div className='chbi-form-buttons-container'>
            <Button size="medium" className="primary chbi-submit-button">Submit</Button>
            <Button size="medium" className="danger">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  )
}