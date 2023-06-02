import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
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

describe('<App />', () => {
    test('it should mount', () => {
        render(<App />);

        const app = screen.getByTestId('App');

        expect(app).toBeInTheDocument();
    });

    test('i should be able to login', async () => {
        render(<App />);

        const login = screen.getByTestId('Login');
        expect(login).toBeInTheDocument();

        const username = screen.getByPlaceholderText('Username');
        const password = screen.getByPlaceholderText('Password');

        fireEvent.change(username, { target: { value: 'admin@takeiteasy.pt' } });
        fireEvent.change(password, { target: { value: 'adminGOAT_7RONALDO' } });

        const submitButton = screen.getByTestId('submitButton');
        fireEvent.submit(submitButton);

        await waitFor(() => {
            const homePage = screen.getByTestId('HomePage');
            expect(homePage).toBeInTheDocument();
        });
    });
});

