import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

const BlogCard = ({ imgPath, title, blogLink, description }) => {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        className="img-thumbnail"
        alt="card-img"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href={blogLink} target="_blank">
          View Blog
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
