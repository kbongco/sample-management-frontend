import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button'


describe('Button Component', () => {
  it('renders the default button', () => {
    const { getByText } = render(<Button>Click me!</Button>);
    const buttonElement = getByText('Click me!');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button', 'medium');
  });

  it('renders a large button', () => {
    const { getByText } = render(<Button size='large'>This is a large button</Button>)
    const buttonElement = getByText('This is a large button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button', 'large');
  });

  it('renders a disabled button', () => {
    const { getByText } = render(<Button disabled>Disabled Button</Button>)
    const buttonElement = getByText('Disabled Button') as HTMLButtonElement;
    expect(buttonElement.disabled).toBeTruthy();
  })
});