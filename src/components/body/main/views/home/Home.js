//react
import { useState, useEffect } from 'react'
//providers
import {Url} from  '../../../../../providers/APIUrlProvider.js'
import Card from  '../../../../../providers/Card.js'
//partials
import HeaderTwo from '../../../partials/headerTwo.js'
import TextCard from '../../../partials/textCard.js'
import Iframe from '../../../partials/iframe.js'
//compnents
import HiddenTechnologyList from './HiddenTechnologyList.js'
import PlaceHolder from '../../placeholder/PlaceHolder.js'

//api 
import {loadHome, loadTech} from './homeAPI.js'
function Home(props){
    const {url} = Url()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)    
    const [technology, setTechnology] = useState(null)
    const [animation, setAnimation] = useState(false)
    const fetchData = async () => {
        try{
            setData(await loadHome(url))
            setTechnology(await loadTech(url))
        }
        catch(error){
            setError(error)
        }
        finally{
            setAnimation(true);
            await new Promise(resolve => {setTimeout(resolve, 1000)})
            setLoading(false);
        }
    }//eslint-disable-next-line
    useEffect(()=>{fetchData()},[])
    return ((data && technology) || (loading))? 
        (loading?
            <PlaceHolder className={(animation)?"transitionOut":''}/>:
            <div className='row transitionIn justify-content-md-center'>
                {
                    data.map((obj)=>{
                        return (
                            <div key={obj.title} className='col-12 col-xxl-6 pt-3'>
                                <Card> 
                                    <HeaderTwo title={obj.title}/>
                                    <TextCard text={obj.description}/>
                                    <HiddenTechnologyList id={obj.id} technology={technology} buttonText={'Technology Used Here...'}/>
                                    <Iframe URL={obj.URL}/>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
    ):( 
    <div className='col-12 pt-3'>
            <Card>
                <HeaderTwo title={error.message}/>
            </Card>
        </div>        
    )  
} 
export default Home;