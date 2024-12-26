import React, { useEffect, useState } from 'react';
import { use } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
function Showusers(){
  
  const location= useLocation();
  const response = location.state?.res
    
  if (!response || !Array.isArray(response)) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      {response.map((user) => (
        <div key={user.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Password:</strong>{user.password}</p>
          <p><strong>Active:</strong> {user.active ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
    
    }
export default Showusers;