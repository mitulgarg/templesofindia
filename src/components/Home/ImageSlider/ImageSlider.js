import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageRender from './ImageRender';


function ImageSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ImageRender text="First slide" />
        <Carousel.Caption>
          <h1>Explore Most Holy and Ancient Temples!</h1>
          <p>We bring you information about a vast variety of temples around India!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageRender text="Second slide" />
        <Carousel.Caption >
        <h1>India has a vast majority of Temples!</h1>
          <p>We bring you information about a vast variety of temples around India!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageRender text="Third slide" />
        <Carousel.Caption>
          <h1>Click on The temple You wish to know more about!</h1>
          <p>
          We bring you information about a vast variety of temples around India!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;