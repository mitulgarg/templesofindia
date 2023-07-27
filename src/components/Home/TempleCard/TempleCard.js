import React from "react";
import './TempleCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'reactstrap';
import { Link } from 'react-router-dom';
// import Description from "./description";

const TempleCard = ({ id, name, location, image }) => {
  return (
 <CardDeck>
      <div className="temple-card">
          <Card style={{width:"20rem", height:"20rem"}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{location}</Card.Text>
              <div className="button-position">
              <Button variant="primary">
                <Link className=" text-white text-decoration-none" to={`/temples/${id}`}>Know More</Link>
              </Button>
              </div>
            </Card.Body>
          </Card>
      </div> 
  </CardDeck>
  );
};

export default TempleCard;
