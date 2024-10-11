import NavList from '../main/nav/NavList'
function Footer(){
    return (
        <footer className='container-fluid text-light primary-color bg-gradient d-flex justify-content-center'>
            <div className="col-12 col-xxl-7">
                <nav className="pt-3">
                    <NavList/>
                </nav>
                <hr /> 
                <div className='d-flex justify-content-between py-3 px-0'>
                    <div className='align-self-start text-start my-0 ps-2' style={{overflow:'none'}}>
                        <p style={{fontSize:'0.90em'}}>Email: jessepiccione@gmail.com
                        <br />    
                        Phone: 732-908-0037</p>
                    </div>
                    <div className='text-end m-0 px-2'>
                        <a href='https://www.linkedin.com/in/jesse-piccione'>
                            LinkedIn <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <br />
                        <a href='https://www.facebook.com/jesse.piccione'>
                            Facebook <i className='fa-brands fa-facebook'></i>
                        </a>
                        <br />
                        <a href='https://github.com/JessePiccione'>
                            Github <i className='fa-brands fa-github'></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;