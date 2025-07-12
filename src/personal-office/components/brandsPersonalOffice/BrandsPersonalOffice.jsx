import React from 'react';
import './brandsPersonalOffice.css';
import brandsImg from "./../../img/icons/person 1.svg";
import lineImg from './../../img/icons/Line 7.svg';




const BrandsPersonalOffice = () => {
    return (
        <>
        
            <div className="brandsPersonalOffice">
                <div className="brands__content"></div>
                <div className="brands__img">
                <img src={brandsImg} alt="Brands" />
                </div>
                <div className='text1'>
                    <span>Петров Іван Іванович</span>
                    <div className='line__img'>
                    <img src={lineImg} alt="Line" />
                    </div>
                    </div>  
                    <div className='text2'>
                    <span className='bold'>Стать:</span><span className='normal'>чоловіча</span>
                    <div className='line__img'>
                    <img src={lineImg} alt="Line" />
                    </div>
                    </div>
                    <div className='text3'>
                    <span className='bold'>Дата народження:</span><span className='normal'>10. 02. 1998</span>
                    
                    <div className='line__img'>
                    <img src={lineImg} alt="Line" />
                    </div>
                    </div> 
                    <div className='text4'>
                    <span className='bold'>Мобільний телефон:</span><span className='normal'>+38(097)346-72-50</span>
                    <div className='line__img'>
                    <img src={lineImg} alt="Line" />
                    </div>
                    </div>
                    <div className='text5'>
                    <span className='bold'>Ел. пошта:</span><span className='normal'>petrov@gmail.com</span>
                    </div>
                    <div className='brands__btn-wrapper1'>
                        <button className='brands__btn1'>Змінити аватар</button>
                    </div>
                    <div className='brands__btn-wrapper2'>
                        <button className='brands__btn2'>Налаштування</button>
                    </div>           
            </div>
        
        <div className='brands__btn-wrapper3'>
            <button className='brands__btn3'>Вийти</button>
        </div> 
        </>          
    );
};

export default BrandsPersonalOffice;