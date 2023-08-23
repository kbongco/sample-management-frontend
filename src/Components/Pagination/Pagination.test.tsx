import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination'; 

test('renders pagination with correct page numbers', () => {
  const { getByText, getByRole } = render(
    <Pagination
      totalNumber={10}
      itemsPerPage={3}
      currentPage={1}
      onPageChange={() => {}}
      lastPage={Math.ceil(10 / 3)}
    />
  );

  expect(getByText('Page 1 of 4')).toBeInTheDocument();
  expect(getByText('1')).toBeInTheDocument();
  expect(getByText('2')).toBeInTheDocument();
  expect(getByText('3')).toBeInTheDocument();
  expect(getByText('4')).toBeInTheDocument();
});

test('disables navigation buttons correctly at boundaries', () => {
  const { getByLabelText } = render(
    <Pagination
      totalNumber={10}
      itemsPerPage={3}
      currentPage={1}
      onPageChange={() => {}}
      lastPage={Math.ceil(10 / 3)}
    />
  );

  const backwardButton = getByLabelText('Go to previous page');
  const forwardButton = getByLabelText('Go to next page');

  expect(backwardButton).toBeDisabled();

  expect(forwardButton).not.toBeDisabled();

  fireEvent.click(forwardButton);

  expect(forwardButton).toBeDisabled();
  expect(backwardButton).not.toBeDisabled();
});


