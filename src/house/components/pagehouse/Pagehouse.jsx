import React from 'react';
import './pagehouse.css';
import pageImg from "./../../img/icons/persona.svg";
import bedImg from "./../../img/icons/ліжко.svg";
import lineImg from "./../../img/icons/Line 23.svg"; // Убедитесь, что путь к изображению правильный

const Pagehouse = () => {
    return (
         
            <div className="pagehouse">
                <div className="page__content">
                    <nav className="page__nav">
                        <ul>
                            <li className="nav-item-1"><a href='#!'>Вміщує</a></li>
                            <li>
                                <div className='line__img1'>
                                    <img src={lineImg} alt="Line" />
                                </div>
                            </li>
                            <li className="nav-item-2"><a href='#!'>Тип розміщення</a></li>
                            <li>
                                <div className='line__img2'> 
                                    <img src={lineImg} alt="Line" />  
                                </div>
                            </li>
                            <li className="nav-item-3"><a href='#!'>Ціна</a></li>
                        </ul>
                    </nav>
                    <section className="namber"> 
                        <div className="page__img1">
                            <img src={pageImg} alt="Page" />
                        </div>
                        <div className="page__img2">
                            <img src={pageImg} alt="Page" />
                        </div>
                        <div className="bed__img">
                            <img src={bedImg} alt="Bed" />
                        </div>
                        <div className='text'>
                            <span>Двомісний номер</span>
                            <p>1 широке двоспальне ліжко</p>
                        </div>
                        <div className="page__btn">Показати ціни</div>
                    </section>
                </div>
            </div>
       
    );
}

export default Pagehouse;