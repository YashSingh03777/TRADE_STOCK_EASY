import React from 'react'

function Hero() {
    return ( 
       <div className='container'>
        <div className='row p-5 mt-5 border-bottom text-center'>
            <h1>Pricing</h1>
            <h3 className='text-muted fs-5 m'>Free equity investments and flat $20 traday and F&O traders</h3>
        </div>

        <div className='row p-5 mt-5 text-center'>
            <div className='col-4 p-4'>
                <img src='media/images/media/pricingEquity.svg'/>
                <h1 className='fs-3'>Free equity delivery</h1>
                <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free -$ brokerage</p>
            </div>

            <div className='col-4 p-4'>
                  <img src='media/images/media/intradayTrades.svg'/>
                <h1 className='fs-3'>Intraday and F&O traders</h1>
                <p className='text-muted'>Flat $20 or 0.03% (whickever is lower) per executed order on intraday trades across equity, currency, and commodity traders.</p>
            </div>

            <div className='col-4 p-4'>
                  <img src='media/images/media/pricingEquity.svg'/>
                <h1 className='fs-3'>Free direct MF</h1>
                <p className='text-muted'>All direct mutual funds investments are absolutely free - $ 0 commissions & DP charges</p>
            </div>
        </div>
       </div>
     );
}

export default Hero;
