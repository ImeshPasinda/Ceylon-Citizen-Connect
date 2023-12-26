import React, { useState } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Regwaterebillscreen() {
    const [phone, setPhone] = useState('');
    const [watermNo, setWatermNo] = useState('');
    const [address, setAddress] = useState('');

    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`/api/users/update/webill/${currentUser.email}`, {
                phone,
                isWaterEbill: true,
                address,
                watermNo
            });

            console.log(response.data);
        
        } catch (error) {
            console.error('Error:', error);
          
        }
    };

    if (!currentUser) {
        window.location.href = '/login';
        return null;
    }

    if (currentUser.isWaterEbill == true) {
        window.location.href = '/faq';
        return null;
    }

    return (
        <div>
            <div className="jumbotron img-jmbo">
                <div className="container p-3">
                    <h1 style={{ fontSize: "45px", color: "white" }}>
                        Water Supply e-Bill Registration
                    </h1>
                    <p style={{ fontSize: "12px", color: "white", fontFamily: "Mukta, calibri", fontStyle: "italic" }}>National Water Supply and Drainage Board</p>
                </div>
            </div>

            <div className="custom-container">
                <div className="alert alert-primary" role="alert">
                    Hi, {currentUser.name}, you are already registered on our site. Please fill in these fields to register for e-billing in water bills.
                </div>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" value={currentUser.email} disabled />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputPassword4" value={currentUser.name} disabled />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Phone No</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="+94XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Water Meter No</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="WM1234XXX" value={watermNo} onChange={(e) => setWatermNo(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
