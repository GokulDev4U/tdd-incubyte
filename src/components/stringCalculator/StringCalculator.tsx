import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Container className="mt-5">
    <Card className="p-4 shadow-sm">
      <h2 className="text-center mb-4">String Calculator</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicTextArea">
          <Form.Label>Enter numbers (use commas or newlines):</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter numbers"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleCalculate} className="w-100">
          Calculate
        </Button>
      </Form>
      {result !== null && (
        <div className="mt-4 text-center">
          <h4>Result: {result}</h4>
        </div>
      )}
    </Card>
  </Container>
  );
};

export default StringCalculator;

