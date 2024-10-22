import React from 'react'
import OffCanvas from './OffCanvas.js'
import DelayedCharacters from './DelayedCharacters.js'
import HeaderTwo from '../partials/headerTwo.js'
import {Url} from '../../../providers/APIUrlProvider.js'
function Header(){
    const {url} = Url()
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
                    <div className='col-12 col-xxl-7 px-0 my-2'>
                        <div className={`card text-white bg-dark border-0 shadow-sm`} style={{minHeight:"100%", '--bs-bg-opacity':'0'}}>
                            <div className='card-body d-flex flex-column justify-content-between'>
                                <HeaderTwo title='*Annoucement* Welcome to JessePiccione Mark II!'/>
                                <div className={`bg-opacity-0 border-0 shadow-sm`} style={{minHeight:"100%"}}>
                                    <div className='d-flex flex-column justify-content-between'>
                                        <p>Welcome to the Mark II of JessePiccione.info.
                                        <br/>
                                        Now utilizing server side rendering with React.js
                                        <br/>
                                        <a id='annoucement-link' className='card-text' href={url}>Original Django Application</a>
                                        </p>                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </header>
    );
};
export default Header;