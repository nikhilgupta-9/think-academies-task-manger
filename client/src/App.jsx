import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import AllUser_T from './Pages/Auth/AllUser_T';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home';
import About from './Pages/About';
import Features from './Pages/Features';
import Contact from './Pages/Contact';
import './styles/main.css';
import './styles/theme.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
   <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/features" element={<Features />} />
    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
    <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
    <Route 
      path="/dashboard" 
      element={
        isAuthenticated 
          ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> 
          : <Navigate to="/login" />
      }
    />

  </Routes>
</Router>

  );
}

export default App;