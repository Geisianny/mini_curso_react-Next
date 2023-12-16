import React, { useState } from 'react';
import './Form.css';

function Form({ onSubmit }) { // Correct the prop name to onSubmit
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Nome </label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            <label>Email </label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form;
