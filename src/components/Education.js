//React
import React, {useState, useEffect} from 'react'
//Providers
import Card from '../providers/Card.js'
import {Url} from '../providers/APIUrlProvider.js'
//Components
import PlaceHolder from './PlaceHolder.js'
import HeaderTwo from './headerTwo.js'
import ListGroupItem from './listGroupItem.js'
function Education(){   
    const {url,token} = Url()
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const [requestEducation, setRequestEducation] = useState(false)
    useEffect(()=>{
        if(!requestEducation){
            const fetchEducation = async () => {    
                try{
                    setRequestEducation(true)
                    const request = await fetch(url+'api/education/',{method:"GET",headers:{
                        'Authorization':`Token ${token}`
                    }})
                    const response = await request.json();
                    setAnimation(true)
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    setData(response)
                }
                catch (error){
                    setError(error)
                }
                finally{
                    setLoading(false)
                }
            }
            fetchEducation();
        }
        
    })
    if(loading || data) return (
        (loading)?<PlaceHolder className={(animation)?'transitionOut':''}/>:
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
    )
    if (error) return (
        <div className='row'>
            <div className='col-12 pt-3'>
                <Card>{error.message}</Card>
            </div>
        </div>
    )
}
export default Education;