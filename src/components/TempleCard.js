import React from "react";
import './TempleCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TempleCard = ({name, location, image, description }) => {
  console.log(name, location, image, description);
  return (

    <div>
    <Card style={{ width: '20rem'}}>
    <Card.Img variant="top" src={image}/>
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{location}</Card.Text>
    {/*<Card.Text>{description}</Card.Text>*/}
    
    <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>

    </div>
  );
};

export default TempleCard;
