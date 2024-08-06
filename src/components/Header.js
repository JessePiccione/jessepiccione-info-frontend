import React from 'react'
import OffCanvas from './OffCanvas.js'
import DelayedCharacters from './DelayedCharacters.js'
import AnnoucementBanner from './AnnoucementBanner.js'
function Header(){
    return(
        <header>
            <OffCanvas />
            <div className='container-fluid z-3'>
                <div className='row bg-black bg-gradient justify-content-md-center' style={{'--bs-bg-opacity':'0.75'}}>    
                    <div className='col-12 col-xxl-7 px-0'>
                        <div className='card text-white bg-black text-center rounded border-0 shadow-sm'  style={{'--bs-bg-opacity':'0'}}>
                            <div className='card-body rounded border-0 m-3 shadow-sm'>
                                <img className='rounded-profile my-3' style={{minHeight:'250px', minWidth:'250px'}} src="static/img/resume_site_profile.jpg" alt='round center profile'></img>
                                <h1  className='card-text' style={{'margin':'0'}}>
                                    <DelayedCharacters className='flip' word='Jesse Piccione'/>
                                </h1>
                                <h2 className='card-text' style={{'margin':'0'}}>
                                    <DelayedCharacters className='zip' word='Software Engineer'/>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <AnnoucementBanner/>
                </div>
            </div>  
        </header>
    );
};
export default Header;