import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap'


export default function AdminProfilescreen() {


    const dispatch = useDispatch()

    const userstate = useSelector(state => state.adminloginReducer)
    const { currentAdmin } = userstate






    return (
        <div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <h2 style={{ fontSize: '35px' }}>Admin Profile</h2>
            <br />




            <div className='row justify-content-center'>

                <div className='col-md-8 m-2 p-1 shadow p-3 mb-5 bg-white' style={{ backgroundColor: 'red', color: 'black', borderRadius: '15px' }}>

                    <img src='https://static.vecteezy.com/system/resources/previews/002/002/403/large_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' style={{ height: '150px', height: '150px' }} />



                    <div>
                        <h2 style={{ fontSize: '30px' }}>{currentAdmin.AdminName} <i className="fa fa-edit" style={{ fontSize: '15px' }} type="button" data-bs-toggle="modal" data-bs-target="#updatename" data-bs-whatever="@mdo" ></i></h2>
                        <p>{currentAdmin.AdminEmail} <i className="fa fa-edit" style={{ fontSize: '13px' }} type="button" data-bs-toggle="modal" data-bs-target="#updateemail" data-bs-whatever="@mdo" ></i></p>

                    </div>

                    <p>

                        {/* <a data-bs-toggle ="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-bell"></i>
                            <span class="badge rounded-pill badge-notification bg-danger">1</span>
                        </a> */}

                        <button className="btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Notifications <i class="fas fa-bell"></i>
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Welcome Back ! {currentAdmin.AdminName}
                        </div>
                    </div>
                </div>



            </div>

            <div className='row justify-content-center '>


                <div class="card col-md-4 m-4 shadow p-3 mb-5 bg-white" style={{ width: '18rem', borderRadius: '15px' }}>
                    <img src="https://img.freepik.com/free-vector/people-ordering-food-cafe-online_74855-5913.jpg?w=996&t=st=1672324604~exp=1672325204~hmac=529755ba63bdfa1b037ddba4d350aaa4d2d177bf57fec2d01767f3daf5af4ce8" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">User and CareerFeed Management</h5>
                        <p class="card-text">-Manage all users and CarrerFeed section by publishing Job Vacancies( User Registration, Logins & profiles activities)<br />
                            - Generate Detailed Reports  <br></br>
                        </p>
                        <br />
                        <br />
                        <br />


                        <a href="/admin/selectionUC" class="btn">See More</a>
                    </div>
                </div>






                <div className='row justify-content-center '>

                    <div class="card col-md-4 m-4 shadow p-3 mb-5 bg-white " style={{ width: '18rem', borderRadius: '15px' }}>
                        <img src="https://img.freepik.com/free-vector/team-analysts-working-brand-reputation-social-media_74855-20739.jpg?w=900&t=st=1672323036~exp=1672323636~hmac=5d4c9172b0f0c8c3c4386ce04d662ad728ab166bf106da1763afa0714a76572b" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Feedback Management</h5>
                            <p class="card-text">-Handle all the feedbacks <br />- Feedback collection <br />
                                - Feedback analysis and Response
                            </p>
                            <br />
                            <br />
                            <a href="/admin/feedback" class="btn">See More</a>
                        </div>
                    </div>

                    <div class="card col-md-4 m-4 shadow p-3 mb-5 bg-white " style={{ width: '18rem', borderRadius: '15px' }}>
                        <img src="https://img.freepik.com/free-vector/character-illustration-people-with-internet-message-icons_53876-66149.jpg?w=900&t=st=1672323497~exp=1672324097~hmac=8f1145a507dba8e09043821090e0b1a0681a94cd1d95ce7f2459d0cb08ef4fe3" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">NewsFeed Management
                            </h5>
                            <p class="card-text">-Manage all types of notification & Notify users through public notifications and custom notifications </p>
                            <br />


                            <a href="/admin/selectionfn" class="btn">See More</a>
                        </div>
                    </div>




                </div>
            </div>
        </div>



    )
}