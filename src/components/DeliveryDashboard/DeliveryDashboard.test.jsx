import { render, screen } from '@testing-library/react';
import DeliveryDashboard from './DeliveryDashboard';
import '@testing-library/jest-dom/extend-expect';

describe('<DeliveryDashboard />', () => {
    test('it should mount', () => {
        render(<DeliveryDashboard />);

        const deliveryDashboard = screen.getByTestId('DeliveryDashboard');

        expect(deliveryDashboard).toBeInTheDocument();
    });
});

