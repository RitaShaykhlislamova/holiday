import React from 'react';
import './groupbron.css';
import groupImg1 from './../../img/images/незвідана бокота.png';
import groupImg2 from './../../img/images/полонини карпат.png';
import groupImg3 from './../../img/images/автентична київщіна.png';
import groupImg4 from './../../img/images/нетипова одещина.png';
import compImg from './../../img/icons/Vector.svg';
import lineImg from './../../img/icons/Line 3.svg';

const Groupbron = () => {
    return (
        
        
        <>
        <div className="groupbron">
            <div className="group__content">
            <div className="group__img">
                    <img src={groupImg1} alt="Group" />
                </div>
                <div className='text'><span>Незвідана Бакота</span></div>
                <div className='line__img'>
                    <img src={lineImg} alt="Line" />
                    </div>  
            <div className="group__text">У Хмельницькій області розташований загублений край -
  <br />
  Бакота. Мальовничий каньйон з давньою історією захоплює
  <br />
  своїми просторами та незвичною атмосферою. Бджільництво,
  <br />
  свіжий мед із польових трав, дотик до природи.
                </div>
                <div className='brands__btn-wrapper'>
                        <a href='#!' className='brands__btn'>
                        Детальніше
                            </a>
                            </div>
                            <div className='comp__img'>
                            <img src={compImg} alt='Comp' />
                            </div>
              </div>
              </div>
              <div className="group">
        <div className="group__content">
        <div className="group__img">
                <img src={groupImg2} alt="Group" />
            </div>
            <div className='text'><span>Полонини Карпат</span></div>
            <div className='line__img'>
                <img src={lineImg} alt="Line" />
                </div>  
        <div className="group__text">Полонини Карпат, у селі Орів посеред гір
            <br/>розташувався затишний куточок для незабутніх
            <br/>вражень. Справжні українські гори, власноручне
            <br/>сироваріння на полонині, водоспади та
        <br/>вікові дерева чекають на Вас.
            </div>
            <div className='brands__btn-wrapper'>
                    <a href='#!' className='brands__btn'>
                    Детальніше
                        </a>
                        </div>
                        <div className='comp__img'>
                        <img src={compImg} alt='Comp' />
                        </div>
          </div>
          </div>
          <div className="group">
        <div className="group__content">
        <div className="group__img">
                <img src={groupImg3} alt="Group" />
            </div>
            <div className='text'><span>Автентична Київщина</span></div>
            <div className='line__img'>
                <img src={lineImg} alt="Line" />
                </div>  
        <div className="group__text">Неподалік центра Києва розташувалось автентичне українське
        <br/> село на території однойменного села Пирогово. Дерев’яні млини,
        <br/> запашний хліб, приготовлений своїми руками, українські пісні та
        <br/> багато іншого чекає на вас уже зараз.
            </div>
            <div className='brands__btn-wrapper'>
                    <a href='#!' className='brands__btn'>
                    Детальніше
                        </a>
                        </div>
                        <div className='comp__img'>
                        <img src={compImg} alt='Comp' />
                        </div>
          </div>
          </div>
          <div className="group">
        <div className="group__content">
        <div className="group__img">
                <img src={groupImg4} alt="Group" />
            </div>
            <div className='text'><span>Нетипова Одещина</span></div>
            <div className='line__img'>
                <img src={lineImg} alt="Line" />
                </div>  
        <div className="group__text">В Одеській області знаходиться мальовниче містечко Вилкове.
            <br/>Його ще називають «українською Венецією». Вилкове - це містечко
            <br/>на воді, весь в каналах. Розташоване в місці, де зустрічаються річка<br/>Дунай і Чорне море. Люди пересуваються переважно човнами.
        <br/>Нетипове українське село не залишить Вас без вражень.
            </div>
            <div className='brands__btn-wrapper'>
                    <a href='#!' className='brands__btn'>
                    Детальніше
                        </a>
                        </div>
                        <div className='comp__img'>
                        <img src={compImg} alt='Comp' />
                        </div>
          </div>
          </div>
          </>
          
          
    );
};

export default Groupbron;