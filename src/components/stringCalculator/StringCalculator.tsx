
import React, { useState } from 'react';

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState('');

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter numbers"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button>Calculate</button>
        </div>
    );
};

export default StringCalculator;
