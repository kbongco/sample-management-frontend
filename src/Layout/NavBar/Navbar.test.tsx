import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar';


describe('NavBar Component', () => {
  it('renders all the links correctly', () => {
    const { getByText } = render(<NavBar />)
    
    const homeLink = getByText('Home');
    const submitLink = getByText('Submit Samples');
    const viewLink = getByText('View Samples');
    const viewTeamSamples = getByText('View Teams Samples');

    expect(homeLink).toBeInTheDocument();
    expect(submitLink).toBeInTheDocument();
    expect(viewLink).toBeInTheDocument();
    expect(viewTeamSamples).toBeInTheDocument();
  });

  it('has all the correct URLS', () => {
    const { getByText } = render(<NavBar />)
  
    const homeLink = getByText('Home');
    const submitLink = getByText('Submit Samples');
    const viewLink = getByText('View Samples');
    const viewTeamSamples = getByText('View Teams Samples');

    expect(homeLink.getAttribute('href')).toContain('/');
    expect(submitLink.getAttribute('href')).toContain('/submit-samples');
    expect(viewLink.getAttribute('href')).toContain('/view-samples');
    expect(viewTeamSamples.getAttribute('href')).toContain('/view-team-samples');
  });
})