import NavList from './NavList.js'
import {Link} from 'react-router-dom'
function Nav(){
    return (
            <div className='container-fluid sticky-top primary-color bg-gradient d-flex justify-content-center'>
                <nav className='navbar col-12 col-xxl-7 navbar-expand-lg  shadow-sm' data-bs-theme='dark'>
                        <Link className='navbar-brand' to='/'>JessePiccione.info</Link>
                        <button 
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='collapse navbar-collapse' id ='navbarSupportedContent'>
                            <NavList/>
                        </div>
                    
                </nav>
            </div> 
    );
};
export default Nav;