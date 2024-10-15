import { Outlet } from 'react-router-dom'
import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import './Css/app.css'

function App() {

    return (
        <div>
            <Header/>
            <Nav />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default App  