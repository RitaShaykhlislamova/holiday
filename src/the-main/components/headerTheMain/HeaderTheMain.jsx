import logoImg from './../../img/icons/Бронь.svg';
import globoImg from './../../img/icons/globe.svg';  
import './headerTheMain.css';

function HeaderTheMain () {
 return (
  <div>
  <section>
  <div className="header__top">
  <h1>Головна</h1>
  <ul>
  <li><a href='#!'>UA</a></li>
  <li><a href='#!'>RU</a></li>
  <li><a href='#!'>EN</a></li>
  </ul>
  </div>
  </section>
 <header className='headerTheMain'> 
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
        <div className='globoImg' href='#!'><img src={globoImg} alt="Globo" /><span>UA</span>
        </div>
    </div>
</div>
</header>
</div>
  
  );
};

export default HeaderTheMain;

