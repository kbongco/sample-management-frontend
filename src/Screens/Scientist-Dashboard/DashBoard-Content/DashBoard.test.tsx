import React from 'react';
import { render } from '@testing-library/react';
import DashBoardContent from './DashBoardContent';

describe('DashBoardContent', () => {
  it('renders without errors', () => {
    render(<DashBoardContent />)
  });
  
})