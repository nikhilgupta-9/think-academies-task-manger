import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import axios from 'axios';
import Header from '../../Components/Loader';
import Loader from '../../Components/Loader';

const Register = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const { name, age, mobile, email, password } = formData;
    if (!name || !age || !mobile || !email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const API_URL = import.meta.env.VITE_SITE_URL + '/api/register';

    try {
      const res = await axios.post(API_URL, formData);
      setSuccess('Registered successfully! Redirecting...');
      setIsAuthenticated(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      const msg = err.response?.data?.error || 'Registration failed';
      setError(msg);
    } finally{
      setLoading(false);
    }
  };

  return (
    <>
    {loading && <Loader />};
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '89vh', paddingTop: '1rem' }}>
        <Card style={{ width: '100%', maxWidth: '450px' }} className="p-4 shadow">
          <div className="text-center mb-4">
            <h3 className="mb-2 fw-bold text-primary">Create Account</h3>
            <p className="text-info small mb-0">Join us and begin your journey</p>
          </div>

          {error && <Alert variant="danger" className="text-center">{error}</Alert>}
          {success && <Alert variant="success" className="text-center">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="e.g. Nikhil Gupta"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                placeholder="Your age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                placeholder="10-digit mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className='text-light'>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className='text-light'>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Choose a strong password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-grid mb-3">
              <Button type="submit" variant="success" size="lg">
                Create Account
              </Button>
            </div>

            <div className="text-center mt-2">
              <span className='text-secondary'>Already have an account? </span>
              <Link to="/login" className='fw-semibold'>Login here</Link>
            </div>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default Register;
