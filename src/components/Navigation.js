import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/the-main">Головна</Link></li>
        <li><Link to="/contacts">Контакти</Link></li>
        <li><Link to="/bron">Бронювання</Link></li>
        <li><Link to="/about-us">Про нас</Link></li>
        <li><Link to="/house">Дом</Link></li>
        <li><Link to="/personal-office">Особистий кабинет</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
