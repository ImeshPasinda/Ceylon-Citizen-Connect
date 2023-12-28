import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function WaterEbillScreen() {

    const userstate = useSelector(state => state.loginUserReducer);
    const { currentUser } = userstate;

    const [nextBillDate, setNextBillDate] = useState('');

    useEffect(() => {
        // Function to calculate the next billing date
        const calculateNextBillDate = () => {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1;

            let nextBillingDate;

            if (currentMonth === 1) {
                nextBillingDate = new Date(currentYear, 1, 1);
            } else {
                nextBillingDate = new Date(currentYear, currentMonth, 1);
            }

            const formattedNextBillDate = `${nextBillingDate.getFullYear()}/${(nextBillingDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}/${nextBillingDate.getDate().toString().padStart(2, '0')}`;

            setNextBillDate(formattedNextBillDate);
        };

        // Call the function to initially set the next billing date
        calculateNextBillDate();
    }, []); // Run this effec

    const [selectedMonthDetails, setSelectedMonthDetails] = useState(null);

    // Function to handle click on the button and show details for a specific month
    const handleShowDetails = (monthData) => {
        setSelectedMonthDetails(monthData);
    };


    const [waterbillData, setWaterbillData] = useState([]);
    const [firstWaterbill, setFirstWaterbill] = useState(null); // Initialize with null or appropriate initial value

    useEffect(() => {
        axios.get(`/api/waterUser/waterbills/${currentUser.email}`)
            .then(response => {
                // Assuming 'createdAt' is the field you want to sort by
                const sortedData = response.data.sort((a, b) => {
                    // Change 'createdAt' to the field you want to sort by
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });

                setWaterbillData(sortedData);

                // Save the first document to another variable if sortedData has items
                if (sortedData.length > 0) {
                    const firstDocument = sortedData[0];
                    setFirstWaterbill(firstDocument);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    if (!currentUser) {
        window.location.href = '/login';
        return null;
    }

    // Function to handle downloading the bill as a PDF
    const handleDownloadPDF = () => {
        if (selectedMonthDetails) {
            const { month, date } = selectedMonthDetails;

            const pdf = new jsPDF('p', 'pt', 'a4'); // Set PDF format (portrait, points, A4 size)

            // Customize logo or any other special formatting
            const logoImg = 'https://static.wixstatic.com/media/618c8c_b4938cfff8be43a6930076a53d590880~mv2.png'; // Replace with your logo path
            const logoWidth = 100;
            const logoHeight = 40;
            const logoX = 40;
            const logoY = 40;
            pdf.addImage(logoImg, 'PNG', logoX, logoY, logoWidth, logoHeight);

            // Customize text styles and positioning
            pdf.setFontSize(14);
            pdf.text(`Water Bill for ${month} - ${date} `, 200, 65);

            // Convert HTML to canvas using html2canvas
            html2canvas(document.querySelector("#billDetails")).then(canvas => {
                const imgData = canvas.toDataURL('image/png');

                // Add image (canvas) to PDF
                pdf.addImage(imgData, 'PNG', 40, 120);

                // Saving the PDF file
                pdf.save(`water_bill_${month}_${date}.pdf`);
            });
        }
    };


    return (


        <div style={{ paddingTop: '100px' }}>
            <div className="custom-container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/" style={{ textDecoration: 'none' }}>Home</a></li>
                        <li class="breadcrumb-item"><a href="/ebils" style={{ textDecoration: 'none' }}>e-Bills</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Water Bill</li>
                    </ol>
                </nav>
                <div className="alert alert-warning" role="alert">
                    Hi, {currentUser.name}, your next water billing date is {nextBillDate}.
                </div>
                <div class="row" style={{ paddingTop: '30px' }}>
                    <div class="col">
                        <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3">
                            <div className="card-body" >
                                <h6 style={{ textAlign: 'left' }}>Total Payable</h6>
                                <h10 className="card-text" style={{ textAlign: 'left', fontSize: '35px' }}>Rs. 0.00</h10>
                            </div>

                        </div>
                    </div>
                    <div class="col">
                        <div className="card card shadow p-0 bg-white rounded justify-content-center w-100 mb-3">
                            <div className="card-body">
                                <h6 style={{ textAlign: 'left' }}>Last Payment</h6>
                                <h10 className="card-text" style={{ textAlign: 'left', fontSize: '35px' }}>
                                    Rs. {firstWaterbill ? (
                                        <span>{firstWaterbill.amountpermonth}</span>
                                    ) : (
                                        <span>0.00</span>
                                    )}
                                </h10>

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

                                                <p className="card-text" style={{ textAlign: 'left', fontSize: '25px', color: 'green' }}>+Rs. {waterbillItem.amountpermonth}</p>
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
                                                    onClick={() => handleShowDetails(waterbillItem)} // Pass the current month's data
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
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                        Billing Details for {selectedMonthDetails && selectedMonthDetails.month}
                    </h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="bill-container">
                    <div class="bill-details">
                        <div id="billDetails">
                            {selectedMonthDetails && (
                                <div>
                                    <p><strong>Month:</strong> {selectedMonthDetails.month}</p>
                                    <p><strong>Account No:</strong> {selectedMonthDetails.accountNo}</p>
                                    <p><strong>Email:</strong> {selectedMonthDetails.email}</p>
                                    <p><strong>Total Units:</strong> {selectedMonthDetails.totalUnits}</p>
                                    <p><strong>Reference:</strong> {selectedMonthDetails._id}</p>
                                    <div style={{ paddingTop: '20px' }}>
                                        <div className="alert alert-danger" role="alert">
                                            Amount Per Month: Rs {selectedMonthDetails.amountpermonth}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div class="offcanvas-footer">
                        <button type="button" class="btn btn-primary" onClick={handleDownloadPDF}>Download Bill</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
