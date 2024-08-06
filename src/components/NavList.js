import NavItem from './NavItem.js'
const viewNames = ['Home','Experience', 'Education', 'Projects', 'Skills', 'Awards']
function NavList(){
    return (
        <ul className="navbar-nav d-flex flex-row justify-content-between me-auto align-self-bottom px-2">
            {viewNames.map((val,index)=> {
                let i = index;
                return ( 
                    <NavItem key={val+i} name={val} val={val} i={i}/>
                );
            })}
        </ul>
    );
};
export default NavList;