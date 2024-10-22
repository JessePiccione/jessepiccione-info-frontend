//React
import React, {useState, useEffect} from 'react'
//Providers
import {Url} from '../../../../../providers/APIUrlProvider.js'
import Card from '../../../../../providers/Card.js'
//Components
import PlaceHolder from '../../placeholder/PlaceHolder.js'
//partials
import HeaderTwo from '../../../partials/headerTwo.js'
import ListGroupItem from '../../../partials/listGroupItem.js'
//awardsAPI
import {loadAwards} from './awardsAPI.js'
function Awards(){
    const {url} = Url()
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const [error, setError] = useState(null)
    const [awards, setAwards] = useState(null)
    const fetchAwards = async () =>{
        try{
            setAwards(await loadAwards(url))
        }
        catch (error){
            setError(error)
        }
        finally{
            setAnimation(true)
            await new Promise((resolve)=>setTimeout(resolve,1000))
            setLoading(false)
        }
    }//eslint-disable-next-line 
    useEffect(()=>{fetchAwards()},[])
    return (loading ||awards)?(
        (loading)?<PlaceHolder className={(animation)?'transitionOut':''} />:
        <div className='row transitionIn justify-content-md-center'>
            <div className='col-12 col-xxl-6 pt-3'>
                <Card>
                    <HeaderTwo title='Awards & Certifications'/>
                    <div className='rounded shadow-sm p-2'>
                        <ul className='list-group'>
                            {
                                awards.map(item=><ListGroupItem  key={item.title+'-outer'} name={item.title} text={`${item.title} - ${item.year}`}/>)
                            }
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    ):(
        <div className='row transitionIn'>
            <div className='col-12'>
                <Card>
                    {error.message}
                </Card>
            </div>
        </div>
    )
}
export default Awards;