import { Link } from 'react-router-dom'
import logo from '../assets/banner/logo1.svg'
import '../styles/Banner.css'

function Banner() {
    return (
        <nav className='container-header'>
            <img src={logo} alt='logo kasa' />
            <ul className='container-nav'>
                <Link to="/" className='nav-accueil'>Accueil</Link>
                <Link to="/APropos" className='nav-APropos'>A Propos</Link>
            </ul>
        </nav >
    )
}

export default Banner