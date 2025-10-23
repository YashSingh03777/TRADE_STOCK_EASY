import React from 'react'
import Hero from './Hero';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Universe from './Universe';

function ProductPage() {
    return (

        <>
            <Hero />

            <LeftSection
                imageURL="media/images/media/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more Enjoy the kite experience seamlessly on your Android and ios devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
             <RightSection

             imageURL="media/images/media/console.png"
                productName="Console"
                productDescription="A Zerodha clone is a stock trading platform that replicates the core features of Zerodha, including real-time market data, order execution, portfolio tracking, and advanced charting tools. It enables users to buy and sell stocks, mutual funds, and other securities with low brokerage fees. Typically built with scalable architecture, it supports high-volume trading. The clone can be customized for branding and feature enhancements. It's ideal for startups aiming to launch a trading app quickly.
"                    learnMore=""
            
                 />

            <LeftSection
                imageURL="media/images/media/coin.png"
                productName="Coin"
                productDescription="Zerodha Coin is Zerodha’s direct mutual fund investment platform that allows users to buy mutual funds directly from asset management companies (AMCs) without paying any commission. It offers a simple, user-friendly interface integrated with Zerodha’s ecosystem, enabling users to track, manage, and invest in mutual funds alongside their equity holdings. With Coin, investors benefit from lower expense ratios and long-term savings compared to regular mutual fund plans."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageURL="media/images/media/kiteconnect.png"
                productName="Kite Connect API "
                productDescription="A Zerodha clone is a stock trading platform that replicates the core features of Zerodha, including real-time market data, order execution, portfolio tracking, and advanced charting tools. It enables users to buy and sell stocks, mutual funds, and other securities with low brokerage fees. Typically built with scalable architecture, it supports high-volume trading. The clone can be customized for branding and feature enhancements. It's ideal for startups aiming to launch a trading app quickly.
"                    learnMore=""
            
                 />

            <LeftSection
                imageURL="media/images/media/varsity.png"
                productName="Varsity mobile"
                productDescription=" Varsity Mobile by Zerodha is a free, in-depth stock market education app offering structured modules for beginners to advanced learners. It includes bite-sized lessons, quizzes, and certification options. Users can track learning streaks and set daily goals for consistent progress. A unique feature called *The Wall* shares real-time market insights from experts. The app is available on both Android and iOS platforms."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />


                <p style={{textAlign:"center"}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <Universe />


        </>


    );
}

export default ProductPage;
