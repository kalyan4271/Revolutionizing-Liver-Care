// App.js
import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import PredictionResult from './components/PredictionResult';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <h1>Revolutionizing Liver Care</h1>
      <PatientForm setResult={setResult} />
      {result && <PredictionResult result={result} />}
    </div>
  );
}

export default App;