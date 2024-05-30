import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
const Home = () => {
    const [getcallData, setGetcallData] = useState([]);
    const [getcallMsg, setGetcallMsg] = useState("");
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      axios
        .get("https://backend-v5re.onrender.com/api/getallemployee")
        .then((res) => {
          setGetcallData(res.data.result);
          setGetcallMsg(res.data.message);
        })
        .catch((error) => console.log(error));
    };
    return (
        <section>
        <Container>
        {/* <h1>{getcallMsg}</h1> */}
          <Row className="gx-4 gy-2 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
          
            {/* map all the products and display name,price,desc and image */}
            {getcallData.map((element, index) => {
              return (
                <Col key={index}>
                  <CardGroup>
                    <Card>
                      <Card.Body>
                        <Card.Title>{element._id}</Card.Title>
                        <Card.Text>
                          <i className="ri-id-card-fill"></i>&nbsp;
                          {element.employeeFirstName}
                        </Card.Text>
                        <Card.Text>
                          <i className="ri-id-card-fill"></i>&nbsp;
                          {element.employeeLastName}
                        </Card.Text>
                        <Card.Text>
                          <i className="ri-mail-fill"></i>&nbsp;
                          <a href={`mailto:${element.employeeEmail}`}>{element.employeeEmail}</a>
                          
                        </Card.Text>
                        <Card.Text>
                          <i className="ri-id-card-fill"></i>&nbsp;
                          {element.employeeDesignation}
                        </Card.Text>
                      </Card.Body>
                      
                    </Card>
                  </CardGroup>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
};

export default Home;