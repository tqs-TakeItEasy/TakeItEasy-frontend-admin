import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import '@testing-library/jest-dom'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

describe('<HomePage />', () => {
    test('it should mount', () => {
        render(<HomePage />);

        const homePage = screen.getByTestId('HomePage');

        expect(homePage).toBeInTheDocument();
    });
});