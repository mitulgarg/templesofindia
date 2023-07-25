import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from "react";
import "./Dropdownbutton.css";
import TempleList from '../../TempleList/TempleList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { DropdownButton } from 'react-bootstrap';


function Dropdownbutton() {
    const [temples, setTemples] = useState([]);
    const [templeslist, setTempleslist] = useState([]);
    const [statevalue,setStatevalue]=useState(null)
    const [uniqueStates,setUniqueStates]=useState([])
    const [alter,setAlter]=useState(0);

    useEffect(() => {
        fetch('http://localhost:3030/temples')
        .then(res=>res.json())
        .then((data)=>{
            setTemples(data)
            setTempleslist(data);
            let temp=data.map(temple => temple.state)
        console.log(temp);
        let  uniqueStates = [...new Set(temp)];
        setUniqueStates(uniqueStates)
        console.log(uniqueStates);
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

    return (
        
        <div className='drop'>
            <select onChange={(e)=>{handleSettempleslist(e.target.value)}} style={{padding:"1rem","border-radius":"5px 5px 5px 5px","background-color":"#333",color: "white"}}>
                <option >States -</option>
                {
                    uniqueStates.map((state, index) =>(
                      <option value={state} key={index} >{state}</option>
                    ))
                }
            </select>
        
            <Row>
            {temples.map((temple) => (
              <Col key={temple.id}>
                <TempleList key={temple.id} temple={temple} />
              </Col>
            ))}
          </Row>
        </div>

    );
}

export default Dropdownbutton;