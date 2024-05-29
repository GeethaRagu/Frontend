import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Employees from './Pages/Employees';
import CreateEmployee from './Pages/CreateEmployee';
import EditEmployee from './Pages/EditEmployee';
import Footer from './Components/Footer';


const App = () => {
  const [employeeid,setEmployeeId] = useState(0);
  return (
    <div>
      <BrowserRouter>
      <div>
        <Header/>
      </div>
      <Routes>
      <Route path="/" element={<Home/>}/>
          <Route path="/employees" element={<Employees setEmployeeId={setEmployeeId}/>}/>
          <Route path="/createemployee" element={<CreateEmployee/>}/>
          <Route path="/editemployee/:id" element={<EditEmployee employeeid={employeeid}/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;