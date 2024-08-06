
import HeaderTwo from './HeaderTwo'
import {Url} from '../providers/APIUrlProvider'
const AnnoucementBanner = props => {
    const {url} = Url()
    return (
        <div className='col-12 col-xxl-7 px-0 my-2'>
            <div className={`card text-white bg-dark border-0 shadow-sm`} style={{minHeight:"100%", '--bs-bg-opacity':'0'}}>
                <div className='card-body d-flex flex-column justify-content-between'>
                    <HeaderTwo title='*Annoucement* Welcome to JessePiccione Mark II!'/>
                    <div className={`bg-opacity-0 border-0 shadow-sm`} style={{minHeight:"100%"}}>
                        <div className='d-flex flex-column justify-content-between'>
                            <p>Welcome to the Mark II of JessePiccione.info.
                            <br/>
                            Now utilizing server side rendering with React.js
                            <br/>
                            <a id='annoucement-link' className='card-text' href={url}>Original Django Application</a>
                            </p>                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AnnoucementBanner;