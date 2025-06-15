import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";

const Features = () => {
  return (
    <>
      <Header />
      <section className=" py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4 text-primary">🚀 Why Choose Task Manager?</h2>
          <p className="text-center text-light mb-5">
            Explore the key features that make our task manager powerful, efficient, and user-friendly.
          </p>

          <Row className="g-4">
            {[
              {
                icon: "🧠",
                title: "Smart Task Management",
                desc: "Easily create, edit, prioritize, and organize tasks using a clean dashboard interface.",
              },
              {
                icon: "📅",
                title: "Deadline & Reminders",
                desc: "Never miss a deadline — set reminders and due dates to stay on track.",
              },
              {
                icon: "🔐",
                title: "Secure Login System",
                desc: "JWT-based secure authentication to keep your data safe and private.",
              },
              {
                icon: "📈",
                title: "Progress Tracking",
                desc: "Visually monitor task progress with status tags: To Do, In Progress, Completed.",
              },
              {
                icon: "👥",
                title: "User Roles & Permissions",
                desc: "Support for Admin and normal users — manage access levels smartly.",
              },
              {
                icon: "⚙️",
                title: "Fully Customizable",
                desc: "Change themes, layouts, and categories to fit your work style.",
              },
            ].map((feature, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 shadow-sm border-0 text-center p-3">
                  <div style={{ fontSize: "2rem" }}>{feature.icon}</div>
                  <Card.Body>
                    <Card.Title className="fw-bold text-info">{feature.title}</Card.Title>
                    <Card.Text className="text-light">{feature.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <h5 className="text-warning">Ready to experience better task flow?</h5>
            <p>
              <strong>Sign up</strong> today and start managing your work like a pro.
            </p>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Features;
