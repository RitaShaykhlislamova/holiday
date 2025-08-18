/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Brandscontacts from "./components/brandscontacts/Brandscontacts";
import Headercontacts from "./components/headercontacts/Headercontacts";
import GrayBlock from "./components/gray-block2/Gray-block2";
import Photocontacts from "./components/photocontacts/Photocontacts";
import Footercontacts from "./components/footercontacts/Footercontacts";


function Contacts() {
  const project = '';
  
  return (
    <div className="contacts">
      <h1>{project}</h1>
       <Headercontacts />
       <GrayBlock>
       <Photocontacts />
       <Brandscontacts />
       </GrayBlock>
       <Footercontacts />
    </div>
  );
}

export default Contacts;
