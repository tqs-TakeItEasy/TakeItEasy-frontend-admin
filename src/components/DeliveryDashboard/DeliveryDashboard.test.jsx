import React from 'react';
import { render, screen } from '@testing-library/react';
import DeliveryDashboard from './DeliveryDashboard';
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

describe('<DeliveryDashboard />', () => {
    test('check deliveries', () => {
        render(<DeliveryDashboard />);

        const deliveryDashboard = screen.getByTestId('DeliveryDashboard');

        expect(deliveryDashboard).toBeInTheDocument();
    });

    test.todo('cancel delivery') //, () => {
        // render(<DeliveryDashboard />);
        // const deliveryDashboard = screen.getByTestId('DeliveryDashboard');
        // expect(deliveryDashboard).toBeInTheDocument();
    // });
});

