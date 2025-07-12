/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import BrandsPersonalOffice from "./components/brandsPersonalOffice/BrandsPersonalOffice";
import HeaderPersonalOffice from "./components/headerPersonalOffice/HeaderPersonalOffice";
import GrayBlock from "./components/gray-block/Gray-block";
import PhotoPersonalOffice from "./components/photoPersonalOffice/PhotoPersonalOffice";
import FooterPersonalOffice from "./components/footerPersonalOffice/FooterPersonalOffice";


function PersonalOffice() {
  return (
    <div className="personal-office">
      <HeaderPersonalOffice />
       <GrayBlock>
       <PhotoPersonalOffice />
       <BrandsPersonalOffice />
       </GrayBlock>
       <FooterPersonalOffice />
    </div>
  );
}

export default PersonalOffice;
