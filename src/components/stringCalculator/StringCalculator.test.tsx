
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import StringCalculator from './StringCalculator';

test('renders input field and calculate button', () => {
    render(<StringCalculator />);
    
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByText(/Calculate/i);
    
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});
