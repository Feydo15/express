import './App.css';
import React,{ useEffect, useState } from "react";
import { Col, Row, Button, Card  } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"



function App() {

  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/artists")
    .then((response) => {
      const data = response.data;
      setBackendData(data);
      console.log(data, "data is received");
    })
    .catch((error) => {
      console.log(error, "error is received");
    });
  }, []);
  
  // let artists = backendData

  return (
    <div className="App">
      <Row md={2} xs={1} lg={3} className="g-3">
           {backendData.map((item) => (
             <Col key={item.id}>
             <Card className="h-auto">
      <Card.Body className="bg-primary">
      <div className="d-flex flex-direction-start">
      <Button size='sm' variant='danger'>E</Button>
      <Button size='sm' variant='danger'>D</Button>
      </div>
        <Card.Title className="d-flex flex-column  mb-4">
          <p className="fs-2">Artist: {item.name}</p>
          <p className="fs-2">Age: {item.age}</p>
          <p className="fs-2"> Followers: {item.followers}</p>
          
          <p className="fs-2">{item.awards.map((item) => (
            <ul key={item.id}  className=" list-group list-group-flush"
            style={{ gap: ".5rem" }}>
              <h2>Award</h2>
              <li className="list-group-item">{item.awardName}</li>
              <li className="list-group-item">{item.awardNum}</li>
            </ul>
          ))}</p>
    
        </Card.Title>
        <div className="mt-auto">
        </div>
      </Card.Body>
    </Card>
             </Col>
           ))}
         </Row>

    </div>
  );
}

export default App;
