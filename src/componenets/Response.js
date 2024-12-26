import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { data, useLocation } from 'react-router-dom';
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'; // Import useHistory hook

function Response(){
          
        const location= useLocation();
        const response = location.state?.res
        let responses;
        let jwt;
        const navigate = useNavigate();
        const showUsers=  async () => {
            try{
            const token = localStorage.getItem('jwtItem');
            console.log("Retrieved TOken"+ token );
           if (token) {
            const cleanToken = token.replace(/^"(.*)"$/, '$1'); // Regex to strip surrounding quotes
             jwt = `Bearer ${cleanToken}`;
             console.log("cleantoken "+ cleanToken)
           }
             responses = await axios.get('http://localhost:8080/api/allUser',{
                headers :{
                    Authorization:jwt,
                },
            });
            
            console.log(jwt);
            navigate("/showusers", {state: {res : responses.data}})
            // if(responses?.status==401)
            //     alert("you dont have enouf permissions...Please try with valid permission");
        }
        catch(error){
            if (error.response && error.response.status === 401) {
                alert("You don't have enough permissions... Please try with valid permission/Contact your admin .");
              }
               
        }
        }
    
    
        return (
            <div>
                <h2>Response Page</h2>
                {response ? <p>Response from API: {response}</p> : <p>No response available.</p>}
                <MDBContainer className="p-3">
                <button className="mb-4 d-block btn-primary" style={{ height:'50px',width: '100%' }} onClick={showUsers}>Show Users</button>
                </MDBContainer>
            </div>
        );
    }

export default Response;