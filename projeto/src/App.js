import React, { useState } from 'react'; // Import useState from 'react'
import './App.css';
import Form from './Form.js';
import FormDataDisplay from './FormDataDisplay.js';
import Pages from './Pages.js';



function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const handleFormatSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <div>
      <Pages />
      <Form onSubmit={handleFormatSubmit} />
      {submittedData && <FormDataDisplay formData={submittedData}/>}
     
    </div>
  );
}

export default App;
