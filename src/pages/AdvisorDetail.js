import DetailsSidBar from '../components/detailsSideBar';
import HomeDetailsContent from '../components/HomeDetailsContent';
import SugessBox from './../blocks/sugess/SugessBox';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import  axios  from 'axios';
import parse from 'html-react-parser';
import { toast } from 'react-toastify';
import { context } from './../context/index';
import { SinglePropertyApi } from './../api/index';



function AdvisorDetail() {

  const location =useLocation();
  const {setShowLoading} = useContext(context);
  const [singleBlog,setSingleBlog]= useState({})


  useEffect(() => {
    setShowLoading(true);

    console.log(location.search)
    console.log(location.search.substring(1))
    axios.get(SinglePropertyApi(location.search.substring(1)))
    .then((res)=>{
        setSingleBlog(res.data)
    setShowLoading(false);

    }).catch((err)=>{
        toast.err('مشکلی پیش آمده است !')
    setShowLoading(false);

    })
}, []);

  return (
        <Container  className="pt-5 mt-5 pb-4">
          <Row>
            <Col lg={4}>
              <DetailsSidBar
              profile="./img/profile1.png"
              time='3روز پیش'
              user='کاربرشماره345'
              mainTitle='آپارتمان فرهنگ شهر 110 متر دوخوابه'
              kind='نوع ملک'
              Residential='مسکونی'
              address='آدرس'
              addressText="شیراز محله معالی آباد"
              bed='تعدادتخت خواب'
              bedNumber='2'
              meters='متراژ'
              metersNumber='110'
              price='قیمت'
              priceNumber='2700000000'
              />
            </Col>

            <Col lg={8}>
                <HomeDetailsContent/>
            </Col>

            <Col lg={12}>
              <h3 className='f-20 title-text mt-5'>آگهی های مشابه</h3>

              <SugessBox/>
            </Col>

            
          </Row>
            
        </Container>
  );
}

export default AdvisorDetail;