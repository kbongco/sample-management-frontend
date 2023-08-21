import React from 'react';
import './DashBoardContent.css';
import { Samples } from '../../../interfaces/samples-interface';

export default function DashBoardContent() {
  const sampleAlert: boolean = false;
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
    }
  ];

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
        {sampleAlert ? <div><p>The following samples are in need of scientist review</p></div>: <p>No samples are currently out of spec</p>}
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
                      true
                    </td>
                    <td>
                     <a href={sample.sampleDetails}>View Samples</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>}
        </div>
      </div>
    </div>
  )
}