import React from 'react';
import './brandsAboutUs.css';
import brandsImg from "./../../img/images/про нас.png";

const BrandsAboutUs = () => {
    return (
        
            <section className="brandsAboutUs">
                <div className="container">
          <div className='brands__content'>
            <div className='brands__text'>
              <div className='brands__title'>HolidayTime</div> 
              <div className='brands__desc'>Відпочинок, емоції, враження, нетипові маршрути, неймовірні локації -<br />
              це все про сільський еко-туризм в Україні</div>
            </div>       
            <div className="brands__img">
              <img src={brandsImg} alt='Brands' />  
            </div>
            <div className="brands__layout">
              <div className="layout__text"><span>Наша команда зібрала найколоритніші місця нашої країни саме для тебе.
                <br/>
              <br/>Місія нашої компанії подарувати незабутні враження та показати Україну з іншої сторони. Пройти разом з
              <br/>Вами лісовими стежками, щоб попоїсти свіжого карпатського сиру. Пірнути у каньйон та побачити занурене
              <br/>під товщу років село Бакота. Покататись на гандолах в “українській Венеції”.
              <br/>
              <br/>Пізнати Україну разом!</span></div>
            </div>
          </div>
          </div>  
            </section>
        
    );
};

export default BrandsAboutUs;