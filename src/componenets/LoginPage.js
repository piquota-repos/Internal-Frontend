import React,{useEffect,useState} from 'react';
import axios from "axios";
import {
    MDBContainer,
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { useNavigate} from 'react-router-dom'; // Import useHistory hook

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [response,setResponse] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            if (!username || !password) {
                setError('Please enter both username and password.');
                return;
            }
            console.log(username +"   "+ password)

            const response = await axios.post('http://localhost:8080/api/login',{
                username,
                password
            });
            localStorage.setItem('jwtItem',JSON.stringify(response.data));
            console.log('Login successful:', response.data);
            console.log(username+ "   "+ password);
            setResponse(response.data);
            navigate("/response", {state: {res : response.data}})
           // history('/dashboard');
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border rounded-lg p-4" style={{ width: '500px', height: 'auto' }}>
                <MDBContainer className="p-3">
                    <h2 className="mb-4 text-center">Login Page</h2>
                    <MDBInput wrapperClass='mb-4' placeholder='User Name' id='usernamr' value={username} type='text' onChange={(e) => setUsername(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' placeholder='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && <p className="text-danger">{error}</p>} {/* Render error message if exists */}
                    <button className="mb-4 d-block btn-primary" style={{ height:'50px',width: '100%' }} onClick={handleLogin}>Sign in</button>
                    <div className="text-center">
                        <p>Not a member? <a href="/signup" >Register</a></p>
                    </div>
                    {response&& <p>Response: {response}</p>}
                </MDBContainer>
            </div>
        </div>
    );
}

export default LoginPage;
