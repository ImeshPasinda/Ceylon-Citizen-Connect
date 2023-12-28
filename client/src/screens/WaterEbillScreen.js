
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function WaterEbillScreen() {

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios.get('/api/newsfeed/getallnews')
            .then(response => {
                // Assuming the response data is an array of news items
                setNewsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    const [phone, setPhone] = useState('');
    const [elecmNo, setelecmNo] = useState('');
    const [address, setAddress] = useState('');

    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`/api/users/update/elecbill/${currentUser.email}`, {
                phone,
                isWaterEbill: true,
                address,
                elecmNo
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


        <div style={{paddingTop : '80px'}}>
            <div className="custom-container">
                <div className="alert alert-warning" role="alert">
                    Hi, {currentUser.name}, you are next billing date is 2024/01/15.
                </div>
                <div class="row" style={{paddingTop : '30px'}}>
                    <div class="col">
                    <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3">
                            <div className="card-body" >
                                <h6 style={{ textAlign: 'left' }}>Total Payable</h6>
                                <h10 className="card-text" style={{ textAlign: 'left', fontSize: '35px'  }}>Rs. -56.00</h10>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col">
                        <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3">
                            <div className="card-body">
                                <h6 style={{ textAlign: 'left' }}>Last Payment</h6>
                                <h10 className="card-text" style={{ textAlign: 'left', fontSize: '35px'  }}>Rs. 1,456.00</h10>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{ paddingTop: '20px' }}>
             
                        <div className="row justify-content-center">
                            {newsData.map((newsItem, index) => (
                                <div key={index} className="col-12">
                                    <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3"> {/* Adjusted card width to 100% */}
                                        <div className="card-body">
                                            <h6 style={{ textAlign: 'left' }}>{newsItem.category}</h6>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    {/* <p className="card-text" style={{ textAlign: 'left' }}>{newsItem.header}</p> */}
                                                    <p className="card-text" style={{ textAlign: 'left', fontSize: '25px', color:'green'  }}>+Rs. 1,456.00</p>
                                                    <p className="card-text" style={{ textAlign: 'left' }}>Billing Date : 11/01/2023</p>
                                                  
                                                </div>
                                                <div className="col-md-4 d-flex justify-content-end">
                                                    <Link to="">
                                                        <button
                                                            className="btn rounded-circle shadow-lg"
                                                            style={{
                                                                width: '60px',
                                                                height: '60px',
                                                                borderRadius: '60px'
                                                            }}
                                                        >
                                                            <i className="fa fa-arrow-right" style={{ fontSize: '25px' }}></i>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
    );
}
