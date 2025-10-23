import React from 'react'

function Hero() {
    return ( 
       <section className='container-fluid' id='supportHero'>
        <div className='p-5' id='supportWrapper'>
            <h4>Support Portal</h4>
            <a href=''>Track Tickets</a>
        </div>


         <div className='row p-5 mx-5 my-5'>
            <div className='col-6 p-5'>
                <h2 className='fs-'>Search for an answer or browse help topics to create a tickets</h2>
                <input  placeholder='Eg.how do I activate F&O why is my order getting rejected...'/> <br/>
                
               <a href=''> Track account opening </a>&nbsp; &nbsp;
               <a href=''> Intraday margins</a> &nbsp; &nbsp;
               <a href=''> Track segment activation</a> &nbsp; &nbsp; 
               <a href=''> Kite user normal</a>
                
            </div>
            <div className='col-6 p-5'>
                 <h1> Featured</h1>
                 <ol>
                    <li><a href=''style={{lineHeight:"2"}}> Current Takeovers and Delisting - January 2024</a></li>&nbsp;&nbsp;
                    <li> <a href=''> Latest intraday leverages - MIS & Co </a> <br/></li>
                 </ol>
                 
              
            </div>
           
        </div>
       </section>
     );
}

export default Hero;
