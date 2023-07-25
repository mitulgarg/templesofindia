import React from "react";
import './ImageRender.css'; 
const ImageRender = ({ text }) => {
    const imageSources = {
        "First slide": "https://images.pexels.com/photos/3936815/pexels-photo-3936815.jpeg?cs=srgb&dl=pexels-balaji-srinivasan-3936815.jpg&fm=jpg",
        "Second slide": "https://wallpaperaccess.com/full/475892.jpg",
        "Third slide": "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQwf5ATNhE5GSm6RzhREdNYnrMJZ3us-FOekLKF-FvlJ3lBTOrbqIVmMT00OU9lPjEm",
      };
    
      const imageSrc = imageSources[text];
   
  return (
    <div>
        <img 
        src={imageSrc}
        alt={text} 
        className="img"
        />
    </div>
  );
};

export default ImageRender;
