import React from "react";
import Chatbottheme from "../components/Chatbottheme";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';




export default function Homescreen() {




    return (

        <div>

            <div className='row justify-content-center'>

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