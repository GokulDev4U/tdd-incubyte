import React, { useState } from "react";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);

  // const handleCalculate = () => {
  //     const numbers = input.split(',').map(Number);
  //     const sum = numbers.reduce((acc, num) => acc + num, 0);
  //     setResult(sum);
  // };

//   const handleCalculate = () => {
//     // Replace all newline characters with commas
//     const sanitizedInput = input.replace(/\n/g, ",");
//     const numbers = sanitizedInput.split(",").map(Number);
//     const sum = numbers.reduce((acc, num) => acc + (isNaN(num) ? 0 : num), 0);
//     setResult(sum);
//   };

const handleCalculate = () => {
    let numbers = input;
    let delimiter = /[\n,]/;

    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(`[${parts[0].charAt(2)}]`);
        numbers = parts[1];
    }

    const sum = numbers.split(delimiter).map(Number).reduce((acc, num) => acc + num, 0);
    setResult(sum);
};

  return (
    <div>
      <textarea
        // type="text"
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
