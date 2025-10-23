// import React from 'react'

// function Footer() {
//     return (  

//         <footer  style={{backgroundColor:"rgba(240,240,240"}}> 
//        <div className='container border-top mt-5'>
//         <div className='row mt-5'>
//             <div className='col'>
//                 <img src="media/logo.png" style={{width:"50%"}}/>
//                 <p>
//                      &copy;2010-2024 , Not trade broking Ltd. All right reserved.
//                      </p>
//             </div>
//              <div className='col'>
//                 <p>Company</p>
//                 <a href="" >About</a> <br/> 
//                   <a href="" >Products</a> <br/>
//                     <a href="">Pricing</a> <br/>
//                       <a href="">Referral programme</a> <br/>
//                         <a href="" >Careers</a> <br/>
//                           <a href="" >zerodha.tech</a> <br/>
//                             <a href="">Press & media</a> <br/>
//                               <a href="" >zerodha cares (CSR)</a> <br/>
//              </div>
//               <div className='col'>
//                 <p>Support</p>
//                  <a href="">Contacts</a> <br/> 
//                  <a href="" >Support portal</a> <br/> 
//                   <a href="">Z-connect blog</a> <br/>
//                     <a href="">List of charges</a> <br/>
//                       <a href="">Download & resources</a> <br/>
//               </div>
//                <div className='col'>
//                 <p>Account</p>
//                  <a href="">Open an account</a> <br/> 
//                   <a href="">Fund transfer</a> <br/>
//                     <a href="">60 day challenges</a> <br/>
//                </div>
//         </div>


//         <div className='mt-5 fs-6 text-small text-muted'> 
//         <p>The zerodha app maintains a clean and minimal interface, where important links and information are placed thoughtfully within specific sections such as “Account” or “Support.” Instead of displaying certain details across all screens, elements like legal policies, privacy terms, and app version info appear only when relevant to the user’s current activity or location in the app.</p>

//         <p>To conserve space and maintain clarity, Trade Easy avoids using any fixed bottom sections for navigation or information. Instead, key actions are available through navigation menus or floating buttons, allowing users to focus on trading without unnecessary distractions.</p>

//         <p>Sections like “About,” “Support,” and “Terms & Conditions” are typically found under the “Account” area or similar pages. These components are displayed only when users choose to access those parts of the app, rather than being shown across every screen.</p>

//         <p>If you're looking for specific links or features and can't locate them, it's helpful to explore the different pages within the app or reach out to Trade Easy’s support team. Their help section and official documentation can also provide clarity on where certain elements are placed and how to access them.</p>
//          </div>

      

//        </div>
//        </footer>
//     );
// }

// export default Footer;





// import React from 'react';


// function Footer() {
//   const handleDummyClick = (e) => e.preventDefault(); // placeholder links

//   return (
//     <footer style={{ backgroundColor: "rgba(240,240,240,1)" }}>
//       <div className='container border-top mt-5'>
//         <div className='row mt-5'>
//           <div className='col'>
//             <img src="media/logo.png" alt="TradeEasy Logo" style={{ width: "50%" }} />
//             <p> Trade_Easy (working-phase-2025) All rights reserved.</p>
//           </div>

//           <div className='col'>
//             <p>Company</p>
//             <a href="#" onClick={handleDummyClick}>About</a> <br />
//             <a href="#" onClick={handleDummyClick}>Products</a> <br />
//             <a href="#" onClick={handleDummyClick}>Pricing</a> <br />
//             <a href="#" onClick={handleDummyClick}>Referral programme</a> <br />
//             <a href="#" onClick={handleDummyClick}>Careers</a> <br />
//             <a href="#" onClick={handleDummyClick}>TradeEasy.tech</a> <br />
//             <a href="#" onClick={handleDummyClick}>Press & media</a> <br />
//             <a href="#" onClick={handleDummyClick}>TradeEasy Cares (CSR)</a> <br />
//           </div>

//           <div className='col'>
//             <p>Support</p>
//             <a href="#" onClick={handleDummyClick}>Contacts</a> <br />
//             <a href="#" onClick={handleDummyClick}>Support portal</a> <br />
//             <a href="#" onClick={handleDummyClick}>Z-connect blog</a> <br />
//             <a href="#" onClick={handleDummyClick}>List of charges</a> <br />
//             <a href="#" onClick={handleDummyClick}>Download & resources</a> <br />
//           </div>

//           <div className='col'>
//             <p>Account</p>
//             <a href="#" onClick={handleDummyClick}>Open an account</a> <br />
//             <a href="#" onClick={handleDummyClick}>Fund transfer</a> <br />
//             <a href="#" onClick={handleDummyClick}>60 day challenges</a> <br />
//           </div>
//         </div>

//         <div className='mt-5 fs-6 text-small text-muted'>
//           <p>The TradeEasy app maintains a clean and minimal interface, where important links and information are placed thoughtfully within specific sections such as “Account” or “Support.” Instead of displaying certain details across all screens, elements like legal policies, privacy terms, and app version info appear only when relevant to the user’s current activity or location in the app.</p>

//           <p>To conserve space and maintain clarity, TradeEasy avoids using any fixed bottom sections for navigation or information. Instead, key actions are available through navigation menus or floating buttons, allowing users to focus on trading without unnecessary distractions.</p>

//           <p>Sections like “About,” “Support,” and “Terms & Conditions” are typically found under the “Account” area or similar pages. These components are displayed only when users choose to access those parts of the app, rather than being shown across every screen.</p>

//           <p>If you're looking for specific links or features and can't locate them, it's helpful to explore the different pages within the app or reach out to TradeEasy’s support team. Their help section and official documentation can also provide clarity on where certain elements are placed and how to access them.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgba(240,240,240,1)" }}>
      <div className='container border-top mt-5'>
        <div className='row mt-5'>
          <div className='col'>
            <img src="media/logo.png" alt="TradeEasy Logo" style={{ width: "50%" }} />
            <p> Trade_Easy (working-phase-2025) All rights reserved.</p>
          </div>

          <div className='col'>
            <p>AboutTadeEasy</p>
            <Link to="/pages/accounts">Account</Link><br />
            <Link to="/pages/blogs">Blogs</Link><br />
            <Link to="/pages/charges">Charges</Link><br />
            <Link to="/pages/challenges">Challenges</Link><br />
             <Link to="/pages/funds">Funds</Link><br />
          </div>

          <div className='col'>
            <p>Stocks Terms</p>
             <Link to="/pages/documentation">Trade-Easy(Documentation)</Link><br />
            <Link to="/pages/positions">Positions</Link><br />
            <Link to="/pages/hold">Holding</Link><br />
            <Link to="/pages/ipo">IPO</Link><br />
             <Link to="/pages/trade">Trade</Link><br />
             <Link to="/pages/intraday">Intraday</Link><br />
             <Link to="/pages/longterm">LongTerm</Link><br />
          </div>

          <div className='col'>
            <p>Must Aware</p>
            <Link to="/pages/machine">MachineML</Link><br />
            <Link to="/pages/reduceml">Reduce-Cost</Link><br />
            <Link to="/pages/savetime">Save-Time</Link><br />
            <Link to="/pages/whywe">WhyWe</Link><br />
           
          </div>
        </div>

        <div className='mt-5 fs-6 text-small text-muted'>
       <p>
With its intuitive interface and seamless user experience, TradeEasy caters to both beginner and experienced traders. The platform simplifies complex market analysis and presents insights in a clear and actionable form. Users can monitor trends, track predictions, and execute trades with greater flexibility and confidence. The goal is to eliminate unnecessary trading overheads and help clients retain more profit on every transaction.
</p>

<p>
TradeEasy also continues to evolve by training its models on diverse and real-time financial datasets. As more data is incorporated, the accuracy of predictions and recommendations improves. This ongoing enhancement ensures that clients stay ahead in the market and benefit from timely, data-backed investment opportunities. TradeEasy is not just a trading tool—it is a smart financial companion built to support long-term success.
</p>

<p>
The platform places a strong emphasis on transparency and security. All transactions, portfolio data, and trading recommendations are processed with high standards of encryption and data protection. Users can trust that their financial information remains confidential while still accessing powerful analytical tools for optimal trading decisions.
</p>

<p>
Additionally, TradeEasy empowers users through education and insights. Alongside real-time predictions, the platform provides articles, tutorials, and market analyses to help traders understand the rationale behind recommendations. By combining actionable insights with continuous learning, TradeEasy ensures that clients grow both their wealth and their financial knowledge.
</p>


        </div>
      </div>
    </footer>
  );
}

export default Footer;
