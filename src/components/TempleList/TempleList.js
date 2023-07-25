import React from 'react';
import TempleCard from '../TempleCard/TempleCard';
import './TempleList.css';


const TempleList = ({ temple }) => {

  return (
   <div>
      <br></br><br></br>
        <div className="card-deck">
        <br></br>
        <TempleCard
          id={temple.id}
          name={temple.temple_name}
          location={temple.temple_location}
          image={temple.temple_image}
        />
    </div>
  </div>
  );
};

export default TempleList;
