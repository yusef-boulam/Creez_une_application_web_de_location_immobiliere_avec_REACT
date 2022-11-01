import { Link } from 'react-router-dom'
import logo from '../assets/banner/logo1.svg'
import '../styles/Banner.css'

function Banner() {
    return (
        <header className='kasa-banner-header'>
            <img src={logo} alt='logo kasa' className='kasa-logo' />
            <ul className='kasa-nav'>
                <Link to="/" className='kasa-nav-Accueil'>Accueil</Link>
                <Link to="/APropos" className='kasa-nav-A-Propos'>A Propos</Link>
            </ul>
        </header >
    )
}

export default Banner