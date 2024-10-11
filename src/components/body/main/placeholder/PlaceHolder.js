import React from 'react'
function PlaceHolder(props){
    return (
        <div className={`row justify-content-md-center ${props.className}`}>
            
            <div className='col-12 col-xxl-6 pt-3'>
                <div className='card bg-white bg-opacity-75 shadow-sm border-0'>
                    <div className='card-body'>
                        <div className='shadow-sm rounded' >
                            <h2 className='text-center p-3 placeholder-wave'>
                                <div className='placeholder rounded col-4'></div>
                            </h2>
                        </div>
                    
                        <div className='card bg-white bg-opacity-75 border border-0 shadow-sm'>
                            <div className='card-body'>
                                <div className='card-text text-center placeholder-wave'>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className='placeholder rounded col-7'></div>
                                    <div className='placeholder rounded col-3'></div>
                                    <div className='placeholder rounded col-4'></div>
                                    <div className='placeholder rounded col-4'></div>
                                    <div className='placeholder rounded col-6'></div>
                                    <div className='placeholder rounded col-2'></div>
                                    <div className='placeholder rounded col-7'></div>
                                    <div className='placeholder rounded col-4'></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                        </div>
                        <div className='text-center ratio ratio-16x9 placeholder-wave'>
                            <div className='placeholder col'></div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='col-12 col-xxl-6 pt-3'>
                <div className='card bg-white bg-opacity-75 shadow-sm border-0'>
                    <div className='card-body'>
                        <div className='shadow-sm rounded' >
                            <h2 className='text-center p-3 placeholder-wave'>
                                <div className='placeholder rounded col-4'></div>
                            </h2>
                        </div>
                    
                        <div className='card bg-white bg-opacity-75 border border-0 shadow-sm'>
                            <div className='card-body'>
                                <div className='card-text text-center placeholder-wave'>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className='placeholder rounded col-7'></div>
                                    <div className='placeholder rounded col-3'></div>
                                    <div className='placeholder rounded col-4'></div>
                                    <div className='placeholder rounded col-4'></div>
                                    <div className='placeholder rounded col-6'></div>
                                    <div className='placeholder rounded col-2'></div>
                                    <div className='placeholder rounded col-7'></div>
                                    <div className='placeholder rounded col-4'></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                        </div>
                        <div className='text-center ratio ratio-16x9 placeholder-wave'>
                            <div className='placeholder col'></div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PlaceHolder;