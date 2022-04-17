import React from "react";
import Estate from '../../components/Estate';
import {Row } from 'react-bootstrap';

function SugessBox() {
  
  return (
      <Row>
        <Estate myClass='col-lg-3 col-md-4' img="./img/es1.png" title="کاربرعادی" profile="./img/profile2.png"       location="معالی‌آباد" price="2.7 میلیارد" bed="2" type="مسکونی" time="۳ روز پیش" meter="160"/>
        <Estate myClass='col-lg-3 col-md-4' img="./img/es2.png" title="آژانس صادقیه" profile="./img/profile1.png"    location="چمران" price="1.7 میلیارد" bed="4" type="مسکونی" time="۳ روز پیش" meter="90"/>
        <Estate myClass='col-lg-3 col-md-4' img="./img/es3.png" title="آژانس املاک سینا" profile="./img/profile2.png"location="تاچارا" price="2 میلیارد" bed="1" type="مسکونی" time="۳ روز پیش"  meter="210" />
        <Estate myClass='col-lg-3 col-md-4' img="./img/es4.png" title="آژانس حسینی" profile="./img/profile1.png"     location="قصردشت" price="4.5 میلیارد" bed="3" type="مسکونی" time="۳ روز پیش" meter="100"/>
        <Estate myClass='col-lg-3 col-md-4' img="./img/es1.png" title="کاربرعادی" profile="./img/profile2.png"       location="معالی‌آباد" price="2.7 میلیارد" bed="2" type="مسکونی" time="۳ روز پیش" meter="160"/>
        <Estate myClass='col-lg-3 col-md-4' img="./img/es2.png" title="آژانس صادقیه" profile="./img/profile1.png"    location="چمران" price="1.7 میلیارد" bed="4" type="مسکونی" time="۳ روز پیش" meter="90"/>
        <Estate myClass='col-lg-3 col-md-4' img="./img/es3.png" title="آژانس املاک سینا" profile="./img/profile2.png"location="تاچارا" price="2 میلیارد" bed="1" type="مسکونی" time="۳ روز پیش"  meter="210" />
        <Estate myClass='col-lg-3 col-md-4' img="./img/es4.png" title="آژانس حسینی" profile="./img/profile1.png"     location="قصردشت" price="4.5 میلیارد" bed="3" type="مسکونی" time="۳ روز پیش" meter="100"/>
      </Row>
      

  );
}

export default SugessBox;



