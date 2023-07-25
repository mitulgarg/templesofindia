import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TempleList from "../TempleList/TempleList";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Dropdownview = () => {
    const [temples, setTemples] = useState([]);
    const [td, settd] = useState([]);
    const [templeData, setTempleData] = useState([])
    const { index } = useParams()

    const getData = async () => {
        var requestOptions = {
            method: "GET",
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
        };

        // const uniqueStates = [...new Set(temples.map(temple => temple.state))];


        const uniqueStates = [...new Set(temples.map(temple => temple.state))];

        const selectedState = uniqueStates[index];
    
        const templeIDs = getTempleIDsByState(selectedState);
    
        const getTempleIDsByState = (state) => {
            return temples
                .filter(temple => temple.state === state)
                .map(temple => temple.id);
        };
    



        const response = await fetch(`http://localhost:3030/temples/`, requestOptions)
        const data = await response.json()
        console.log(data)
        let newt=data.filter(temple => temple.state === 'Gujarat')
        setTemples(newt)

        //async await

    };
console.log(temples);

    useEffect(() => {
        getData();
        // fetchTempleData()
    }, []);


    // console.log(templeIDs);

    // const fetchTempleData = async (templeId) => {
    //     const response = await fetch(`http://localhost:3030/temples/${templeId}`);
    //     const data = await response.json();
    //     console.log(data);
    //     // return data;
    //     // setTempleData(data)

    // };

    return (
        <div>
            {/* <div className="header">
                <Row>
                    {templeIDs.map((templeId) => (
                        <Col key={templeId}>
                            <TempleList key={templeId} temple={''} />
                            {console.log(fetchTempleData(templeId))}
                        </Col>
                    ))}
                </Row>

            </div> */}
        </div>
    )
}

export default Dropdownview;
