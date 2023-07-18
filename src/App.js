import React, { useState, useEffect } from "react";
import './App.css';
import TempleList from './components/TempleList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const App = () => {
  const [temples, setTemples] = useState([]);

  const getData = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        'Content-Type':
          'application/json;charset=utf-8'
      },
    };

    const response = await fetch('http://localhost:3030/temples', requestOptions)
    const data = await response.json()
    //console.log(data)
    setTemples(data)
    //async await

  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="header">
      <h1>The Temples Of India</h1>
      <h6>Click on a Card for Detailed Information</h6>
      </div>
      <div>
        <Row>
          {temples.map((temple) => (
            <Col>
              <TempleList key={temple.id} temple={temple} />
            </Col>
          ))}

        </Row>

      </div>
    </div>
  );
};

export default App;

