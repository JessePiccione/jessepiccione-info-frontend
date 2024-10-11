//React
import React, {useState, useEffect} from 'react'
//Providers 
import {Url} from '../../../../../providers/APIUrlProvider.js'
//Components
import PlaceHolder from '../../placeholder/PlaceHolder.js'
import HeaderTwo from '../../../partials/headerTwo.js'
import ListGroupItem from '../../../partials/listGroupItem.js'
function Skills(){
    const {url} = Url()
    const [loading,setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const [error, setError] = useState(null)
    const [categories, setCategories] = useState(null)
    const [skills, setSkills] = useState(null)
    const [requestSkills, setRequestSkills] = useState(false)
    useEffect(()=>{
        const fetchSkills= async () =>{
            if(!requestSkills){
                try {
                    setRequestSkills(true)
                    const request = await fetch(url+'api/skill/category/')
                    const response = await request.json()
                    setCategories(response)
                }
                catch (error){
                    setError(error)
                }
                finally{
                    try{
                        const request = await fetch(url+'api/skill/')
                        const response = await request.json()
                        setAnimation(true)
                        await new Promise(resolve => setTimeout(resolve, 1000))
                        setSkills(response)
                    }
                    catch(error){
                        setError(error)
                    }
                    finally{
                        setLoading(false)
                    }
                }
            }
        }
        fetchSkills()
    })
    if(loading || (categories && skills)) return (
        (loading)?<PlaceHolder className={(animation)?'transitionOut':''}/>:
        <div className='row transitionIn justify-content-md-center'>
            {categories.map((item)=>{
                return (
                    <div key={item.category_name} className='col-12 col-xxl-6 pt-3'>
                        <div className='p-3 shadow-sm rounded d-flex flex-column justify-content-start' style={{'minHeight':'100%'}}>
                            <HeaderTwo title={item.category_name}/>
                            <div className='p-2 rounded shadow-sm'>
                                <ul className='list-group'>
                                    {
                                        skills.filter(value=>value.category === item.id).map((item)=>{
                                            return <ListGroupItem key={item.name+item.name+''} name={item.name} text={item.name}/>
                                        })
                                    }
                                </ul>    
                            </div>    
                        </div>
                        
                    </div>
                    
                )
            })}
        </div>
    )
    if(error){
        return ( <div className='row transitionIn justify-content-md-center'>
        
                <div className='col-12 col-xxl-6 pt-3'>
                    <div className='p-3 shadow-sm rounded d-flex flex-column justify-content-start' style={{'minHeight':'100%'}}>
                        <HeaderTwo title ={error.message} />
                    </div>
                </div>
                
            
       
    </div>)
    }
}
export default Skills;