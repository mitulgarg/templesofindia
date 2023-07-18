import React from 'react';
import TempleCard from './TempleCard';



const TempleList = ({ temple }) => {
  return (
    <div className="container">
      <br></br><br></br>
        <div class="card-deck">
        <br></br>
        <TempleCard
          name={temple.temple_name}
          location={temple.temple_location}
          image={temple.temple_image}
          description={temple.temple_description}
        />
      </div>
   



    </div>
  );
};

export default TempleList;
