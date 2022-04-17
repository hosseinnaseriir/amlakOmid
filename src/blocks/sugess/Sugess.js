import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Estate from '../../components/Estate';
import '../carousel/Carousel.css';

function Sugess() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                slidesToShow: 3,
              
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      };
  return (
    <Slider {...settings}>
        <Estate img="./img/es1.png" title="کاربرعادی" profile="./img/profile2.png"       location="معالی‌آباد" price="2.7 میلیارد" bed="2" type="مسکونی" time="۳ روز پیش" meter="160"/>
        <Estate img="./img/es2.png" title="آژانس صادقیه" profile="./img/profile1.png"    location="چمران" price="1.7 میلیارد" bed="4" type="مسکونی" time="۳ روز پیش" meter="90"/>
        <Estate img="./img/es3.png" title="آژانس املاک سینا" profile="./img/profile2.png"location="تاچارا" price="2 میلیارد" bed="1" type="مسکونی" time="۳ روز پیش"  meter="210" />
        <Estate img="./img/es4.png" title="آژانس حسینی" profile="./img/profile1.png"     location="قصردشت" price="4.5 میلیارد" bed="3" type="مسکونی" time="۳ روز پیش" meter="100"/>
        <Estate img="./img/es1.png" title="کاربرعادی" profile="./img/profile2.png"       location="معالی‌آباد" price="2.7 میلیارد" bed="2" type="مسکونی" time="۳ روز پیش" meter="160"/>
        <Estate img="./img/es2.png" title="آژانس صادقیه" profile="./img/profile1.png"    location="چمران" price="1.7 میلیارد" bed="4" type="مسکونی" time="۳ روز پیش" meter="90"/>
        <Estate img="./img/es3.png" title="آژانس املاک سینا" profile="./img/profile2.png"location="تاچارا" price="2 میلیارد" bed="1" type="مسکونی" time="۳ روز پیش"  meter="210" />
        <Estate img="./img/es4.png" title="آژانس حسینی" profile="./img/profile1.png"     location="قصردشت" price="4.5 میلیارد" bed="3" type="مسکونی" time="۳ روز پیش" meter="100"/>
        
  </Slider>
  );
}

export default Sugess;



