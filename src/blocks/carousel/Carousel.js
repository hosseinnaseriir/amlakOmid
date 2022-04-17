import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../../components/CardEstae';
import './Carousel.css';
function Carousel() { 
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                slidesToShow: 4,
              
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              
              }
            },
            {
              breakpoint: 720,
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
      const offices = [
        {
          'title': 'آژانس املاک سینا',
          'img': './img/card1.png'
        },
        {
          'title': 'آژانس املاک صادقیه',
          'img': './img/card2.png'
        },
        {
          'title': 'آژانس املاک خروشان',
          'img': './img/card3.png'
        },
        {
          'title': 'آژانس املاک فدک',
          'img': './img/card4.png'
        },
        {
          'title': 'آژانس املاک بهینه',
          'img': './img/card5.png'
        },
        {
          'title': 'آژانس املاک سینا',
          'img': './img/card1.png'
        },
        {
          'title': 'آژانس املاک صادقیه',
          'img': './img/card2.png'
        },
        {
          'title': 'آژانس املاک خروشان',
          'img': './img/card3.png'
        },
        {
          'title': 'آژانس املاک فدک',
          'img': './img/card4.png'
        },
        {
          'title': 'آژانس املاک بهینه',
          'img': './img/card5.png'
        },
      ]
  return (
      <Slider {...settings}>
          {offices.map((office)=>(
              <Card img={office.img} title={office.title}/>
          ))} 
      </Slider>
  );
}

export default Carousel;



