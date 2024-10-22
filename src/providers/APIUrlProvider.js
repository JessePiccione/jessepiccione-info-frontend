
import React from 'react'
const APIUrlContext = React.createContext();
const URL = 'https://jessepiccione-info-backend.ue.r.appspot.com/'
const TOKEN = 'bf3e1997e0234db808e11de90cea5d5a974506cf'
const APIUrlProvider = ({children}) =>{
    const [context, setContext] = React.useState({token:TOKEN, url:URL})
    return (   
        <APIUrlContext.Provider value={context}>
            {children}
        </APIUrlContext.Provider>
    )
};
export const Url = () => React.useContext(APIUrlContext);
export default APIUrlProvider;