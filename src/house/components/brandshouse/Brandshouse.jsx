import React from 'react';
import './brandshouse.css';
import blockImg from "./../../img/icons/flat-color-icons_calendar.svg";
import polygonImg from "./../../img/icons/Polygon.svg";
import defaultImg1 from "./../../img/icons/default1.svg";
import defaultImg2 from "./../../img/icons/default2.svg";
import defaultImg3 from "./../../img/icons/default3.svg";
import groupImg from "./../../img/icons/Group.svg";
const Brandshouse = () => {
    return ( 
        
            <div className= "brandshouse">
                <div className= "brandshouse__content">
         <div className= "brands__text"><span>Коли б Ви хотіли зупинись в помешканні Полонини Карпат?</span>
         </div>
         <div className= "brands__icons">
            
         <div className= "texthouse">Дата заїзду</div>
            <div className= "block">
                <div className="block__img1">
                <img src={blockImg} alt="Block" />
                </div>
                <div className="block__text"><span>Дата заїзду</span></div>
                <div className="block__img2">
                <img src={polygonImg} alt="Polygon" />
                </div>
                </div>
                <div className= "texthouse1">Дата виїзду</div>
            <div className= "block1">
                <div className="block__img1">
                <img src={blockImg} alt="Block" />
                </div>
                <div className="block__text1"><span>Дата виїзду</span></div>
                <div className="block__img2">
                <img src={polygonImg} alt="Polygon" />
                </div>
            </div>
         </div>
         <div className= "brandshouse__btn"><span>Перевірити наявність <br/>вільних місць</span></div>
         <div className= "brands__page1">Номери
         <img className='default__Img1'  src={defaultImg1} alt="Default" />
            <span className="overlay-text">1</span>
            <img className="group__Img" src={groupImg} alt= "Group" />
            </div>
         <div className= "brands__page2">Дорослі
         <img className="default__Img2" src={defaultImg2} alt="Default" />
            <span className="overlay-text">2</span>
            <img className="group__Img" src={groupImg} alt= "Group" />
         </div>
         <div className= "brands__page3">Діти
         <img className="default__Img3" src={defaultImg3} alt="Default" />
            <span className="overlay-text">3</span>
            <img className="group__Img" src={groupImg} alt= "Group" />
            </div>
         </div>
         </div>
       
        
     );
};
 
export default Brandshouse;