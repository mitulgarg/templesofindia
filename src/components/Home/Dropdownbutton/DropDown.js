import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from "react";
import "./Dropdownbutton.css";
import TempleList from '../TempleList/TempleList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function DropDown( {newtemp} ) {
    const [temples, setTemples] = useState([]);
    const [templeslist, setTempleslist] = useState([]);
    const [statevalue,setStatevalue]=useState(null)
    const [uniqueStates,setUniqueStates]=useState([])
    const [alter,setAlter]=useState(0);
    const [visible, setVisible] = useState(6);  
 
    useEffect(() => {
        fetch('http://localhost:3030/temples')
        .then(res=>res.json())
        .then((data)=>{
            setTemples(data)
            setTempleslist(data);
            let temp=data.map(temple => temple.state)
        let  uniqueStates = [...new Set(temp)];
        setUniqueStates(uniqueStates)
        })
        
        
    }, []);

    const handleSettempleslist=(state)=>{
        
        // event.preventDefault();
        console.log(state);
        // console.log('clicking....')
        let newt=templeslist.filter(temple => temple.state === state)
        setTemples(newt)
        // setAlter(alter+1)
        console.log(newt);
        setAlter(alter+1)
        if(state==='States -'){
            setTemples(templeslist)
        }
        
    }

    const showMoreItems = ()=> {
        setVisible((preValue) => preValue + 6);
    };

    return (
        <div className='container'>
            <Row>
            {newtemp.slice(0,visible).map((temple) => (
              <Col key={temple.id}>
                <TempleList key={temple.id} temple={temple} />
              </Col>
            ))}
          </Row>
          
          <br></br><br></br><br></br><br></br><br></br>
          <div className="row">
          <div className="col-11 text-center" style={{"marginLeft":"1.8rem"}}>
            <div className="d-flex justify-content-center">
          <button className="Load-more" onClick={showMoreItems}>Load more</button>
          </div>
          
          </div></div>
          
          </div>
          
        
    );
}

export default DropDown;