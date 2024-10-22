//react 
import React, {useState, useEffect} from 'react'
//providers 
import {Url} from '../../../../../providers/APIUrlProvider.js'
import Card from '../../../../../providers/Card.js'
//components
import PlaceHolder from '../../placeholder/PlaceHolder.js'
//partials
import HeaderTwo from '../../../partials/headerTwo.js'
import ListGroupItem from '../../../partials/listGroupItem.js'
//api
import {loadExperience} from './experienceAPI.js'
function Experience(props){
    const {url} = Url();
    const [experience, setExperience] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const fetchExperience = async () =>{
        try {
            setExperience(await loadExperience(url))
        }
        catch (error) {
            setError(error)
        }
        finally {
            setAnimation(true)
            await new Promise(resolve => setTimeout(resolve, 1000))
            setLoading(false)
        }
    }//eslint-disable-next-line 
    useEffect(()=>{fetchExperience()}, [])
    return (loading || experience)?
        (loading?
            <PlaceHolder className={(animation)?'transitionOut':''}/>:
            <div className='row transitionIn justify-content-md-center'>
                {
                    experience.map((obj)=>{
                        return (
                            <div key={obj.title_held} className='col-12 col-xxl-6 pt-3'>
                                <Card>
                                    <HeaderTwo title={obj.title_held}/>
                                    <div className='rounded shadow-sm p-2'>
                                        <ul className='list-group'>
                                            <ListGroupItem text={`${obj.company_name} - ${obj.location}`}/>
                                            <ListGroupItem text={`${obj.start_date} - ${obj.end_date}`}/>
                                            <ListGroupItem text={`${obj.description}`}/>
                                        </ul>
                                    </div>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
    ):(
         <div className='col-12 pt-3'>
            <Card>
                {error.message}
            </Card>
        </div>
    )
}
export default Experience;