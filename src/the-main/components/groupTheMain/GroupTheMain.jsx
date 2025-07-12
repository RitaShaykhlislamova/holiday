import React from 'react';
import './groupTheMain.css';
import groupImg from './../../';

const GroupTheMain = () => {
    return (
        
        <div className="groupTheMain">
            <div className="group__content">
            <div className="group__img">
                    <img src={groupImg} alt="Group" />
                </div>
            <div className="group__text">Активний відпочинок у нетипових локаціях.
                <br/> Незаймана природа та місцевий колорит
                <br/>подарують Вам незабутні враження.
                </div>
            
              </div>
        </div>
        
    );
};

export default GroupTheMain;