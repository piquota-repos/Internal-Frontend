
import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from "axios";
import SignupPage from './componenets/SignupPage';
import LoginPage from './componenets/LoginPage';
import Response from './componenets/Response';
import Showusers from './componenets/Showusers';
//import About from './componenets/About';

const About = React.lazy(() => import('./componenets/About'));
function App() {

  const [message, setmessage] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/test",
  //       {
  //         auth:{
  //           username:"user1",
  //           password:"user@123"
  //         }}
  //     )
  //     .then((response) => {
  //       setmessage(response.data)
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       alert("Error while fetching the api..."+error)
  //     })
  // }, []
  // );

  return (
    <div className="App">

      <Router>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/response" element={<Response />} />
          <Route path='/showusers' element={<Showusers/>}/>         
          <Route path='/about' element={<About/>}/>       
        </Routes>
        </Suspense>
      </Router>
      {/* <h1>{message}</h1> */}
    </div>
  );
}

export default App;


