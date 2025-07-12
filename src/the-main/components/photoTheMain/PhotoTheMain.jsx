import React from 'react';
import './photoTheMain.css';
import photoImg from './../../img/images/holiday.png';

const PhotoTheMain = () => {
  return (
    
      <div className="photoTheMain">
      <div className="container">
          <div className='photo__content'>
          <div className="photo__img">
              <img src={photoImg} alt='Holiday scenery' />  
            </div>
            <div className='photo__text'>
              <div className='photo__title'><span>HolidayTime
                </span>
                </div> 
              <div className='photo__desc'><span>Автентичний відпочинок серед українського колориту!
                </span>
                </div>
            </div>       
            
          </div>
          </div>
      </div>
    
  );
};

export default PhotoTheMain;