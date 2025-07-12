import React from 'react';
import './brandsbron.css';
import brandsImg from './../../img/icons/Polygon.svg';

const Brandsbron = () => {
    return (
             
            <section className="brandsbron">
                <div className="brends__text">
                Оберіть місцерозташування
                <div className="brands__img">
                <img src={brandsImg} alt='Brands'  />  
                    </div>
                    </div>
            </section>
        
    );
};

export default Brandsbron;