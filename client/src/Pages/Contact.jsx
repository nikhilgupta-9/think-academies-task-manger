import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import contactImage from "../assets/contact-us.svg"; 

const Contact = () => {
  return (
    <>
      <Header />
      <section className="py-5 text-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h2 className="fw-bold mb-4 text-primary">📬 Get in Touch</h2>
              <p className="lead mb-4">
                Have questions or feedback? We'd love to hear from you! Our team is ready to help
                you with any inquiries.
              </p>
              
              <div className="d-flex align-items-start mb-4">
                <div className="me-3 mt-1 text-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold text-info">Our Office</h5>
                  <p className="mb-0">123 Task Street, Productivity City</p>
                  <p>PC 12345, Task Manager HQ</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <div className="me-3 mt-1 text-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold text-info">Call Us</h5>
                  <p className="mb-0">+1 (555) 123-4567</p>
                  <p>Mon-Fri, 9am-5pm</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start">
                <div className="me-3 mt-1 text-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="fw-bold text-info">Email Us</h5>
                  <p className="mb-0">support@taskmanager.com</p>
                  <p>We reply within 24 hours</p>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="bg-secondary p-4 rounded shadow">
                <h3 className="fw-bold mb-4 text-center text-warning">Send Us a Message</h3>
                <Form>
                  <Row className="mb-3">
                    <Col md={6} className="mb-3 mb-md-0">
                      <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Select>
                      <option>Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Feature Request</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your message here..." />
                  </Form.Group>
                  
                  <div className="d-grid">
                    <Button variant="primary" size="lg" type="submit" className="fw-bold">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Map Section */}
      <section className="py-5 text-dark">
        <Container>
          <h3 className="fw-bold mb-4 text-center text-primary">📍 Find Us</h3>
          <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449241641!3d40.74844097138968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1683037460937!5m2!1sen!2sus" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </Container>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;