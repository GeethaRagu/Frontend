import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const CreateEmployee = () => {
  const [createData, setCreateData] = useState([]);
  const [createMsg, setCreateMsg] = useState("");
  const initialValues = {
    employeeFirstName: "",
    employeeLastName: "",
    employeeEmail: "",
    employeeDesignation: "",
  };
  const validationschema = Yup.object().shape({
    employeeFirstName: Yup.string().required("Field is empty"),
    employeeLastName: Yup.string().required("Field is empty"),
    employeeEmail: Yup.string().required("Field is empty"),
    employeeDesignation: Yup.string().required("Field is empty"),
  });

  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    //console.log(values);
    await axios
      .post("https://backend-v5re.onrender.com/api/createemployee", values)
      .then((res) => {
        setCreateData(res.data.result);
        setCreateMsg(res.data.message);
      })
      .catch((error) => console.log(error));
    navigate("/employees");
  };
  return (
    <section>
      <Container>
        <h1>Create a new employee</h1>
        <Row className="gx-4 gy-2 gx-lg-5 row-cols-1 userlist_container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationschema}
            onSubmit={handleSubmit}
          >
            <Form className="myform">
              <Col>
                <div>
                  <label>First Name :</label>
                  <Field type="text" name="employeeFirstName" />
                  <ErrorMessage
                    name="employeeFirstName"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Last Name :</label>
                  <Field type="text" name="employeeLastName" />
                  <ErrorMessage
                    name="employeeLastName"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Email :</label>
                  <Field type="email" name="employeeEmail" />
                  <ErrorMessage
                    name="employeeEmail"
                    component="h6"
                    className="error_message"
                  />
                </div>
                <div>
                  <label>Designation :</label>
                  <Field type="text" name="employeeDesignation" />
                  <ErrorMessage
                    name="employeeDesignation"
                    component="h6"
                    className="error_message"
                  />
                </div>
              </Col>
              <Button variant="success" type="submit" className="mt-5">
                Create
              </Button>
            </Form>
          </Formik>
        </Row>
      </Container>
    </section>
  );
};

export default CreateEmployee;
