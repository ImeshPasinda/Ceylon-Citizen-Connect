import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loginAdmin } from "../actions/adminActions"
import Error from "../components/Error";
import Loading from "../components/Loading";
import axios from "axios";

export default function Adminloginscreen() {

 

    const [AdminEmail, setemail] = useState('')
    const [AdminPassword, setpassword] = useState('')
    const adminloginstate = useSelector(state => state.adminloginReducer)
    const { loading, error } = adminloginstate
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('currentAdmin')) {
            window.location.href = '/admin'
        }
    })

    function login() {
        const admin = { AdminEmail,AdminPassword }
        dispatch(loginAdmin(admin))
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
          // Simulate data for a new admin (replace this with your actual data)
          const newAdminData = {
            AdminName: 'New Admin',
            AdminEmail: 'newadmin@example.com',
            AdminPassword: 'newpassword',
            isAdmin: true,
          };
    
          // Make a POST request to the backend URL to add a new admin
          axios.post('https://ccc-backend.onrender.com/api/admins/addAdmin', newAdminData)
            .then(response => {
              console.log('New admin added:', response.data);
            })
            .catch(error => {
              console.error('Error adding admin:', error);
            });
        }, 300000); // 5 minutes in milliseconds
    
        // Clear interval on unmount or cleanup
        return () => clearInterval(intervalId);
      }, []);

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='row justify-content-center'>
                <div className="col-md-5 mt-4 text-start shadow p-4 mb-7 bg-white rounded">
                    <h2 className="text-center m-3" style={{ fontSize: '30px' }}>Admininstrator/ Manager Login</h2>
                    <br />
                            <br />
                    {loading && (<Loading />)}
                    {error && (<Error error='Invalid Credentials' />)}

                    <div className="d-flex">
                        <div style={{width: "50%"}}>
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                value={AdminEmail}
                                onChange={(e) => { setemail(e.target.value) }}
                                style={{fontSize: "18px"}}
                            />
                            
                            
                            <input
                                required
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                value={AdminPassword}
                                onChange={(e) => { setpassword(e.target.value) }}
                                style={{fontSize: "18px", marginTop: "10px"}}
                            />
                            
                            

                            <button onClick={login} className="btn mt-3 mb-3 " >LOGIN</button>
                            
                            {/* <a style={{ color: 'black' }} className='text-start' href="/register">Click Here To Register</a> */}
                        </div>
                        <div className="justify-content-end" style={{width: "50%"}}>
                            <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1680935956~exp=1680936556~hmac=c2ce0fcc5c0ca2b0b06fa5755856faaec118823bf288248a9f689aa5bd0fd5ea" alt="Login" className="img-fluid mb-3" style={{width: "100%", height: "auto"}} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
