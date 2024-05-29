import React, { useState } from "react";
import axios from 'axios';
const Create = () => {
  const [createData, setCreateData] = useState([]);
  const [createMsg, setCreateMsg] = useState("");
  const handleSubmit = () => {
    fetchData();
  };
  const fetchData = async () => {
    const payload = {
      employeeFirstName: "Elwin",
      employeeLastName: "Sai",
      employeeEmail: "elwin@gmail.com",
      employeeDesignation: "QA",
    };
    axios.post("https://backend-v5re.onrender.com/api/createemployee", payload)
    .then((res)=>{
        setCreateData(res.data.result)
        setCreateMsg(res.data.message)
    })
    .catch((error)=>console.log(error))
  };
  return (
    <div>
      <h1>Create</h1>
      <button onClick={handleSubmit}>Click</button>
      <h1>{createMsg}</h1>
    </div>
  );
};

export default Create;
