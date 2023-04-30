import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CalculatorForm = () => {
  const [karat, setKarat] = useState('9k');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('1450');
  const [total, setTotal] = useState('');

  const handleKaratChange = (e) => {
    const pricePerGram = {
      '9k': '1450',
      '14k': '2600',
      '18k': '3450',
      '20k': '4500',
      '22k': '5500',
      '24k': '6250'
    };
    setKarat(e.target.value);
    setPrice(pricePerGram[e.target.value]);
  }

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/gold')
      .then(response => response.json())
      .then(data => {
        const goldRate = data.find(rate => rate.karat === karat);
        if (goldRate) {
          const rate = goldRate.price;
          const value = (rate * weight).toFixed(2);
          setTotal(value);
          setPrice(rate);
        } else {
          const value = (price * weight).toFixed(2);
          setTotal(value);
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-5">
      <h2>Gold Rate Calculator</h2>
      <Form.Group controlId="karat">
        <Form.Label>Karat Value</Form.Label>
        <Form.Control
          as="select"
          value={karat}
          onChange={handleKaratChange}
        >
          <option value="9k">9k</option>
          <option value="14k">14k</option>
          <option value="18k">18k</option>
          <option value="20k">20k</option>
          <option value="22k">22k</option>
          <option value="24k">24k</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="weight">
        <Form.Label>Weight (in grams)</Form.Label>
        <Form.Control
          type="number"
          value={weight}
          onChange={handleWeightChange}
          placeholder="Enter weight"
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price (in gram)</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="Enter price per gram"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Calculate
      </Button>
      {total && (
        <h4 className="mt-4">
          Total Value: <span className="text-success"> ₹ {total}  </span>
        </h4>
      )}
    </Form>
  );
};

export default CalculatorForm;
