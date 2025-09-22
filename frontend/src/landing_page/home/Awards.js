import React from 'react'

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/media/largestBroker.svg' alt='largest broker' style={{ width: "60% " }} />
                </div>
    
                <div className='col-5'>
                    <h1 className='fs-3'>Largest stock broker in India</h1>
                    <p style={{ fontSize: "16px" }}> <b>That's </b> why 1.6+ crore customers trust Trade-Easy with ~ ₹6 lakh crores of equity investments</p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul style={{ fontSize: "15px" }}>
                                <li>
                                    <p>Features and options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul style={{ fontSize: "15px" }}>
                                <li>
                                    <p>Stocks & Ipos</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt.Security</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src='media/images/media/press-logos.png' alt='largest broker' style={{ width: "100% " }} />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Awards;