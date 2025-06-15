import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // ensure form field should not be empty 
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // send login request on api endpoint
    try {
      const res = await axios.post('http://localhost:5000/api/login', formData);

      // Store token in localStorage (use res.data.token )
      // localStorage.setItem('authToken', res.data.token || "true");
      if (res.data.token) {
          localStorage.setItem('authToken', res.data.token);
        }


      // Set auth state & redirect
      setIsAuthenticated(true);
      navigate('/dashboard');

    } catch (err) {
      const msg = err.response?.data?.error || "Login failed";
      setError(msg);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4 shadow">
        <h3 className="text-center mb-3">Login</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email" className="mb-3">
            <Form.Label className='text-light'>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-4">
            <Form.Label className='text-light'>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-grid mb-3">
            <Button type="submit" variant="primary">
              Login
            </Button>
          </div>

          <div className="text-center">
            <span className='text-secondary'>Don't have an account? </span>
            <Link to="/register">Register</Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
