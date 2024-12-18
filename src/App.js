
import React,{useEffect,useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [message,setmessage]=useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/test")
      .then((response) => {
        setmessage(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        alert("Error while fetching the api..."+error)
      })
  }, []
  );

  return (
    <div className="App">
      <h2>Welcome to frontEnd</h2>
      <h1>{message}</h1>
    </div>
  );
}

export default App;


