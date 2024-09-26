
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


test('displays correct result for input with misplaced delimiters', () => {
    render(<StringCalculator />);
    
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByText(/Calculate/i);
    
    fireEvent.change(inputElement, { target: { value: '1\n,2,3' } });
    fireEvent.click(buttonElement);
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: '1,\n2,3' } });
    fireEvent.click(buttonElement);
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
    
    fireEvent.change(inputElement, { target: { value: '1,\n,2,3' } });
    fireEvent.click(buttonElement);
    expect(screen.getByText(/Result: 6/i)).toBeInTheDocument();
});

test('supports custom delimiters', () => {
    render(<StringCalculator />);
    
    const inputElement = screen.getByPlaceholderText(/Enter numbers/i);
    const buttonElement = screen.getByText(/Calculate/i);
    
    fireEvent.change(inputElement, { target: { value: '//;\n1;2' } });
    fireEvent.click(buttonElement);
    
    const resultElement = screen.getByText(/Result: 3/i);
    expect(resultElement).toBeInTheDocument();
});

