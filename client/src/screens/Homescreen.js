import React, { useState, useEffect } from "react";
import axios from "axios";
import Chatbottheme from "../components/Chatbottheme";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link } from 'react-router-dom';


export default function Homescreen() {

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

    return (

        <div>

            <div className='row justify-content-center' style={{ paddingTop: '120px' }}>

                {/* <div className="flex-container shadow p-0 bg-white rounded justify-content-center"> */}
                <div className='col-md-9  shadow-lg p-0 mb-5 bg-white rounded'>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://static.wixstatic.com/media/618c8c_31ca956333354ac4990f5e28bbc6114f~mv2.png" className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 className="svg-shadow-xs">First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://static.wixstatic.com/media/618c8c_31ca956333354ac4990f5e28bbc6114f~mv2.png" className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://static.wixstatic.com/media/618c8c_31ca956333354ac4990f5e28bbc6114f~mv2.png" className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>



                <div >

                    <div class="container p-5">
                        <div class="row justify-content-center">
                            <div class="col-md-6">
                                <div class="search">
                                    <i class="fa fa-search"></i>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="container" style={{ paddingTop: '80px' }}>
                            <div class="row justify-content-center">

                                <div class="col-sm-12 col-md-3" style={{ paddingTop: '20px' }}>
                                    <div class="card card shadow p-0 bg-white rounded justify-content-center" >
                                        <img src="https://adaderanaenglish.s3.amazonaws.com/1674463468-Public-sector-employees-Sri-Lanka-L.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                        <br/>
                                            <h5 class="card-title">Regsiter for Electricity e-Bill Service</h5>
                                            <br/>
                                            <p class="card-text text-muted">Sign up now for hassle-free e-billing! Enjoy the convenience of managing your electricity bills online with our easy and secure service. Register today for a seamless billing experience.</p>
                                        </div>
                                       
                                        <div class="card-body">
                                        <Link to="/regelecbill">
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

                                <div class="col-sm-12 col-md-3" style={{ paddingTop: '20px' }}>

                                    <div class="card card shadow p-0 bg-white rounded justify-content-center" >
                                        <img src="https://adaderanaenglish.s3.amazonaws.com/1674463468-Public-sector-employees-Sri-Lanka-L.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                        <br/>
                                            <h5 class="card-title">Regsiter for Water e-Bill Service</h5>
                                            <br/>
                                            <p class="card-text text-muted">Streamline your water bill payments effortlessly! Join our convenient e-billing service for easy management of your water bills online. Register now to simplify your billing experience.</p>
                                        </div>

                                        <div class="card-body">
                                            <Link to="/regwaterebill">
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

                                <div class="col-sm-12 col-md-3" style={{ paddingTop: '20px' }}>

                                    <div class="card card shadow p-0 bg-white rounded justify-content-center" >
                                        <img src="https://adaderanaenglish.s3.amazonaws.com/1674463468-Public-sector-employees-Sri-Lanka-L.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                        <br/>
                                            <h5 class="card-title">Government Job/Employement</h5>
                                            <br/>
                                            <p class="card-text text-muted">Welcome to our all-encompassing government job platform, where boundless opportunities await. Effortlessly navigate through an array of diverse roles meticulously tailored to match your passion.</p>
                                        </div>
                                       
                                        <div class="card-body">
                                        <Link to="/jobportal">
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

                                <div class="col-sm-12 col-md-3" style={{ paddingTop: '20px' }}>

                                    <div class="card card shadow p-0 bg-white rounded justify-content-center" >
                                        <img src="https://adaderanaenglish.s3.amazonaws.com/1674463468-Public-sector-employees-Sri-Lanka-L.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                        <br/>
                                            <h5 class="card-title">Citizen Feedbacks & Concerns</h5>
                                            <br/>
                                            <p class="card-text text-muted">Voice your feedback and find opportunities! Explore government job openings and share your concerns. Your voice matters in shaping a better employment landscape.</p>
                                        </div>
                                       
                                        <div class="card-body">
                                        <Link to="/feedback">
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
                                <div className="d-flex justify-content-center" style={{ paddingTop: '80px' }}>

                                    <div className="row justify-content-center">
                                        {newsData.map((newsItem, index) => (
                                            <div key={index} className="col-12">
                                                <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3"> {/* Adjusted card width to 100% */}
                                                    <div className="card-body">
                                                        <h6 style={{ textAlign: 'left' }}>{newsItem.category}</h6>
                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                <p className="card-text" style={{ textAlign: 'left' }}>{newsItem.header}</p>
                                                            </div>
                                                            <div className="col-md-4 d-flex justify-content-end">
                                                                <Link to="/newsfeed">
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



                    </div>
                </div>
                <div>
                </div>
            </div>








            {['auto-start'].map((placement) => (
                <OverlayTrigger
                    trigger="click"
                    key={placement}
                    placement={placement}
                    overlay={



                        <div className="fixed-bottom" style={{ paddingBottom: '60px', paddingRight: '20px' }}><Chatbottheme /></div>

                    }
                >
                    <div className="position-fixed bottom-0 end-0" style={{ paddingBottom: '50px', paddingRight: '25px' }}>

                        <button className="btn rounded-circle shadow-lg" data-bs-toggle="modal" data-bs-target="#exampleModall" style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '60px'
                        }} ><i className="fas fa-robot" style={{ fontSize: '25px' }} ></i></button>
                    </div>
                </OverlayTrigger>
            ))}



            {<a href="/feedback"><div className="position-fixed bottom-0 end-1" style={{ paddingBottom: '50px', paddingLeft: '25px' }}>

                <button className="btn rounded-circle shadow-lg " variant="success" style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '60px'
                }} ><i className="fa-solid fa-pen" style={{ fontSize: '25px' }} ></i></button>
            </div></a>}


        </div>

    )

}