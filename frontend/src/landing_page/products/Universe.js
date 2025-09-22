import React from 'react'

function Universe() {
    return (  
         <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Trade Easy Universe</h1>
                <p className='text-muted'>Extend your trading and investment experience even further with your partner platform</p>
               
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/media/smallcaseLogo.png" width="50%" />
                    <p className='text-small text-muted'>Thematic investment platforms</p>
                </div>

                 <div className='col-4 p-3 mt-5'>
                    <img  src="media/images/media/streakLogo.png" width="50%" />
                    <p className='text-small text-muted' >Algo & Strategy Platform</p>
                </div>

                 <div className='col-4 p-3 mt-5'>
                    <img src="media/images/media/sensibullLogo.svg" width="50%" />
                    <p className='text-small text-muted'>Options trading Platfoms</p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/media/zerodhaFundhouse.png" width="50%" />
                    <p className='text-small text-muted'>Assest management</p>
                </div>

                 <div className='col-4 p-3 mt-5'>
                    <img src="media/images/media/goldenpiLogo.png" width="50%" />
                    <p className='text-small text-muted'>Bonds trading platform</p>
                </div>

                 <div className='col-4 p-3 mt-5'>
                    <img src="media/images/media/dittoLogo.png" width="50%" />
                    <p className='text-small text-muted'>Insurance</p>
                </div>

                <button className='p-1 btn btn-primary fs-6 mb-5'style={{width:"30%" , margin:"0 auto"}}>
                    Signup Now</button>

   

            </div>
        </div>
    );
}

export default Universe;
