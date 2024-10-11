//react
import React from 'react'

import './App.css'
//components
import AppLoader from './components/AppLoader'
function App() {
  const CachedAppLoader = React.memo(()=>(<AppLoader/>),[])
  return (
      <CachedAppLoader/>
  )
}
export default App