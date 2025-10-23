import React from 'react'

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-2 text-center'>
                    We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.
                </h1>
            </div>

            <div className='row p-5 mt-5 border-top fs-6 text-muted'
            style={{lineHeight:"1.8", fontSize:"1.2em"}}>

                <div className='col-6 mt-5  p-5'>
                    <p>We are developing a clone of Zerodha, one of India’s most popular stock trading platforms, using the powerful MERN stack—MongoDB, Express.js, React.js, and Node.js. The project aims to recreate the core functionalities of Zerodha, such as live market tracking, stock trading, and portfolio management, while also adding innovative features to improve the overall user experience.<br/> <br/>

                        Our trading platform allows users to seamlessly buy and sell stocks, view real-time price updates, and monitor their portfolios with an intuitive and responsive interface. The frontend, built with React.js, ensures smooth navigation and dynamic user interactions, while the backend, powered by Node.js and Express.js, handles all data operations and API requests securely and efficiently.<br/> <br/>

                        What sets our platform apart are the additional features designed to give users more control and insights. These include AI-based stock suggestions based on user activity, customizable dashboards, smart notifications for price alerts and market news, and advanced charting tools with technical indicators to support in-depth market analysis.<br/>

                        </p>
                </div>

                <div className='col-6 mt-5  p-5'>
                    <p>
                        Security and data privacy are at the core of our platform. We have implemented secure user authentication, including two-factor authentication, to protect user accounts and financial data. <br/> <br/>

                         <a href="" style={{textDecoration: "none"}}>RainWater</a> We have also focused on performance and scalability to ensure the platform can handle a large number of users and live data without lag. Real-time updates are powered through WebSocket integration, enabling instant changes in stock prices and order book updates. <br/>  <br/>

                        Finally, we aim to make the platform educational and accessible. New users will benefit from tooltips, onboarding guides, and demo trading features to practice without real money. <br/>
                    </p>
                </div>
            </div>

        </div>
    );
}



export default Hero;

