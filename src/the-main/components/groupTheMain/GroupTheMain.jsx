import React from 'react';
import './groupTheMain.css';
import groupImg from './../../img/images/active-rest.png';

const GroupTheMain = () => {
    return (
        
        <div className="groupTheMain">
            <div className="group__contentTheMain">
            <div className="group__imgTheMain">
                    <img src={groupImg} alt="Group" />
                </div>
            <div className="group__textTheMain">Активний відпочинок у нетипових локаціях.
                <br/> Незаймана природа та місцевий колорит
                <br/>подарують Вам незабутні враження.
                </div>
            
              </div>
        </div>
        
    );
};

export default GroupTheMain;