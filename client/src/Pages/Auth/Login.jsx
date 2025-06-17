import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';
import Loader from '../../Components/Loader'; 

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const API_URL = import.meta.env.VITE_SITE_URL + '/api/login';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // 👈 Start loader

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false); // 👈 Stop loader on error
      return;
    }

    try {
      const res = await axios.post(API_URL, formData);

      if (res.data.token) {
        localStorage.setItem('authToken', res.data.token);
      }

      setIsAuthenticated(true);
      navigate('/dashboard');

    } catch (err) {
      const msg = err.response?.data?.error || "Login failed";
      setError(msg);
    } finally {
      setLoading(false); // 👈 Stop loader in any case
    }
  };

  return (
    <>
      {loading && <Loader />} {/* 👈 Show loader while loading */}

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
    </>
  );
};

export default Login;
