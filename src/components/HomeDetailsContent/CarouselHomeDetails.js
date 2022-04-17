import React ,{useRef ,useEffect} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import './detailsStyle.css'




const CarouselHomeDetails = () => {

  const mainSlider =useRef(null)
  const secondSlider =useRef(null)

  useEffect(() => {
    mainSlider.current.sync(secondSlider.current.splide)
  }, []);

    return ( 
<>
        <Splide  ref={mainSlider}
        options={ {
            type       : 'fade',
            heightRatio: 0.5,
            pagination : false,
            arrows     : false,
            cover      : true,
          } }
        
        >
        <SplideSlide>
          <img src='./img/carousel/mainPic.png' alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="./img/carousel/pic1.png" alt="Image 2"/>
        </SplideSlide>

        <SplideSlide>
          <img src="./img/carousel/pic2.png" alt="Image 2"/>
        </SplideSlide>

        <SplideSlide>
          <img src="./img/carousel/pic3.png" alt="Image 2"/>
        </SplideSlide>

        <SplideSlide>
          <img src="./img/carousel/pic4.png" alt="Image 2"/>
        </SplideSlide>
      </Splide>


        <Splide
        className='secondery-slider'
        ref={secondSlider}
         options={ {
            rewind          : true,
            fixedWidth      : 175,
            fixedHeight     : 98,
            isNavigation    : true,
            gap             : 10,
            focus           : 'center',
            pagination      : false,
            cover           : true,
            arrows     : false,
            dragMinThreshold: {
              mouse: 4,
              touch: 10,
            },
            breakpoints : {
              640: {
                fixedWidth  : 66,
                fixedHeight : 38,
              },
            },
          } }
        
        >
         <SplideSlide>
          <img src='./img/carousel/mainPic.png' alt="Image 1"/>
        </SplideSlide>
        <SplideSlide>
          <img src="./img/carousel/pic1.png" alt="Image 2"/>
        </SplideSlide>

        <SplideSlide>
          <img src="./img/carousel/pic2.png" alt="Image 2"/>
        </SplideSlide>

        <SplideSlide>
          <img src="./img/carousel/pic3.png" alt="Image 2"/>
        </SplideSlide>

        <SplideSlide>
          <img src="./img/carousel/pic4.png" alt="Image 2"/>
        </SplideSlide>

        <SplideSlide>
          <img src="./img/carousel/pic2.png" alt="Image 2"/>
        </SplideSlide>

        <SplideSlide>
          <img src="./img/carousel/pic1.png" alt="Image 2"/>
        </SplideSlide>
        <SplideSlide>
          <img src="./img/carousel/pic4.png" alt="Image 2"/>
        </SplideSlide>
        </Splide>

        </>
     );
}
 
export default CarouselHomeDetails;