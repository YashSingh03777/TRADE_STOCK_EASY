import React from 'react'

function Stats() {
    return (
        
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2'> Trust with confidence </h1>
                    
                    <h2 className='fs-4'> Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ core customers trust trade platform with rupees 3.5+ lakh crore worth of equally investments</p>

                    <h2 className='fs-4'> No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks , spam, "gamification", or annoying push notification. High quality apps that you use at your pace , the way you like</p>
                    <h2 className='fs-4'> The Trade Universe </h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem.our investments in 30+ fintech startups offer you tailored services specific to your needs</p>

                    <h2 className='fs-4'> Do better with money </h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch , we don't just facilitate transaction , but actively help you do better with your money</p>
                </div>

                 <div className='col-6'>
                    <img src='media/images/media/ecosystem.png' alt='ecosystem_Image' style={{width:"90%"}}/>
                    <div className='text-center'>

    <a href='' className='mr-5' style={{textDecoration:"none"}}> Explore our products <i class="fa-solid fa-arrow-right-long"></i> </a> 
    <a href='' style={{textDecoration:"none"}}> Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                 </div>
                 </div>

            </div>
        </div>
        
    );
}

export default Stats;