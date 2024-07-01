import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCard";
import Rest from "../../Assets/Blogs/Rest.webp";
import Call from "../../Assets/Blogs/callBind.jpeg";
import Supabase from "../../Assets/Blogs/supabase.png";

const Blogs = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
      </Container>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <BlogCard
            title={
              "Understating Destructuring, Resting, and Spread Operators in Modern JavaScript "
            }
            blogLink={
              "https://www.tntra.io/blog/destructuring-resting-and-spread-operators-in-javascript/"
            }
            imgPath={Rest}
            description={
              "Object destructuring is a new syntax introduced in ES6, which allows for the creation of variables by extracting an object’s properties in a simplified way. This can be particularly useful when working with frameworks and libraries such as Angular, React, or Vue, where you will be using a lot of syntax for destructuring array of objects."
            }
          />
        </Col>

        <Col md={4} className="project-card">
          <BlogCard
            title={"Understating Call, Bind and Apply Methods In JavaScript"}
            blogLink={
              "https://www.linkedin.com/pulse/understanding-call-bind-apply-methods-javascript-amin-tai-kyk0f/?trackingId=DoL0eFnYTt6A2DSCkbroYw%3D%3D"
            }
            imgPath={Call}
            description={
              "As a JavaScript developer, it's important to understand how to manipulate the this keyword and pass arguments to functions. In this post, we will explore three methods that help you achieve, call(), bind() and apply()."
            }
          />
        </Col>
        <Col md={4} className="project-card">
          <BlogCard
            title={"Supabase CRUD Operations"}
            blogLink={
              "https://www.linkedin.com/posts/amintai_developercommunity-supabase-react-activity-7098697383957446657-0QfI?utm_source=share&utm_medium=member_desktop"
            }
            imgPath={Supabase}
            description={
              "Supabase is a powerful open-source platform that empowers developers to effortlessly build and scale backend services for their applications. With features rivaling those of Firebase, it provides real-time databases, authentication, APIs, and more - all while being built on the foundation of PostgreSQL."
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
