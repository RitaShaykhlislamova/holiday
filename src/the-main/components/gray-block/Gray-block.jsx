import React from 'react';
import './gray-block.css';

const Grayblock = ({ children }) => {
    return ( 
        <div className="gray-block">
            {children}
            </div>
     );
};
 
export default Grayblock;