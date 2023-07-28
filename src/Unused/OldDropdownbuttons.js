// // const getData = async () => {
//     //     var requestOptions = {
//     //         method: "GET",
//     //         headers: {
//     //             'Content-Type':
//     //                 'application/json;charset=utf-8'
//     //         },
//     //     };

//     //     // dv'b,d
//     //     const response = await fetch('http://localhost:3030/temples', requestOptions)
//     //     const data = await response.json()
//     //     //console.log(data)
//     //     setTemples(data)
//     //     //async await
//     // };
//     // // let uniqueStates=["Uttar Pradesh","Tamil Nadu"] ;

//     useEffect(() => {
//         fetch('http://localhost:3030/temples')
//         .then(res=>res.json())
//         .then((data)=>{
//             setTemples(data)
//             setTempleslist(data);
//             let temp=data.map(temple => temple.state)
//         console.log(temp);
//         let  uniqueStates = [...new Set(temp)];
//         setUniqueStates(uniqueStates)
//         console.log(uniqueStates);
//         })
        
        
//     }, []);

     
    

//     const handleSettempleslist=(state)=>{
        
//         // event.preventDefault();
//         console.log(state);
//         // console.log('clicking....')
//         let newt=templeslist.filter(temple => temple.state === state)
//         setTemples(newt)
//         // setAlter(alter+1)
//         console.log(newt);
//         setAlter(alter+1)
//         if(state==='States -'){
//             setTemples(templeslist)
//         }
        
//     }

//     return (

//         // <Dropdown >
//         //     <div className='button'>
//         //         <Dropdown.Toggle id="dropdown-basic" >
//         //             Dropdown Button
//         //         </Dropdown.Toggle>

//         //         <Dropdown.Menu style={{ "color": "#333" }}>
//         //             {uniqueStates.map((state, index) => (
//         //                 // <Link to={`${index}`}>
//         //                 <Dropdown.Item key={index} href={`${index}`}>{state}
//         //                 </Dropdown.Item>
//         //                 // </Link>
//         //             ))}

//         //         </Dropdown.Menu>



//         //     </div>
//         // </Dropdown>

//     )