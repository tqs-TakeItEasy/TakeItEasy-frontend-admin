import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
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

describe('<Login />', () => {
    test('it should mount', () => {
        render(<Login />);

        const login = screen.getByTestId('Login');
        
        expect(login).toBeInTheDocument();
    });
});

