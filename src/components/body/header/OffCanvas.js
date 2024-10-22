//react
import React, {useState, useEffect} from 'react'
//providers
import {Url} from '../../../providers/APIUrlProvider.js'
function OffCanvas(){
    const {url,token} = Url()
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [form, setForm] = useState(null)
    useEffect(()=>{
        const fetchMessageForm = async () =>{
                try {
                    setSent(true)
                    const request = await fetch(url+'message/',{method:"GET",headers:{
                        'Authorization':`Token ${token}`
                      }})
                    const response = await request.text()
                    setForm(response)
                }
                catch (error){
                    setError(error)
                }
                finally {
                    setLoading(false)
                }
        }   
        if(!sent) fetchMessageForm();
    })
    if(loading || form ) return (   
        <div className='offcanvas offcanvas-bottom bg-light' data-bs-auto-close='true' style={{minHeight:'90vh'}} tabIndex='-1' id='offCanvasForm' aria-labelledby="offCanvasFormLabel" >
        <div className='offcanvas-header primary-color bg-gradient m-2 mb-0'>
            <h3 className='offcanvas-title text-white text-center' id='offCanvasFormLabel'>Leave a Message</h3>
            <button type='button' className='btn-close btn-close-white' data-bs-dismiss='offcanvas' aria-label="Close" data-bs-theme='light'></button>
        </div>
        <div className='offcanvas-body'>
            <form id='messageForm' className='text-black px-3' data-bs-theme='light' onSubmit={(event)=>{
                event.preventDefault()
                const sendMessage = async (event) =>{
                    try{
                        const request = await fetch(url+'message/',{
                            method:'POST',
                            headers:{
                                'Authorization':'Token '+token
                            },
                            body: new FormData(event.target)
                        })
                        await request.text();
                        alert(request.status+' Message Recieved Successfully')
                        const offCanvas = document.getElementById('offCanvasForm');
                        offCanvas.classList.add('hiding');
                        await new Promise(resolve => setTimeout(resolve,500));
                        offCanvas.classList.remove('show','hiding');
                        offCanvas.ariaModal = null
                        offCanvas.role = null
                        document.getElementsByClassName('offcanvas-backdrop')[0].remove()
                        document.getElementsByTagName('body')[0].style = ''
                        
                    }
                    catch (error) {
                        alert()
                        setError(error)
                    }
                    finally{
                        setForm(null)
                        setSent(false)
                        setLoading(true)
                    }
                }
                sendMessage(event);
            }}>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-xxl-8'>
                        <div className='row d-flex flex-column text-start  m-0 p-0' dangerouslySetInnerHTML={{__html:form}}></div>
                        <button type='submit' className='text-white btn btn-dark btn-gradient primary-color my-1' ><h5>Send Message</h5></button>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
    );
    if (error) return(
        <div className='offcanvas offcanvas-bottom bg-light' style={{minHeight:'90vh'}} tabIndex='-1' id='offCanvasForm' aria-labelledby="offCanvasFormLabel" >
            <div className='offcanvas-header primary-color bg-gradient m-2 mb-0'>
                <h3 className='offcanvas-title text-white' id='offCanvasFormLabel'>Leave a Message</h3>
                <button type='button' className='btn-close btn-close-white' data-bs-dismiss='offcanvas' aria-label="Close" data-bs-theme='light'></button>
            </div>
            <div className='offcanvas-body'>
                <form id='messageForm' className='row text-black px-3' method='POST' action='/message/' data-bs-theme='light'>
                    {(error)?error.message:'loading form'}
                    <div className='col m-0 p-0'>
                        <button type='submit' className='text-white btn btn-dark btn-gradient primary-color my-1'><h5>Send Message</h5></button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default OffCanvas;