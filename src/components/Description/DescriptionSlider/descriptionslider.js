import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageTemple from './ImageTemple.js'
import './ImageTemple.css'; 

function DescriptionSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className="img">
        <ImageTemple text="First slide"  /></div>
      </Carousel.Item>
      <Carousel.Item>
        <ImageTemple text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ImageTemple text="Third slide"  />
      </Carousel.Item>
    </Carousel>
    
  );
}

export default DescriptionSlider;