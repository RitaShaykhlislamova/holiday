/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Brandshouse from './components/brandshouse/Brandshouse';
import Headerhouse from './components/headerhouse/Headerhouse';
import GrayBlock from './components/gray-blockHouse/Gray-blockHouse';
import Photohouse from './components/photohouse/Photohouse';
import Grouphouse from './components/grouphouse/Grouphouse';
import Arrowhouse from './components/arrowhouse/Arrowhouse';
import Pagehouse from './components/pagehouse/Pagehouse';
import Footerhouse from './components/footerhouse/Footerhouse';

function House() {
  const project = '';
  
  return (
    <div className="house">
      <h1>{project}</h1>
      
       <Headerhouse /> 
       <GrayBlock> 
       <Photohouse /> 
       <Grouphouse /> 
       <Brandshouse /> 
       <Pagehouse /> 
       <Arrowhouse /> 
       </GrayBlock> 
       <Footerhouse /> 
      </div>
    
  );
}

export default House;
