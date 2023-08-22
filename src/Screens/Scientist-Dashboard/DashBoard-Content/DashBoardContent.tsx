import React, { useState } from 'react';
import './DashBoardContent.css';
import { Samples } from '../../../interfaces/samples-interface';
import Pagination from '../../../Components/Pagination/Pagination';

export default function DashBoardContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);
  const samplesInTest: Samples[] = [
    {
      sampleName: 'Test Sample 1',
      testRequested: 'pH',
      currentWeek: 'Week 8',
      inSpec: true,
      sampleDetails: '/sample-1'
    },
    {
      sampleName: 'Test Sample 2',
      testRequested: 'All Cosmetics Test',
      currentWeek: 'Week 1',
      inSpec: true,
      sampleDetails: '/sample-2'
    },
    {
      sampleName: 'Test Sample 3',
      testRequested: 'All Food Tests',
      currentWeek: 'Week 3',
      inSpec: false,
      sampleDetails: '/sample-3'
    },
    {
      sampleName: 'Test Sample 3',
      testRequested: 'All Food Tests',
      currentWeek: 'Week 3',
      inSpec: false,
      sampleDetails: '/sample-3'
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
        <h1 className='chbi-dashboard-title-text'>Your Dashboard</h1>
      </div>
      <div className='chbi-subtitle-text'>
        <a  className='chbi-view-sample-link' href='/'>View Your Samples</a>
      </div>
      <div className='chbi-needs-attention-header'>
        <h2>Needs to be addressed</h2>
        {outOfSpecSamples.length > 0 ? <div><p>The following samples are in need of scientist review</p></div>: <p>No samples are currently out of spec</p>}
      </div>
      <div className='chbi-scientist-samples-container'>
        <div className='chbi-dashboard-sample-text-container'>
          <h3 className='chbi-dashboard-all-text'>All of your team's samples</h3>
          {samplesInTest.length === 0 ?  <div><h1>You currently do not have any samples in test</h1></div> :
            <table className='chbi-sample-tables'>
              <thead className='chbi-sample-headers'>
                <tr className='chbi-sample-header-text'>
                  <th>Sample Name</th>
                  <th>Test Requested</th>
                  <th>Current Week</th>
                  <th>inSpec</th>
                  <th>Sample Details</th>
                </tr>
              </thead>
              <tbody className='chbi-sample-details'>
                {samplesInTest.map((sample: Samples) => (
                  <tr>
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
                     <a className='chbi-view-details'href={sample.sampleDetails}>View Samples</a>
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