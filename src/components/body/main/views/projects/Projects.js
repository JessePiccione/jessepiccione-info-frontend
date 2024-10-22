//React
import React, {useState, useEffect} from 'react' 
//Providers
import {Url} from '../../../../../providers/APIUrlProvider.js'
import Card from '../../../../../providers/Card.js'
//components
import PlaceHolder from '../../placeholder/PlaceHolder.js'
import HeaderTwo from '../../../partials/headerTwo.js'
import ListGroupItem from '../../../partials/listGroupItem.js'
//api
import {loadProjects} from './projectsAPI.js'
function Projects(){
    const {url} = Url();
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const fetchProjects = async () =>{
        try{
            setData(await loadProjects(url))
        }
        catch (error){
            setError(error)
        }
        finally{
            setAnimation(true)
            await new Promise(resolve => setTimeout(resolve, 1000))
            setLoading(false)
        }
    }//eslint-disable-next-line
    useEffect(()=>{fetchProjects()},[])
    return (data || loading)?(
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
    ):(
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