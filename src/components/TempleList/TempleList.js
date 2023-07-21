import React from 'react';
import TempleCard from '../TempleCard/TempleCard';
import './TempleList.css';


const TempleList = ({ temple }) => {
  return (
   <div style={{margin: "0px"}}>
      <br></br><br></br>
        <div class="card-deck">
        <br></br>
        <TempleCard
          id={temple.id}
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
