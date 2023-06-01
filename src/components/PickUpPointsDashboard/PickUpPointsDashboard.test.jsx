import React from 'react';
import { render, screen } from '@testing-library/react';
import PickUpPointsDashboard from './PickUpPointsDashboard';

describe('<PickUpPointsDashboard />', () => {
    test('it should mount', () => {
        render(<PickUpPointsDashboard />);

        const pickUpPointsDashboard = screen.getByTestId('PickUpPointsDashboard');

        expect(pickUpPointsDashboard).toBeInTheDocument();
    });
});