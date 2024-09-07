const iframe = props => {
    return (
        
        <div className='ratio ratio-16x9'>
            <div className='position-absolute col-12 placeholder placeholder-wave rounded'></div>
            <iframe className='embed-responsive-item rounded shadow-sm' src={props.URL} title="YouTube Video"  allowFullScreen/>
        </div>
    )
}
export default iframe