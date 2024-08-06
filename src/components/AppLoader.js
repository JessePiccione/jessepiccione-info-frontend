//react
import React, {useEffect, useState} from 'react'
import '../App.css'
//providers
import APIUrlProvider from '../providers/APIUrlProvider.js'
import Card from '../providers/Card.js'
//components
import VantaBackground from './VantaBackground.js'
import Assistant from './Assistant.js'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import HeaderTwo from './HeaderTwo.js'
function AppLoader() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(()=>{
    const wakeUpCall = async () =>{
      if(!ignore){
        try{
          const request = await fetch('https://jessepiccione-info-backend.ue.r.appspot.com')
          await request.text()
        }
        catch (error) {
          setError(error)
        }
        finally{
          await new Promise(resolve=> setTimeout(resolve, 2000))
          setLoading(false)
        }
      }
    }
    let ignore = false
    wakeUpCall();
    return () => {
      ignore=true
    }
  },[])
  if(loading || error) return(
    <div className='row app'>
      <div className="col-12 d-flex primary-color bg-gradient" style={{height:'100vh'}}>
        <div className='col-10 col-xxl-6 m-auto'>
          <Card>
            <HeaderTwo title={(error)?error.message:'Initiating Backend Services...'}/>
            <img className='img-fluid m-auto rounded-profile rotate' style={{
              minHeight:'250px',
              minWidth:'250px'
            }} alt='' src = 'static/img/resume_site_profile.jpg'/>
          </Card>
        </div>
      </div>
    </div>
  )
  return (
    <div className="App">
      <VantaBackground/>
      <APIUrlProvider>
        <Header/>
        <Main/>
        <Assistant/>
        <Footer/>
      </APIUrlProvider>
      
    </div>
  )
}
export default AppLoader