import { Outlet } from 'react-router-dom'

import './App.css'
import { Header } from './componants/Header'

function App() {

    return (
      <>
      <Header></Header>
      <Outlet/>
      </>
    )
}

export default App
