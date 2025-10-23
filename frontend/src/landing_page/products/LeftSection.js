import React from 'react'

function LeftSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
    tryDemo,
    googlePlay,
    appStore,
}) {
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-6 p-5'>
                    <img src={imageURL}
                        className='p5'
                    />
                </div>



                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
                        <a href={tryDemo}> Try Demo</a>
                        <a href={learnMore} style={{ marginLeft: "50px" }}>
                            Learn More
                        </a>
                    </div>

                    <div className='mt-3'>
                        <a href={googlePlay}>
                            <img src='media/images/media/googlePlayBadge.svg' alt='google_logo' />
                        </a>

                        <a href={appStore}>
                            <img src='media/images/media/appstoreBadge.svg'
                                style={{ marginLeft: "50px" }}
                                alt='app store' />
                        </a>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default LeftSection;
