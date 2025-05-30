import React, { useState } from 'react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
  });

  const countries = [
    { value: 'INDIA', label: 'India' },
    { value: 'ENGLAND', label: 'UK' },
  ];

  const states = {
    INDIA: ['Tamilnadu', 'Kerala', 'Karnataka'],
    ENGLAND: ['London', 'Manchester', 'Birmingham'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset state when country changes
    if (name === 'country') {
      setFormData({
        ...formData,
        country: value,
        state: '', // Reset the state
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      alert('Sign-up successful!');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const validationErrors = {};

    if (!data.name) validationErrors.name = 'Name is required';
    if (!data.email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) validationErrors.email = 'Please enter a valid email address';
    if (!data.password) validationErrors.password = 'Password is required';
    else if (data.password.length < 6) validationErrors.password = 'Password must be at least 6 characters';
    if (data.password !== data.confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';
    if (!data.country) validationErrors.country = 'Country is required';
    if (!data.state) validationErrors.state = 'State is required';

    return validationErrors;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sign Up</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.confirmPassword && (
            <p style={styles.error}>{errors.confirmPassword}</p>
          )}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {errors.country && <p style={styles.error}>{errors.country}</p>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            style={styles.input}
            disabled={!formData.country}
          >
            <option value="">Select State</option>
            {formData.country &&
              states[formData.country].map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
          </select>
          {errors.state && <p style={styles.error}>{errors.state}</p>}
        </div>

        <button type="submit" style={styles.submitButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: '0.875rem',
  },
  submitButton: {
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default SignUpPage;