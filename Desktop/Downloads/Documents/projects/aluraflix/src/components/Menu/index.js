import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
import Button from '../components/ButtonLink';
// import ButtonLink from '../components/ButtonLink';


function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt='Alura Flix logo'/>
      </a>
      <Button  className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu;