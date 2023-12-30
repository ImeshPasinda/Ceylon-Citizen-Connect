import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EbillSelectionScreen() {

    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    return (
        <div style={{ paddingTop: '100px' }}>
            <div className="custom-container">
                <div class="row" style={{ paddingTop: '30px' }}>
                    <div class="col">
                        <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3">
                            <div className="card-body" >

                                <img class="card-img-top" src="https://img.freepik.com/free-vector/paying-bills-concept-illustration_114360-16058.jpg?w=740&t=st=1703904714~exp=1703905314~hmac=d68fe7270856a45fcc8d5e0c021f65e7ebefd89444ab06af9f5a02a85498da91" alt="Card image cap" />
                                <div style={{ padding: '15px' }}>
                                    <h10 className="card-text" style={{ textAlign: 'left', fontSize: '25px' }}>Electricity e-Bill </h10>
                                </div>
                                <div style={{ padding: '15px' }}>
                                    {!currentUser.isElecEbill ? (
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
                                    ) : (
                                        <Link to="/e-bills/electricityebill">
                                        <button
                                            className="btn rounded-circle shadow-lg"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '60px'
                                            }}
                                            data-bs-toggle="offcanvas"
                                            href="#offcanvasExample"
                                        >
                                            <i className="fa fa-arrow-right" style={{ fontSize: '25px' }}></i>
                                        </button>
                                        </Link>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3">
                            <div className="card-body">

                                <img class="card-img-top" src="https://img.freepik.com/free-vector/paying-bills-concept-illustration_114360-16058.jpg?w=740&t=st=1703904714~exp=1703905314~hmac=d68fe7270856a45fcc8d5e0c021f65e7ebefd89444ab06af9f5a02a85498da91" alt="Card image cap" />
                                <div style={{ padding: '15px' }}>
                                    <h10 className="card-text" style={{ textAlign: 'left', fontSize: '25px' }}>
                                        Water e-Bill
                                    </h10>
                                </div>
                                <div style={{ padding: '15px' }}>
                                    {!currentUser.isWaterEbill ? (
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
                                    ) : (
                                        <Link to="/e-bills/waterebill">
                                        <button
                                            className="btn rounded-circle shadow-lg"
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '60px'
                                            }}
                                            data-bs-toggle="offcanvas"
                                            href="#offcanvasExample"
                                        >
                                            <i className="fa fa-arrow-right" style={{ fontSize: '25px' }}></i>
                                        </button>
                                        </Link>
                                    )}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
