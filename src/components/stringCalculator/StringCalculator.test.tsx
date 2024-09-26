
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import StringCalculator from './StringCalculator';

test('renders input field and calculate button', () => {
    render(<StringCalculator />);
    
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByText(/Calculate/i);
    
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});

test('displays correct result for valid input', () => {
    render(<StringCalculator />);
    
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByText(/Calculate/i);
    
    fireEvent.change(inputElement, { target: { value: '1,2' } });
    fireEvent.click(buttonElement);
    
    const resultElement = screen.getByText(/Result: 3/i);
    expect(resultElement).toBeInTheDocument();
});