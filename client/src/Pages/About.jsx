import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Header />
      <section className=" text-light py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4 text-info">About Task Manager Pro</h2>
          <p className="text-center text-light mb-5">
            Empowering individuals and teams to stay organized, focused, and productive — every single day.
          </p>

          <Row className="g-4">
            <Col md={4}>
              <Card className="bg-secondary text-light h-100 shadow-sm border-0">
                <Card.Body>
                  <h5 className="text-warning">🚀 Our Mission</h5>
                  <p>
                    To simplify task and project management for everyone — from students to professionals.
                    We aim to help users prioritize, plan, and perform.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="bg-secondary text-light h-100 shadow-sm border-0">
                <Card.Body>
                  <h5 className="text-warning">🛠 Tech Stack</h5>
                  <ul className="ps-3">
                    <li>React + Bootstrap</li>
                    <li>Node.js + Express</li>
                    <li>MongoDB Atlas</li>
                    <li>JWT Authentication</li>
                    <li>Deployed on Netlify & Render</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="bg-secondary text-light h-100 shadow-sm border-0">
                <Card.Body>
                  <h5 className="text-warning">📋 Key Features</h5>
                  <ul className="ps-3">
                    <li>Task Creation & Assignment</li>
                    <li>Status Tracking</li>
                    <li>Deadline Reminders</li>
                    <li>Mobile-Responsive UI</li>
                    <li>User Dashboard</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="mt-5 text-center">
            <h5 className="text-info">📩 Got Feedback or Suggestions?</h5>
            <p>
              Reach out to us at <a href="mailto:support@taskmanager.com" className="text-warning">support@taskmanager.com</a>
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
