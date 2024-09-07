const listGroupItem = props =>{
    return (
        <li key={props.name} className='list-group-item list-group-item-action'>
            <b>
                {props.text}
            </b>
        </li>
    )
}
export default listGroupItem