/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import BrandsAboutUs from './components/brandsAboutUs/BrandsAboutUs';
import HeaderAboutUs from './components/headerAboutUs/HeaderAboutUs';
import GrayBlock from './components/gray-block2/Gray-block2';
import PhotoAboutUs from './components/photoAboutUs/PhotoAboutUs';
import FooterAboutUs from './components/footerAboutUs/FooterAboutUs';

function AboutUs() {
  const project = '';
  
  return (
    <div className="about-us">
      <h1>{project}</h1>
       <HeaderAboutUs />
       <GrayBlock>
       <PhotoAboutUs />
       <BrandsAboutUs />
       </GrayBlock>
       <FooterAboutUs />
    </div>
  );
}

export default AboutUs;
