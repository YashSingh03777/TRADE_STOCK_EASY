import React from 'react'

function NotFound() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text center fs-6'>
                <h1 className='mt-5' style={{ textAlign: "center" }}> 404 Not Found</h1>

                <p style={{ textAlign: "center" }}>
                    Sorry, the page you are looking for does not exist.
                     </p>

                <button className='p-1 btn btn-primary fs-6 mb-5' style={{ width: "30%", margin: "0 auto" }}>Go Home</button>
            </div>
        </div>
    );
}

export default NotFound;