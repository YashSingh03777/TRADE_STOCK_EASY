import React from 'react'

function OpenAccount() {
    return (  
        <div className='container p-5 mb-5'>
        <div className='row text center fs-6'>       
        <h1 className='mt-5' style={{textAlign:"center"}}> Open a Trade Account</h1>
        <p style={{textAlign:"center"}}>Modern platform and apps, $0 investments, and flat $20 intraday and F&O trades </p>
       <button
  className="p-1 btn btn-primary fs-6 mb-5"
  style={{ width: "30%", margin: "0 auto" }}
  onClick={() => window.location.href = 'http://localhost:3001/signup'}
>
  Signup Now
</button>
            </div>
    </div>
    );
}

export default OpenAccount;