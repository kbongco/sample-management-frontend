import React from 'react';
import { Pagination } from '../../interfaces/component-interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import './Pagination.css'

export default function ({ totalNumber, itemsPerPage, currentPage, onPageChange, lastPage }: Pagination) {


  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= lastPage) {
      onPageChange(newPage);
    }
  }
  return (
    <div className='chbi-pagination-container'>
      <div className='chbi-pagination'>
        {/* Add in button component for the button */}
        <button className='chbi-pagination-backward'           onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
      </div>
      <p className='chbi-pagination-text'>Page {currentPage} of {lastPage}</p>
      <div className='chbi-pagination-right-arrow'>
        <button className='chbi-pagination-forward' onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === lastPage}>
          <FontAwesomeIcon icon={faForward} />
        </button>
        </div>
    </div>
  )
}
