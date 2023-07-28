import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageRender from './ImageRender';
import './ImageSlider.css';

function ImageSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='slider-item'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      
      <Carousel.Item>
        
        <ImageRender text="First slide" />
        
        <Carousel.Caption>
          <p>Explore the most Holy and Ancient Temples!</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <ImageRender text="Second slide" />
        <Carousel.Caption >
        <p>India has a vast majority of Temples!</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageRender text="Third slide" />
        <Carousel.Caption>
          <p>Click on The temple You wish to know more about!</p>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ImageSlider;