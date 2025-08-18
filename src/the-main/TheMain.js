/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import BrandsTheMain from "./components/brandsTheMain/BrandsTheMain.jsx";
import HeaderTheMain from "./components/headerTheMain/HeaderTheMain.jsx";
import GrayBlock from "./components/gray-blockThe-main/Gray-blockThe-main";
import PhotoTheMain from "./components/photoTheMain/PhotoTheMain.jsx";
import GroupTheMain from "./components/groupTheMain/GroupTheMain.jsx";
import FormTheMain from "./components/formTheMain/FormTheMain.jsx";
import ArrowTheMain from "./components/arrowTheMain/ArrowTheMain.jsx";
import FooterTheMain from "./components/footerTheMain/FooterTheMain.jsx";


function TheMain() {
  return (
    <div className="the-main">
      
       <HeaderTheMain />
       <GrayBlock>
       <PhotoTheMain />
       <BrandsTheMain />
       <GroupTheMain />
       <FormTheMain />
       <ArrowTheMain />
       </GrayBlock>
       <FooterTheMain />
    </div>
  );
}

export default TheMain;
