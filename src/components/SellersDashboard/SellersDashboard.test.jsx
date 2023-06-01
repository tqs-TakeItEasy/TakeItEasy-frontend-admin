import React from 'react';
import { render, screen } from '@testing-library/react';
import SellersDashboard from './SellersDashboard';

describe('<SellersDashboard />', () => {
    test('it should mount', () => {
        render(<SellersDashboard />);

        const sellersDashboard = screen.getByTestId('SellersDashboard');

        expect(sellersDashboard).toBeInTheDocument();
    });
});