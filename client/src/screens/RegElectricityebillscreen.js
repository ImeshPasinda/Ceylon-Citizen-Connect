import React, { useState } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';
import Swal from "sweetalert2";
import { baseURL } from '../apiConfig';

export default function RegElectricityebillscreen() {
    const [phone, setPhone] = useState('');
    const [elecmNo, setelecmNo] = useState('');
    const [address, setAddress] = useState('');


    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    const isFormValid = () => {
        return phone.trim() !== '' && elecmNo.trim() !== '' && address.trim() !== '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`${baseURL}/api/users/update/elecbill/${currentUser.email}`, {
                phone,
                isElecEbill: true,
                address,
                elecmNo
            });

            console.log(response.data);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });

            Toast.fire({
                icon: 'success',
                title: 'Registered successfully!'
            });

            setTimeout(() => {
                localStorage.removeItem('currentUser');
                window.location.href = '/login';
            }, 1500);

        } catch (error) {
            console.error('Error:', error);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'Registered Unsuccessfully!'
            })
        }
    };


    if (!currentUser) {
        window.location.href = '/login';
        return null;
    }

    if (currentUser.isElecEbill == true) {
        window.location.href = '/e-bills/electricityebill';
        return null;
    }

    return (


        <div>
            <br />
            <br />
            <br />
            <div class="jumbotron img-jmbo">
                <div class="container p-3">
                    <br />
                    <br />
                    <br />
                    <h10 style={{ fontSize: "35px", color: "white" }}>
                        Electricity Supply e-Bill Registration

                    </h10>
                    <p style={{ fontSize: "12px", color: "white", fontFamily: "Mukta, calibri", fontStyle: "italic" }}>National Electricity Board</p>
                    <br />
                </div>
            </div>

            <div className="custom-container">
                <div className="alert alert-primary" role="alert">
                    Hi, {currentUser.name}, you are already registered on our site. Please fill in these fields to register for e-billing in Electricity bills.
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
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="+94XXXXXXXXX"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Electricity Meter No</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="EM1234XXX"
                            value={elecmNo}
                            onChange={(e) => setelecmNo(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" disabled={!isFormValid()}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
