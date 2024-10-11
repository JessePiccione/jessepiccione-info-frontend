function HiddenTechnologyList(props){
    const technology = JSON.parse(props.technology)
    return(
        <div className="text-center">
            <button className='btn primary-color btn-dark text-light btn-gradient my-2 shadow-sm' type='button' data-bs-toggle='collapse' data-bs-target={`#technologies_${props.id}`} aria-expanded='false' aria-controls="technologies">
                {props.buttonText}
            </button>
            <div className='collapse' id ={`technologies_${props.id}`}>
                <ul className='list-group shadow-sm p-2 rounded mb-2'>  
                    {technology.filter((item=>item.pageEntry===props.id)).map((item,index)=>{
                        return <li key={item.description} className='list-group-item list-group-item-action'><b>{item.title}</b>-{item.description}.</li>
                    })}    
                </ul>
            </div> 
        </div>
    );  
}
export default HiddenTechnologyList;