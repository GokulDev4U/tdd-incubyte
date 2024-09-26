import React, { useState } from "react";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);

  // const handleCalculate = () => {
  //     const numbers = input.split(',').map(Number);
  //     const sum = numbers.reduce((acc, num) => acc + num, 0);
  //     setResult(sum);
  // };

  const handleCalculate = () => {
    // Replace all newline characters with commas
    const sanitizedInput = input.replace(/\n/g, ",");
    const numbers = sanitizedInput.split(",").map(Number);
    const sum = numbers.reduce((acc, num) => acc + (isNaN(num) ? 0 : num), 0);
    setResult(sum);
  };

  console.log("res result", result);

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
