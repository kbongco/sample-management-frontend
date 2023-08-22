import React from 'react';
import { Pagination } from '../../interfaces/component-interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import './Pagination.css'

export default function PaginationComponent({currentPage, setCurrentPage, lastPage, recordsPerPage}: Pagination) {

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage);
  }

  const nextPage = () => {
    if (currentPage >= 1 && currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
    console.log(currentPage);
  }



  return (
    <div className='chbi-pagination-container'>
      <div className='chbi-pagination'>
        <button className='chbi-pagination-backward'onClick={previousPage}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
      </div>
      <p className='chbi-pagination-text'>Page {currentPage} of {lastPage}</p>
      <div className='chbi-pagination-right-arrow'>
        <button className='chbi-pagination-forward' onClick={nextPage}>
          <FontAwesomeIcon icon={faForward} />
        </button>
        </div>
    </div>
  )
}