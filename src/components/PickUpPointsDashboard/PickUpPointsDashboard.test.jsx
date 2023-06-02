import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
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
  test('check pickuppoints', () => {
    render(<PickUpPointsDashboard />);

    const pickUpPointsDashboard = screen.getByTestId('PickUpPointsDashboard');

    expect(pickUpPointsDashboard).toBeInTheDocument();
  });

  // test('add pickuppoint', async () => {
  //   render(<PickUpPointsDashboard />);
  //   const addPickUpPointButton = screen.getByTestId('addPickUpPointButton');
  //   fireEvent.click(addPickUpPointButton);

  //   await waitFor(() => {
  //     const name = screen.getByPlaceholderText('Name');
  //     const address = screen.getByPlaceholderText('Address');
  //     const email = screen.getByPlaceholderText('Email');

  //     expect(name).toBeInTheDocument();
  //     expect(address).toBeInTheDocument();
  //     expect(email).toBeInTheDocument();
  //   });
  // });
});