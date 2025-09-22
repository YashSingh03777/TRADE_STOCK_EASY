import React from 'react'

function Footer() {
    return (  

        <footer  style={{backgroundColor:"rgba(240,240,240"}}> 
       <div className='container border-top mt-5'>
        <div className='row mt-5'>
            <div className='col'>
                <img src="media/logo.png" style={{width:"50%"}}/>
                <p>
                     &copy;2010-2024 , Not trade broking Ltd. All right reserved.
                     </p>
            </div>
             <div className='col'>
                <p>Company</p>
                <a href="" >About</a> <br/> 
                  <a href="" >Products</a> <br/>
                    <a href="">Pricing</a> <br/>
                      <a href="">Referral programme</a> <br/>
                        <a href="" >Careers</a> <br/>
                          <a href="" >zerodha.tech</a> <br/>
                            <a href="">Press & media</a> <br/>
                              <a href="" >zerodha cares (CSR)</a> <br/>
             </div>
              <div className='col'>
                <p>Support</p>
                 <a href="">Contacts</a> <br/> 
                 <a href="" >Support portal</a> <br/> 
                  <a href="">Z-connect blog</a> <br/>
                    <a href="">List of charges</a> <br/>
                      <a href="">Download & resources</a> <br/>
              </div>
               <div className='col'>
                <p>Account</p>
                 <a href="">Open an account</a> <br/> 
                  <a href="">Fund transfer</a> <br/>
                    <a href="">60 day challenges</a> <br/>
               </div>
        </div>


        <div className='mt-5 fs-6 text-small text-muted'> 
        <p>The zerodha app maintains a clean and minimal interface, where important links and information are placed thoughtfully within specific sections such as “Account” or “Support.” Instead of displaying certain details across all screens, elements like legal policies, privacy terms, and app version info appear only when relevant to the user’s current activity or location in the app.</p>

        <p>To conserve space and maintain clarity, Trade Easy avoids using any fixed bottom sections for navigation or information. Instead, key actions are available through navigation menus or floating buttons, allowing users to focus on trading without unnecessary distractions.</p>

        <p>Sections like “About,” “Support,” and “Terms & Conditions” are typically found under the “Account” area or similar pages. These components are displayed only when users choose to access those parts of the app, rather than being shown across every screen.</p>

        <p>If you're looking for specific links or features and can't locate them, it's helpful to explore the different pages within the app or reach out to Trade Easy’s support team. Their help section and official documentation can also provide clarity on where certain elements are placed and how to access them.</p>
         </div>

      

       </div>
       </footer>
    );
}

export default Footer;