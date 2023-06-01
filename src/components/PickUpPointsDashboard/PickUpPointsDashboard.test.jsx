import React from 'react';
import { render, screen } from '@testing-library/react';
import PickUpPointsDashboard from './PickUpPointsDashboard';
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

describe('<PickUpPointsDashboard />', () => {
    test('it should mount', () => {
        render(<PickUpPointsDashboard />);

        const pickUpPointsDashboard = screen.getByTestId('PickUpPointsDashboard');

        expect(pickUpPointsDashboard).toBeInTheDocument();
    });
});