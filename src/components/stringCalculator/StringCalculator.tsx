
import React, { useState } from 'react';

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = () => {
        const numbers = input.split(',').map(Number);
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        setResult(sum);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter numbers"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && <div>Result: {result}</div>}
        </div>
    );
};

export default StringCalculator;
