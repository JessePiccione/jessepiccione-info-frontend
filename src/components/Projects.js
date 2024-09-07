//React
import React, {useState, useEffect} from 'react' 
//Providers
import {Url} from '../providers/APIUrlProvider.js'
import Card from '../providers/Card.js'
//components
import PlaceHolder from './PlaceHolder.js'
import HeaderTwo from './headerTwo.js'
import ListGroupItem from './listGroupItem.js'
function Projects(){
    const {url,token} = Url();
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [requestProjects, setRequestProjects] = useState(false)
    useEffect(()=>{
        const fetchProjects = async() =>{
            if(!requestProjects){
                try{
                    setRequestProjects(true)
                    const request = await fetch(url+'api/projects/',{method:"GET",headers:{
                        'Authorization':`Token ${token}`
                    }})
                    const response = await request.json()
                    setAnimation(true)
                    await new Promise(resolve => setTimeout(resolve, 1000))
                    setData(response)
                }
                catch (error){
                    setError(error)
                }
                finally{
                    setLoading(false)
                }
            }
        }
        fetchProjects();
    })
    if(data || loading) return (
        (loading)?<PlaceHolder className={(animation)?'transitionOut':''}/>:
        <div className='row justify-content-md-center transitionIn'>
            {
                data.map((item)=>{
                    return (
                        <div key={item.name} className='col-12 col-xxl-6 pt-3'>
                            <Card>
                                <HeaderTwo title={item.name}/>
                                <div className='col-12 bg-white shadow-sm rounded p-2'>
                                    <ul className='list-group'>
                                        <ListGroupItem text={item.sponser}/>
                                        <ListGroupItem text={`${item.start_date} - ${item.end_date}`}/>
                                        <ListGroupItem text={item.contribution}/>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
    if(error) return (
        <div className='row'>
            <div className='col-12 pt-3'>
                <Card>
                    <HeaderTwo title={error.message}/>
                </Card>
            </div>
        </div>
    )
}
export default Projects;