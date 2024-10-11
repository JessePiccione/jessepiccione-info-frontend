function HeaderTwo(props){
    return (
        <div className='shadow-sm rounded mb-2' >
            <h2 className='text-center p-3'>
                {props.title}
            </h2>
        </div>
    );
}
export default HeaderTwo;