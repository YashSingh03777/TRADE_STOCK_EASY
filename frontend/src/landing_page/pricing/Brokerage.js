import React from 'react'

function Brokerage() {
    return ( 
     <div className='container'>
        <div className='row p-5 text-center border-top'>
            <div className='col-8 p-4'>
                <h3 className='fs-5'>Brokerage calculator</h3> <br/>
                <ul style={{textAlign:"left" , lineHeight:"1.8"}} className='text-muted'>
                    <li> Calculates total trading cost including brokerage, taxes, and other charges.</li>
                     <li>Provides net profit or loss after all deductions.</li>
                      <li>Supports segments like intraday, delivery, futures, and options.</li>
                       <li>Tailored to specific broker fee structures for accuracy.</li>
                        <li>Helps traders make informed, cost-effective decisions.</li>
                </ul>
            </div>

            <div className='col-4 p-4'>
                <h3 className='fs-5'>List of charges</h3>
            </div>
        </div>
     </div>
     );
}

export default Brokerage;
