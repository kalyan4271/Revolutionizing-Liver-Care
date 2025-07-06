
// components/PatientForm.js
import React, { useState } from 'react';
import axios from 'axios';

function PatientForm({ setResult }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    bilirubin: '',
    albumin: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/patients/predict', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Prediction failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
      <input type="text" name="gender" placeholder="Gender" onChange={handleChange} required />
      <input type="number" name="bilirubin" placeholder="Bilirubin" onChange={handleChange} required />
      <input type="number" name="albumin" placeholder="Albumin" onChange={handleChange} required />
      <button type="submit">Predict</button>
    </form>
  );
}

export default PatientForm;



