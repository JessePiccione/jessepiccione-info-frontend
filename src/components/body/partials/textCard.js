const textCard = props =>{
    return (
        <div className='card bg-white bg-opacity-75 border border-0 shadow-sm'>
            <div className='card-body'>
                <p className='card-text text-center'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {props.text}
                </p>
            </div>
        </div>
    );
}
export default textCard;