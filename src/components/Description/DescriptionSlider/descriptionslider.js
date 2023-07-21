import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageTemple from './ImageTemple.js'


function DescriptionSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ImageTemple text="First slide"  />
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