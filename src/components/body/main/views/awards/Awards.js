//React
import React, {useState, useEffect} from 'react'
//Providers
import {Url} from '../../../../../providers/APIUrlProvider.js'
import Card from '../../../../../providers/Card.js'
//Components
import PlaceHolder from '../../placeholder/PlaceHolder.js'
import HeaderTwo from '../../../partials/headerTwo.js'
import ListGroupItem from '../../../partials/listGroupItem.js'
function Awards(){
    const {url,token} = Url()
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const [error, setError] = useState(null)
    const [awards, setAwards] = useState(null)
    const [requestAwards, setRequestAwards] = useState(false)
    useEffect(()=>{
        const fetchAwards = async () =>{
            if(!requestAwards){
                try{
                    setRequestAwards(true)
                    const request = await fetch(url+'api/award',{method:"GET",headers:{
                        'Authorization':`Token ${token}`
                      }})
                    const response = await request.json()
                    setAnimation(true)
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    setAwards(response)
                }
                catch (error){
                    setError(error)
                }
                finally{
                    setLoading(false)
                }
            }
        }
        fetchAwards()
    })
    if (loading ||awards) return (
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
    )
    if(error) return (
        <div className='row transitionIn'>
            <div className='col-12'>
                <Card>

                </Card>
            </div>
        </div>
    )
}
export default Awards;