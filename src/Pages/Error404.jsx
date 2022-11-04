import React from 'react'
import { Link } from 'react-router-dom';
import Banner from "../components/Banner";
import "../styles/404.css";

export default function Error404() {
    return(
        <div className='container-404'>
                <Banner />
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='link404'>Retourner sur la page d’accueil</Link>
        </div>
    )
}