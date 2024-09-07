import React, {useState, useEffect} from 'react'
import {Url} from '../providers/APIUrlProvider.js'
import PlaceHolder from './PlaceHolder.js'
import Card from '../providers/Card.js'
import HeaderTwo from './headerTwo.js'
import ListGroupItem from './listGroupItem.js'
function Experience(props){
    const {url,token} = Url();
    const [experience, setExperience] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    

    useEffect(()=>{
        const fetchExperience = async () =>{
            if(loading && !animation && !experience){
                try {
                    const request = await fetch(url+'api/work/experience/',{method:"GET",headers:{
                        'Authorization':`Token ${token}`
                    }})
                    const response = await request.json()
                    setAnimation(true)
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    setExperience(response)
                }
                catch (error) {
                    setError(error)
                }
                finally {
                    setLoading(false)
                }
            }
        }
        fetchExperience();
    })
    if (loading || experience) {
        return (loading)?<PlaceHolder className={(animation)?'transitionOut':''}/>:
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
            );
        })
        }
        </div>
    }
    if(error){
        return (
            <Card>
                {error.message}
            </Card>
        )
    }
}
export default Experience;