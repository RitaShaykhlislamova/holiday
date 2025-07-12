import logoImg from '../../img/icons/Бронь.svg';
import globoImg from '../../img/icons/globe.svg';  
import './headerAboutUs.css';

function HeaderAboutUs () {
 return (
  <>
  
  <header className="headerAboutUs">
  <div className='container'>
      <div className='header__row'>
        <div className='header__logo'>
          <img src={logoImg} alt='Logo' />
        </div>
        <nav className='header__nav'>
          <ul>
            <li><a href='#!'>ГОЛОВНА</a></li>
            <li><a href='#!'>ПРО НАС</a></li>
            <li><a href='#!'>ЗАБРОНЮВАТИ</a></li>
            <li><a href='#!'>КОНТАКТИ</a></li>
            <li><a href='#!'>ОСОБИСТИЙ КАБИНЕТ</a></li>
          </ul>
        </nav>
        <div className='globoImg'>
          <img src={globoImg} alt="Globo" /><span>UA</span>
        </div>
      </div>
      </div>
  </header>
</>
  );
};

export default HeaderAboutUs;

