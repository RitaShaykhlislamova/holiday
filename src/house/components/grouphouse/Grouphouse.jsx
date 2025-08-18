import React from 'react';
import './grouphouse.css';
import groupImg1 from './../../img/images/полонини кар.png';
import groupImg2 from './../../img/images/бронь.png';
import groupImg3 from './../../img/images/бронь 3.png';
import groupImg4 from './../../img/images/бронь 4.png';
import arrowImg from './../../img/icons/Arrow 1.svg';

const Grouphouse = () => {
    return (
        <>
            <div className="grouphouse">
                <div className="grouphouse__content">
                    <div className='grouphouse__btn-wrapper'>
                        <a href='#!' className='grouphouse__btn'>
                            Назад
                            <span className='arrow__img'>
                                <img src={arrowImg} alt='ArrowImg' />
                            </span>
                        </a>
                    </div>
                    <div className="group__img1">
                        <img src={groupImg1} alt="Group" />
                    </div>
                    <div className="group__text">Затишні дерев’яні будиночки, які заховались
                        <br />на окраїні лісу, зустрічатимуть Вас чудовим
                        <br />краєвидом на ранкові полонини.
                        <br />
                        <br />Ви можете обрати кількість кімнат та місце, яке
                        <br />буде ідеальним для Вас. Територія, на якій базуються
                        <br /> будиночки, підійде як і для великих компаній, яким
                        <br /> потрібно бути поряд у декількох будинках, так і
                        <br />для пар, які хочуть бути на одинці.
                    </div>
                    <div className="group__img2">
                        <img src={groupImg2} alt="Group" />
                    </div>
                    <div className="group__img3">
                        <img src={groupImg3} alt="Group" />
                    </div>
                    <div className="group__img4">
                        <img src={groupImg4} alt="Group" />
                    </div>
                </div>
            </div>
            <div className='text'><h1>Наявність місць</h1></div>
        </>
    );
};

export default Grouphouse;