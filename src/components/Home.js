
import React, { useState, useEffect } from 'react'
import {Url} from  '../providers/APIUrlProvider.js'
import Card from  '../providers/Card.js'
import PlaceHolder from './PlaceHolder.js'
import HeaderTwo from './headerTwo.js'
import TextCard from './textCard.js'
import HiddenTechnologyList from './HiddenTechnologyList.js'
import Iframe from './iframe.js'
function Home(props){
    const {url,token} = Url()
    const [data, setData] = useState(null)
    const [loadingHome, setLoadingHome] = useState(true)
    const [requestHome, setRequestHome] = useState(false)
    const [error, setError] = useState(null)    
    const [technology, setTechnology] = useState('')
    const [loadingTech, setLoadingTech] = useState(true)
    const [requestTech, setRequestTech] = useState(false)
    const [animation, setAnimation] = useState(false)
    useEffect(()=>{
        if(!requestTech){ 
            const fetchTech = async () =>{
                try{
                    setRequestTech(true)
                    const response = await fetch(url+'api/technology/',{method:"GET",headers:{
                        'Authorization':`Token ${token}`
                      }})
                    const result = await response.text()
                    setTechnology(result)
                    
                    setLoadingTech(false)
                    
                }
                catch(e){
                    setError(error)
                }
                finally{
                    if(!requestHome){
                        const fetchHome = async () =>{
                            try {
                               const response = await fetch(url+'api/home/')
                               const result = await response.json()
                               setRequestHome(true)
                               setData(result)
                           }
                           catch (error){
                               setError(error)
                           }
                           finally{
                               setAnimation(true)
                               await new Promise(resolve=>setTimeout(resolve, 1000))
                               setLoadingHome(false)
                           }
                       };
                       fetchHome();
                    }
                }
            }
            fetchTech();
        }
    })
    if((data && technology.length>0) || (loadingHome)){
        return (
            (loadingHome || loadingTech)?<PlaceHolder className={(animation)?"transitionOut":''}/>:
            <div className='row transitionIn justify-content-md-center'>
                {
                    data.map((obj)=>{
                            return (
                            <div key={obj.title} className='col-12 col-xxl-6 pt-3'>
                                <Card> 
                                    <HeaderTwo title={obj.title}/>
                                    <TextCard text={obj.description}/>
                                    <HiddenTechnologyList id={obj.id} technology={technology.toString()} buttonText={'Technology Used Here...'}/>
                                    <Iframe URL={obj.URL}/>
                                </Card>
                            </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
    if(error){
        return (
            <div className='col-12 pt-3'>
            <Card>
                {error.message}
            </Card>
            </div>        
        )
    }
}   
export default Home;