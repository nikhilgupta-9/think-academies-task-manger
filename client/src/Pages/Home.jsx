import React from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Button from '../Components/Button';
import Card from '../Components/Card';
import Input from '../Components/Input';
import { FaTasks, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaTasks />,
      title: "Task Management",
      description: "Easily create, organize, and prioritize your tasks with our intuitive interface."
    },
    {
      icon: <FaChartLine />,
      title: "Progress Tracking",
      description: "Visualize your progress with beautiful charts and completion metrics."
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Share tasks and projects with your team members seamlessly."
    },
    {
      icon: <FaLightbulb />,
      title: "Smart Suggestions",
      description: "Get AI-powered recommendations to optimize your workflow."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">Organize Your Work <span className="text-primary">Effortlessly</span></h1>
              <p className="lead mb-4">
                Our task management system helps you stay productive and focused on what matters most.
                Join thousands of professionals who have transformed their workflow.
              </p>
              <div className="d-flex gap-3">
                <Button variant="primary" size="lg" onClick={()=> navigate("/login")}>Get Started</Button>
                <Button variant="outline-primary" size="lg" onClick={()=> navigate("/about")}>Learn More</Button>
              </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex justify-content-center">
              <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Task workflow organization" 
                className="img-fluid rounded shadow"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 ">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Powerful Features</h2>
            <p className="text-light">Everything you need to manage your tasks effectively</p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
               <Card className="text-center">
                <div className="feature-icon text-warning mb-3">{feature.icon}</div>
                <h5 className="fw-bold text-info">{feature.title}</h5>
                <p className=" text-light">{feature.description}</p>
                </Card>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-5  text-white">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center">
        <h2 className="fw-bold mb-4">Stay Organized. Get Things Done.</h2>
        <p className="lead mb-4">
          Manage your daily tasks efficiently with our intuitive task manager. Create, track, and complete your goals—all in one place.
        </p>
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
          <input 
            type="email" 
            placeholder="Enter your email to get started" 
            className="form-control form-control-lg w-md-50"
            style={{ maxWidth: '300px' }}
          />
          <Button variant="primary" size="lg">Start Free</Button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">What Our Users Say</h2>
            <p className="text-secondary">Trusted by professionals worldwide</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <Card className="h-100">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="User" 
                    className="rounded-circle me-3" 
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0 text-info">Sarah Johnson</h5>
                    <small className="text-danger">Project Manager</small>
                  </div>
                </div>
                <p className='text-light'>"This task manager has completely transformed how our team works. We're 40% more productive since we started using it."</p>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="h-100">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/75.jpg" 
                    alt="User" 
                    className="rounded-circle me-3" 
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0 text-info">Michael Chen</h5>
                    <small className=" text-danger">Software Developer</small>
                  </div>
                </div>
                <p className='text-light'>"The clean interface and powerful features make this my go-to app for personal and professional task management."</p>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="h-100">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="User" 
                    className="rounded-circle me-3" 
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0 text-info">Emma Rodriguez</h5>
                    <small className="text-danger">Marketing Director</small>
                  </div>
                </div>
                <p className='text-light'>"I've tried many task managers, but this one stands out for its simplicity and effectiveness. Highly recommended!"</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;