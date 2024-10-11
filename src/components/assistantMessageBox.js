const AssistantMessageBox = props =>{
    const datetime = new Date(Date.now()).toLocaleString()
    return (
        <div key={datetime+(props.assistant)?'assistant':'user'} className={`row m-2 d-flex flex-row ${props.assistant?'justify-content-start text-start':'justify-content-end text-start'}`}>
            <div className='col-10'>
                <div className='card' data-bs-theme='light'>
                    {(props.placeholder)?
                    <div>
                        <div className='card-body placeholder-glow'>
                        <span className='placeholder col-7'></span>
                        <span className='placeholder col-4'></span> 
                        <span className='placeholder col-4'></span>
                        <span className='placeholder col-6'></span>
                        <span className='placeholder col-5'></span>
                        <span className='placeholder col-4'></span>
                        </div>
                        <div className='d-flex align-items-center card-footer placeholder-glow'>
                            Loading... 
                            <div className="spinner-border spinner-border-sm ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                    </div>
                    :<div>
                        <div className='card-body'>
                            {props.message}
                        </div>
                        <div className={`card-footer ${props.assistant?'text-end':'text-start'}`}>
                            {datetime}
                        </div>
                    </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default AssistantMessageBox