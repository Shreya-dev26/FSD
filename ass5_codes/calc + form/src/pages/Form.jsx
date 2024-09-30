import React, { useState } from 'react';
import '../styles/Form.css'; // Import CSS for form styling

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate the form fields
  const validate = () => {
    let errors = {};

    // Validate name
    if (!formData.name) {
      errors.name = 'Name is required';
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    // Validate age (optional, if needed)
    if (!formData.age) {
      errors.age = 'Age is required';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      <h2>User Data Form</h2>

      {isSubmitted && <p className="success-message">Form submitted successfully!</p>}

      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div className={`form-group ${errors.name ? 'error' : ''}`}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* Email input */}
        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Age input */}
        <div className={`form-group ${errors.age ? 'error' : ''}`}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
