/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Brandsbron from './components/brandsbron/Brandsbron';
import Headerbron from './components/headerbron/Headerbron';
import GrayBlock from './components/gray-block/Gray-block';
import Photobron from './components/photobron/Photobron';
import Groupbron from './components/groupbron/Groupbron';
import Arrowbron from './components/arrowbron/Arrowbron';
import Footerbron from './components/footerbron/Footerbron';

function Bron() {
  const project = '';
  
  return (
    <div className="bron">
      <h1>{project}</h1>
      <Headerbron />
      <GrayBlock>
      <Photobron />
      <Brandsbron />
      <Groupbron />
      <Arrowbron />
      </GrayBlock>
      <Footerbron />
      </div>
    
  );
}

export default Bron;