import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ErrorMessage, Formik, useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

const EditEmployee = ({employeeid}) => {
    const [editemployee, setEditEmployee] = useState({
    employeeFirstName: "",
    employeeLastName: "",
    employeeEmail: "",
    employeeDesignation: ""
  });
  const validationschema = Yup.object().shape({
    employeeFirstName: Yup.string().required("Field is empty"),
    employeeLastName: Yup.string().required("Field is empty"),
    employeeEmail: Yup.string().required("Field is empty"),
    employeeDesignation: Yup.string().required("Field is empty")
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    await axios
      .get(
        `https://backend-v5re.onrender.com/api/getemployee/${id}`
      )
      .then((res) => {
         setEditEmployee(res.data.result);
        //setCreateMsg(res.data.message);
        //console.log("response", res.data);
        // console.log("user", edituser);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    formik.setValues(editemployee);
    //console.log("user", edituser);
  }, [editemployee]);

  const handleSubmit = async (values) => {
    //console.log(values);
    await axios
      .put(
        `https://backend-v5re.onrender.com/api/updateemployee/${id}`,
        values
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    navigate("/employees");
  };

  const formik = useFormik({
    initialValues: {
        employeeFirstName: "",
        employeeLastName: "",
        employeeEmail: "",
        employeeDesignation: ""
    },
    validationSchema:validationschema,
    onSubmit: handleSubmit,
  });

    return (
        <section>
        <Container>
          <h1>Edit Employee</h1>
          <Row className="gx-4 gy-2 gx-lg-5 row-cols-1 userlist_container">
           
            <form onSubmit={formik.handleSubmit} className="myform">
              <Col>
                <div>
                  <label htmlFor="employeeFirstName">First Name :</label>
                  <input
                    type="text"
                    name="employeeFirstName"
                    id="employeeFirstName"
                    value={formik.values.employeeFirstName}
                    onChange={formik.handleChange}
                  />
                  
                </div>
                
                <div className="error_message">{formik.errors.employeeFirstName}</div>
                <div>
                  <label htmlFor="employeeLastName">Last name :</label>
                  <input
                    type="text"
                    name="employeeLastName"
                    id="employeeLastName"
                    value={formik.values.employeeLastName}
                    onChange={formik.handleChange}
                  />
                  
                </div>
                <div className="error_message">{formik.errors.employeeLastName}</div>
                <div>
                  <label htmlFor="employeeEmail">Email address :</label>
                  <input
                    type="email"
                    name="employeeEmail"
                    id="employeeEmail"
                    value={formik.values.employeeEmail}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="error_message">{formik.errors.employeeEmail}</div>
                <div>
              
                  <label htmlFor="employeeDesignation">Designation :</label>
                  <input
                    type="text"
                    name="employeeDesignation"
                    id="employeeDesignation"
                    value={formik.values.employeeDesignation}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="error_message">{formik.errors.employeeDesignation}</div>
                <Button className="btn btn-primary mt-5" type="submit">
                  Update
                </Button>
              </Col>

            </form>
            
          </Row>
        </Container>
      </section>
    );
};

export default EditEmployee;