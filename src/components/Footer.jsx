import '../styles/Footer.css'
import logo from '../assets/footer/logo.png'

function Footer() {
    return (
        <footer className='footer'>
       <img src={logo} alt='logo kasa' className='kasa-logo' />
        <p>© 2020 Kasa. All rights reserved</p>
        </footer >
    )
}

export default Footer