//React
import React, {useState, useEffect} from 'react'
//Providers 
import {Url} from '../../../../../providers/APIUrlProvider.js'
//Components
import PlaceHolder from '../../placeholder/PlaceHolder.js'
import HeaderTwo from '../../../partials/headerTwo.js'
import ListGroupItem from '../../../partials/listGroupItem.js'
//api 
import {fetchCategories, fetchSkills} from './skillsAPI.js'
function Skills(){
    //provider state 
    const {url} = Url()
    //local state
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const [error, setError] = useState(null)
    const [categories, setCategories] = useState(null)
    const [skills, setSkills] = useState(null)
    //define function for intial side effect  
    const loadSkills = async () =>{
        try {
            setCategories(await fetchCategories(url))
            setSkills(await fetchSkills(url))
        }
        catch (error){
            setError(error)
        }
        finally{
            setAnimation(true)
            await new Promise(resolve => setTimeout(resolve,1000))
            setLoading(false)
        }
    }//eslint-disable-next-line 
    useEffect(()=>{loadSkills()},[])
    return (loading || (categories && skills))?(
        (loading)?<PlaceHolder className={(animation)?'transitionOut':''}/>:
        <div className='row transitionIn justify-content-md-center'>
            {categories.map((item)=>{ return (
                <div key={item.category_name} className='col-12 col-xxl-6 pt-3'>
                    <div className='p-3 shadow-sm rounded d-flex flex-column justify-content-start' style={{'minHeight':'100%'}}>
                        <HeaderTwo title={item.category_name}/>
                        <div className='p-2 rounded shadow-sm'>
                            <ul className='list-group'>
                                {
                                skills.filter(value=>value.category === item.id).map((item)=>{
                                    return <ListGroupItem key={item.name+item.name+''} name={item.name} text={item.name}/>
                                })}
                            </ul>    
                        </div>    
                    </div>
                </div>
            )})}
        </div>
    ):( 
        <div className='row transitionIn justify-content-md-center'>
            <div className='col-12 col-xxl-6 pt-3'>
                <div className='p-3 shadow-sm rounded d-flex flex-column justify-content-start' style={{'minHeight':'100%'}}>
                    <HeaderTwo title = {error.message} />
                </div>
            </div>
        </div>
    )
}
export default Skills;