// components/PredictionResult.js
import React from 'react';

function PredictionResult({ result }) {
  return (
    <div>
      <h2>Prediction Result</h2>
      <p>{result.prediction}</p>
    </div>
  );
}

export default PredictionResult;