import React, { useState } from 'react';
import './DashBoardContent.css';
import { Samples } from '../../../interfaces/samples-interface';
import Pagination from '../../../Components/Pagination/Pagination';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

export default function DashBoardContent() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);
  // Currently using hard-coded data since there is no backend yet
  const samplesInTest: Samples[] = [
    {
      id: 1,
      sampleName: 'Test Sample 1',
      testRequested: 'pH',
      currentWeek: 'Week 8',
      inSpec: true,
      sampleDetails: '/sample-1'
    },
    {
      id: 2,
      sampleName: 'Test Sample 2',
      testRequested: 'All Cosmetics Test',
      currentWeek: 'Week 1',
      inSpec: true,
      sampleDetails: '/sample-2'
    },
    {
      id: 3,
      sampleName: 'Test Sample 3',
      testRequested: 'All Food Tests',
      currentWeek: 'Week 3',
      inSpec: false,
      sampleDetails: '/sample-3'
    },
    {
      id: 4,
      sampleName: 'Test Sample 4',
      testRequested: 'All Food Tests',
      currentWeek: 'Week 1',
      inSpec: false,
      sampleDetails: '/sample-4'
    }

  ];
  const lastPage = Math.floor(samplesInTest.length / recordsPerPage);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = samplesInTest.slice(indexOfFirstRecord, indexOfLastRecord);
  const outOfSpecSamples: Samples[] = samplesInTest.filter((sample: Samples) => sample.inSpec === false);

  return (
    <div>
      <div className='chbi-dashboard-title'>
        <h1 className='chbi-dashboard-title-text'>{t('yourDashBoard')}</h1>
      </div>
      <div className='chbi-subtitle-text'>
        <a className='chbi-view-sample-link' href='/'>{t('viewAllSamples')}</a>
      </div>
      <div className='chbi-needs-attention-header'>
        <h2>Needs to be addressed</h2>
        {outOfSpecSamples.length > 0 ? <div><p>{t('inNeedOfReview')}:</p>
          {outOfSpecSamples.map((sample: any) => (
            <div className='chbi-out-sample'>
              <FontAwesomeIcon icon={faTriangleExclamation} />
              {sample.sampleName}
            </div>
          ))}
        </div> : <p>{t('inSpecifications')}</p>}
      </div>
      <div className='chbi-scientist-samples-container'>
        <div className='chbi-dashboard-sample-text-container'>
          <h3 className='chbi-dashboard-all-text'>{t('allTeamSamples')}</h3>
          {samplesInTest.length === 0 ? <div><h1>{t('noSamplesInTest')}</h1></div> :
            <table className='chbi-sample-tables'>
              <thead className='chbi-sample-headers'>
                <tr className='chbi-sample-header-text'>
                  <th>{t('sampleHeader')}</th>
                  <th>{t('testRequested')}</th>
                  <th>{t('currentWeek')}</th>
                  <th>{t('inSpec')}</th>
                  <th>{t('sampleDetails')}</th>
                </tr>
              </thead>
              <tbody className='chbi-sample-details'>
                {samplesInTest.map((sample: Samples) => (
                  <tr key={sample.id}>
                    <td>
                      {sample.sampleName}
                    </td>
                    <td>
                      {sample.testRequested}
                    </td>
                    <td>
                      {sample.currentWeek}
                    </td>
                    <td>
                      {sample.inSpec.toString()}
                    </td>
                    <td>
                      <a className='chbi-view-details' href={sample.sampleDetails}>{t('viewDetails')}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
          <div className='chbi-pagination-container'>
            <Pagination currentPage={currentPage} lastPage={lastPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  )
}