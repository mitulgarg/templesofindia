import React from "react";
import './TempleCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
// import Description from "./description";


const TempleCard = ({ id, name, location, image, description }) => {

  console.log(id, name, location, image, description);
  return (

    <div>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{location}</Card.Text>
          <Button variant="primary">
            <Link className=" text-white text-decoration-none" to={`/temples/${id}`}>Go somewhere</Link>
            </Button>
        </Card.Body>
      </Card>

    </div>
  );
};

export default TempleCard;
