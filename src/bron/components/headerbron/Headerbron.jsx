import React from 'react';
import logoImg from './../../img/icons/Бронь.svg';

import globoImg from './../../img/icons/globe.svg';  
import './headerbron.css';
import lineImg from "./../../img/icons/Line 7.svg"; // Убедитесь, что путь к изображению правильный
function Headerbron() {
  return (
    <>
    <div className="header-top">
    <h1>Frame 6</h1>
    <span className="code-symbol">&lt;/&gt;</span> 
    </div>
    <div className="top">
    <div className="top__content">
    <nav className="top-nav">
    <ul>
    <li className="nav-item-1"><a href='#!'>Бакота</a></li>
        <li>
        <div className='line__img1'>
        <img src={lineImg} alt="Line" />
        </div>
        </li>
        <li className="nav-item-2"><a href='#!'>Карпати</a></li>
        <li>
        <div className='line__img2'>
        <img src={lineImg} alt="Line" />
        </div>
        </li>
        <li className="nav-item-3"><a href='#!'>Київ</a></li>
        <li>
        <div className='line__img3'>
        <img src={lineImg} alt="Line" />
        </div>
        </li>
        <li className="nav-item-4"><a href='#!'>Одеська область</a></li>
        </ul>
    </nav>
    </div>
    </div>
    <div className="header-top1">
      <h1>Бронь</h1>
      <span className="code-symbol1">&lt;/&gt;</span> 
    </div>
    <header className='headerbron'>
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

export default Headerbron;

