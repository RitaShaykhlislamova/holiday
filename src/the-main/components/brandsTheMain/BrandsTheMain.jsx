import React from 'react';
import './brandsTheMain.css';
import brandsImg from './../../img/images/полонини карпат.png';
import compImg1 from './../../img/icons/Component 7.svg';
import linesImg from './../../img/icons/Group стрелка.svg';
import arrowImg from './../../img/icons/Arrow 0.svg';

const BrandsTheMain = () => {
    
    return (
       
            <div className="brandsTheMain">
                <div className="brands__img-container">
                
                    <img src={brandsImg} alt='Brands'  />  
                     
                    <div className='brands__desc'>
                        <span>
                            Полонини Карпат, у селі Орів посеред гір розташувався затишний куточок для незабутніх вражень.<br />
                            Справжні українські гори, власноручне сироваріння на полонині, водоспади та вікові дерева чекають на Вас.
                        </span>
                    </div>
                    <div className='comp__img1'>
                        <img src={compImg1} alt='Comp' />
                    </div>
                    <div className='lines__img'>
                        <img src={linesImg} alt='LinesImg' />
                    </div>
                    <div className='brandsTheMain__btn-wrapper'>
                        <a href='#!' className='brands__btn'>
                            Переглянути
                            <span className='arrowbrands__img'>
                                <img src={arrowImg} alt='Arrow' />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        
    );
};

export default BrandsTheMain;