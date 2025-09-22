import React from 'react'

function Team() {
    return (

        <div className='container'>
            <div className='row p-5 border-top'>
                <h1 className='fs-2 text-center'> Team Member's </h1>
            </div>

            <div className='row p-5 border-top'>
                <div className='col-6'>
                    <img src='media/images/media/YashSingh.jpg' alt='yash image' style={{ width: "40%", borderRadius: "100%" }} />
                </div>

                <div className='col-6 text-muted fs-7'>
                    <p>  TradeEasy is a Zerodha-inspired stock trading platform built with the MERN stack, offering users a seamless and intuitive trading experience. Led by - <b>Yash Chandel,</b>  a skilled MERN developer, the project goes beyond just replicating core features — it introduces additional tools designed to simplify and enhance the trading process for both beginners and seasoned investors. <br />

                        With a strong focus on performance, security, and user-friendly design, TradeEasy aims to be more than just a clone — it’s a modern, accessible gateway into the world of trading.</p>
                </div>
            </div>


            <div className='row p-5 border-top'>
                <div className='col-6'>
                    <img src='media/images/media/VanshikaMudgal.jpg' alt='vanshika image' style={{ width: "40%", borderRadius: "100%" }} />
                </div>

                <div className='col-6 text-muted fs-7'>
                    <p>   <b> Vanshika Mudgal</b> plays a key role in the frontend development of these projects, focusing on building responsive, user-centric interfaces with clean and efficient code. She has a strong grasp of modern web technologies and ensures that the user experience remains seamless across all devices.

                        In addition to her frontend expertise, Vanshika has a solid understanding of IPs and package management, allowing her to effectively integrate external tools, libraries, and services into the projects. Her ability to bridge the gap between design and functionality makes her a valuable asset to the development team.</p>
                </div>
            </div>


            <div className='row p-5 border-top'>
                <div className='col-6'>
                    <img src='media/images/media/' alt=' vanshita image' style={{ width: "40%", borderRadius: "100%" }} />
                </div>

                <div className='col-6 text-muted fs-7'>
                    <p><b>Vanshita Panchal</b> plays a key role in the frontend development of these projects, focusing on building responsive, user-friendly interfaces with clean and efficient code. She has a strong command of modern web technologies and ensures a seamless experience across all devices.

                        In addition to her frontend expertise, Vanshita has also contributed to the backend using Node.js and Express, developing robust APIs, managing server-side logic, and ensuring smooth communication between the frontend and backend systems.

                        She also has solid knowledge of IPs and package management, allowing her to integrate external tools and libraries effectively. Her well-rounded skill set and ability to work across the full stack make her a valuable asset to the team.</p>
                </div>
            </div>


            <div className='row p-5 border-top'>
                <div className='col-6'>
                    <img src='media/images/media/VaibhavKanthiya.jpg' alt='vaibhav image' style={{ width: "40%", borderRadius: "100%" }} />
                </div>

                <div className='col-6 text-muted fs-7'>
                    <p> <b> Vaibhav Kanthiya</b> has been primarily involved in API testing, ensuring the reliability, accuracy, and performance of backend services. He is skilled in identifying issues, validating endpoints, and maintaining high-quality standards across the development process.

                        Alongside his testing expertise, Vaibhav also has a good understanding of frontend technologies and various testing tools, allowing him to contribute to both client-side validation and end-to-end testing. His attention to detail and well-rounded technical knowledge make him a dependable part of the development team. </p>
                </div>
            </div>
        </div>



    );
}


export default Team;

