import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default App