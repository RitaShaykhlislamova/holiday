import React from 'react';
import './brandscontacts.css';

import officeImg from '../../img/images/map.png';
import linesImg1 from '../../img/icons/Line 1.svg';
import linesImg2 from '../../img/icons/Line 2.svg';
import linesImg3 from '../../img/icons/Line 3.svg';
import linesImg4 from '../../img/icons/Line 4.svg';
const Brandscontacts = () => {
    return (
        
            <section className="brandscontacts">
                <div className="brands__img-container"></div>
                    <div className="contact-info">
                    <div className="contact-info__item1">
                        <h3>Телефон:</h3>
                        <div className='lines__img1'>
                        <img src={linesImg1} alt='LinesImg' />
                    </div>
                        <p>+38(097)119-89-83</p>
                    </div>
                    <div className="contact-info__item2">
                        <h3>Графік роботи:</h3>
                        <div className='lines__img2'>
                        <img src={linesImg2} alt='LinesImg' />
                    </div>
                        <p>пн-пт 08:00-22:00<br /> сб 09:00-21:00<br /> вс 10:00-20:00</p>
                    </div>
                    <div className="contact-info__item3">
                        <h3>Ел. пошта:</h3>
                        <div className='lines__img3'>
                        <img src={linesImg3} alt='LinesImg' />
                    </div>
                        <p>hello@gmail.com</p>
                    </div>
                    <div className="contact-info__item4">
                        <h3>Адреса офісу:</h3>
                        <div className='lines__img4'>
                        <img src={linesImg4} alt='LinesImg' />
                    </div>
                        <p>м. Київ, вул. Малевича, буд. 4</p>
                    </div>
                    <div className="map">
                        <img src={officeImg} alt='Office' />
                    </div>
                    </div>
            </section>
        
    );
};

export default Brandscontacts;