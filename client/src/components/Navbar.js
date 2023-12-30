import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions';
import { logoutAdmin } from '../actions/adminActions';



export default function Navbar() {

    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const adminloginstate = useSelector(state => state.adminloginReducer)
    const { currentAdmin } = adminloginstate
    const dispatch = useDispatch()



    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 navbar-dark custom-bg-color fixed-top">

                <div className="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="https://static.wixstatic.com/media/618c8c_2166a5b1cb8a4774b2eda35d435ca216~mv2.png" alt="" width="110" height="45" class="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item mt-1">
                                <a className="nav-link " href="/">
                                    <h16>Home</h16>
                                </a>
                            </li>
                            <li className="nav-item mt-1">
                                <a className="nav-link " href="/about">
                                    <h16>About Us</h16>
                                </a>
                            </li>
                            <li className="nav-item mt-1">
                                <a className="nav-link " href="/newsfeed">
                                    <h16>News</h16>
                                </a>
                            </li>
                            <li className="nav-item mt-1">
                                <a className="nav-link " href="/faq">
                                    <h16>FAQ</h16>
                                </a>
                            </li>

                            {currentUser ? (

                                <div className="dropdown m-2">


                                    <a style={{ color: 'white' }} className="dropdown-toggles" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <h15 className = "p-2">Hi, {currentUser.name}</h15> <img src='https://static.wixstatic.com/media/618c8c_5f176f88792f40609c74309e7f6f2eb2~mv2.png' style={{ height: '30px', height: '30px' }} />
                                    </a>

                                    <ul class="dropdown-menu text-center" style={{ minWidth: '0rem ' }} aria-labelledby="dropdownMenuButton1">

                                        {/* <li><a className="dropdown-item" href="/profile"><h9>Profile</h9></a></li> */}
                                        <li><a className="dropdown-item" href="/e-bills"><h9>e-Bills</h9></a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => { dispatch(logoutUser()) }}><li><h9>Logout</h9></li></a></li>
                                    </ul>
                                </div>

                            ) : (

                                <li className="nav-item mt-1">
                                    <a className="nav-link" href="/login">
                                        <h15>Login/Sign Up</h15>
                                    </a>
                                </li>
                            ) &&
                                currentAdmin ? (


                                <div className="dropdown m-2">

                                    <a style={{ color: 'white', width: '120px' }} className="dropdown-toggles" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <h15 className = "p-2">Hi, {currentAdmin.AdminName}</h15> <img src='https://static.wixstatic.com/media/618c8c_5f176f88792f40609c74309e7f6f2eb2~mv2.png' style={{ height: '30px', height: '30px' }} />
                                    </a>



                                    <ul class="dropdown-menu text-center" style={{ minWidth: '7rem ' }} aria-labelledby="dropdownMenuButton1">

                                        <li><a className="dropdown-item" href="/admin"><h9>Profile</h9></a></li>

                                        <li><a className="dropdown-item" href="#" onClick={() => { dispatch(logoutAdmin()) }}><li><h9>Logout</h9></li></a></li>
                                    </ul>

                                </div>
                            ) : (

                                <li className="nav-item mt-1">
                                    <a className="nav-link " href="/login">
                                        <h15>Login | Register</h15>
                                    </a>
                                </li>
                            )}


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
