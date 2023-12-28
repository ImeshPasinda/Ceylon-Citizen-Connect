
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function WaterEbillScreen() {

    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    const [waterbillData, setwaterbillData] = useState([]);

    useEffect(() => {
        axios.get(`/api/waterUser/waterbills/${currentUser.email}`)
            .then(response => {
                
                setwaterbillData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    if (!currentUser) {
        window.location.href = '/login';
        return null;
    }


    return (


        <div style={{ paddingTop: '80px' }}>
            <div className="custom-container">
                <div className="alert alert-warning" role="alert">
                    Hi, {currentUser.name}, you are next billing date is 2024/01/15.
                </div>
                <div class="row" style={{ paddingTop: '30px' }}>
                    <div class="col">
                        <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3">
                            <div className="card-body" >
                                <h6 style={{ textAlign: 'left' }}>Total Payable</h6>
                                <h10 className="card-text" style={{ textAlign: 'left', fontSize: '35px' }}>Rs. -56.00</h10>
                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3">
                            <div className="card-body">
                                <h6 style={{ textAlign: 'left' }}>Last Payment</h6>
                                <h10 className="card-text" style={{ textAlign: 'left', fontSize: '35px' }}>Rs. 1,456.00</h10>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{ paddingTop: '20px' }}>

                    <div className="row justify-content-center">
                        {waterbillData.map((waterbillItem, index) => (
                            <div key={index} className="col-12">
                                <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3"> {/* Adjusted card width to 100% */}
                                    <div className="card-body">
                                        <h6 style={{ textAlign: 'left' }}>{waterbillItem.month}</h6>
                                        <div className="row">
                                            <div className="col-md-8">
                                                {/* <p className="card-text" style={{ textAlign: 'left' }}>{waterbillItem.header}</p> */}
                                                <p className="card-text" style={{ textAlign: 'left', fontSize: '25px', color: 'green' }}>{waterbillItem.amountpermonth}+Rs. 1,456.00</p>
                                                <p className="card-text" style={{ textAlign: 'left' }}>Billing Date : {waterbillItem.date}</p>

                                            </div>
                                            <div className="col-md-4 d-flex justify-content-end">
                                                <button
                                                    className="btn rounded-circle shadow-lg"
                                                    style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        borderRadius: '60px'
                                                    }}
                                                    data-bs-toggle="offcanvas" href="#offcanvasExample"
                                                >
                                                    <i className="fa fa-arrow-right" style={{ fontSize: '25px' }}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
