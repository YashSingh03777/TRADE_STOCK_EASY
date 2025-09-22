import React from 'react';

function CreateTicket() {
  return (
    <div className='container '>
      <div className='row p-5 mt-5 mb-5'>
        <h1 className='fs-2 text-center '>To create a ticket, select a relevant topic</h1>

        {/* Column 1 */}
        <div className='col-4 p-4 mt-5'>
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Online Account Opening</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Offline Account Opening</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Company, Partnership and HUF Account</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Opening</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>NRI Account Opening</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Charges at Trade Easy</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Trade Easy IDFC FIRST Bank 3-in-1 Account</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Getting Started</a><br />
        </div>

        {/* Column 2 */}
        <div className='col-4 p-4 mt-5'>
          <h4>
           <i class="fa-solid fa-user"></i> Your Trade Easy Account
          </h4>
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Login Credentials</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Account Modification and Segment Addition</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>DP ID and bank Details</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Your Profile</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Transfer and Conversion of Shares</a><br />
        </div>

        {/* Column 3 */}
        <div className='col-4 p-4 mt-5'>
          <h4>
           <i class="fa-solid fa-arrow-trend-up"></i> Trading & Platforms
          </h4>
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Margin/Leverage, Product Types</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Kite Web and Mobile</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Trading FAQs</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Corporate Actions</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Sentinel</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Kite API</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Pi and Other Platforms</a><br />
          <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Stock/Reports+</a><br />
        </div>
      </div>


         <div className='row p-5 mt-5 mb-5'>


  {/* Column 1 */}
  <div className='col-4 p-4 '>
    <h4><i class="fa-solid fa-wallet"></i> Funds</h4>
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Adding Funds</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Fund withdraw</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>eMandates</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Adding Bank Account</a><br />
  </div>

  {/* Column 2 */}
  <div className='col-4 p-4 '>
    <h4><i><i class="fa-solid fa-terminal"></i></i> Console</h4>
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Reports</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Ledger</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Portfolio</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>60 Day challenges</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>IPO</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Referral program</a><br />
  </div>

  {/* Column 3 */}
  <div className='col-4 p-4 '>
    <h4><i class="fa-solid fa-coins"></i> Coin</h4>
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Understanding mutual funds</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>About coin</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Buying and Selling through coin</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Starting an SIP</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Managing your portfolio</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Coin App</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Moving to coin</a><br />
    <a href='' style={{ textDecoration: "none", lineHeight: "2" }}>Government Securities</a><br />
  </div>
</div>


    </div>
  );
}

export default CreateTicket;
