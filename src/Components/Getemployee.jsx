import React,{useState,useEffect} from "react";
import axios from 'axios';

const Getemployee = () => {
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
    <div>
      <div>
        <h1>Get</h1>
        <h1>{getcallMsg}</h1>
        {getcallData.map((ele, index) => {
          return (
            <div key="index">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{ele._id}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.employeeFirstName}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.employeeLastName}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.employeeEmail}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.employeeDesignation}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Getemployee;
