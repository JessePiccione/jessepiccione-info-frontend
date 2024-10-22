import NavItem from './navItem.js'
const viewNames = ['Home','Experience', 'Education', 'Projects', 'Skills', 'Awards']
function NavList(){
    return (
        <ul className="navbar-nav d-flex flex-col flex-md-row justify-content-md-between me-md-auto align-self-md-bottom px-2">
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