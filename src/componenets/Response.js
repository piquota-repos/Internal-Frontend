import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { useLocation } from 'react-router-dom';

function Response(){
          
        const location= useLocation();
        const response = location.state?.res
    
    
        return (
            <div>
                <h2>Response Page</h2>
                {response ? <p>Response from API: {response}</p> : <p>No response available.</p>}
            </div>
        );
    }

export default Response;