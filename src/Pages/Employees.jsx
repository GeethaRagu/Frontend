import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col , Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Employees = ({setEmployeeId}) => {
  const [employee, setEmployee] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  const [getcallData, setGetcallData] = useState([]);
  const [getcallMsg, setGetcallMsg] = useState("");
  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
    .get("https://backend-v5re.onrender.com/api/getallemployee")
    .then((res) => {
      setGetcallData(res.data.result);
      setGetcallMsg(res.data.message);
    })
      .catch((error) => console.log(error));
  };
  //Edit user
  const handleEdit=(id)=>{
    setEmployeeId(id);
    //console.log(id);
    navigate(`/editemployee/${id}`);
};

  // delete user
  const handleDelete = async (id)=>{
    await axios.delete(`https://backend-v5re.onrender.com/api/deleteemployee/${id}`)
                .then((res)=>setDeleteData(res.data.result))
                .catch((error)=>console.log(error));
};
  return (
     <section>
      <Container>
        <Row className="row-cols-1 row-cols-md-3">
          <Col className="col-12 col-md-12">
            <Table striped className="border border-dark rounded">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last name</th>
                  <th>Email</th>
                  <th>Designation</th>
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getcallData.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>{ele._id}</td>
                      <td>{ele.employeeFirstName}</td>
                      <td>{ele.employeeLastName}</td>
                      <td>{ele.employeeEmail}</td>
                      <td>{ele.employeeDesignation}</td>
                    
                      <td><Button variant="success" onClick={()=>{handleEdit(ele._id)}}>Edit</Button></td>
                      <td><Button variant="danger" onClick={()=>{handleDelete(ele._id)}}>Delete</Button></td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Employees;