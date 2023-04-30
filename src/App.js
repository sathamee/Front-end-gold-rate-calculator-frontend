import React from 'react';
import CalculatorHeader from './components/header';
import CalculatorForm from './components/calculatorForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <CalculatorHeader />
      <div className="container mt-4">
        <CalculatorForm />
      </div>
    </div>
  );
}

export default App;
