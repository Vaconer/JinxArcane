import './Header.css';
import logo from './img/Arcane_logo.webp'; // Importa a imagem PNG
import lol from './img/lol.png'; 

function Header() {
  return (
    <header className="header">
      <ul className="nav-list">
        <img className="lol" src={lol} alt="Lol" />
        <img className="logo" src={logo} alt="Arcane" />
        <li className="nav-itens">
          <button className="contact-button">CONTACT</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
