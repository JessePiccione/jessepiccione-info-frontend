//React
import React, {useState, useEffect} from 'react'
//Providers
import Card from '../../../../../providers/Card.js'
import {Url} from '../../../../../providers/APIUrlProvider.js'
//Components
import PlaceHolder from '../../placeholder/PlaceHolder.js'
//partials
import HeaderTwo from '../../../partials/headerTwo.js'
import ListGroupItem from '../../../partials/listGroupItem.js'
//api
import {loadEducation} from './educationAPI.js'
function Education(){   
    const {url} = Url()
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const fetchEducation = async () => {    
        try{
            setData(await loadEducation(url))
        }
        catch (error){
            setError(error)
        }
        finally{
            setAnimation(true)
            await new Promise(resolve => setTimeout(resolve, 1000));
            setLoading(false)
        }
    }//eslint-disable-next-line 
    useEffect(()=>{fetchEducation()},[])
    return (loading || data)? 
        (loading?<PlaceHolder className={(animation)?'transitionOut':''}/>:
        <div className='row transitionIn'>
            {
                data.map((item)=>{
                    return (
                        <div key={item.degree_type} className='col-12 col-xxl-6 pt-3'>
                            <Card>
                                <HeaderTwo title={item.degree_type}/>
                                <div className='col-12 bg-white rounded shadow-sm p-2'>
                                    <ul className='list-group'>
                                        <ListGroupItem text={item.school_name}/>
                                        <ListGroupItem text={item.location}/>
                                        <ListGroupItem text={`${item.start_date} - ${item.end_date}`}/>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    ):(
        <div className='row'>
            <div className='col-12 pt-3'>
                <Card>{error.message}</Card>
            </div>
        </div>
    )
}
export default Education;