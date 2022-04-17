import { Button,Form } from 'react-bootstrap';
import SingleSelect from './../SingleSelect';

function SearchRealStatDetails() { 
  return (
        <Form className="row pt-4 my-3 justify-content-center real-state-search" >
            <SingleSelect val={[
                "مرودشت",
                "شیراز",
                "لار",
                "زرقان",
                "نورآباد",
                "فسا"
            ]} 
            name="city" 
            title="شهر"
             myClass="col-sm-3 col-12"/>
            <SingleSelect val={[
                "معالی آباد",
                "قصردشت",
                "فرهنگ شهر",
                "تاچارا",
            ]} 
            name="location" 
            title="محدوده"
             myClass="col-sm-3 col-12"/>
            <SingleSelect val={[
                "فروش مسکونی",
                "اجاره مسکونی",
                "فروش اداری و تجاری",
                "اجاره اداری و تجاری",
                "اجاره کوتاه مدت",
                "پروژه های ساخت و ساز",
   
            ]} 
            name="type" 
            title="نوع ملک"
             myClass="col-sm-3 col-12"/>
            <SingleSelect val={[
                "100-150",
                "150-200",
                "200-250",
                "300-350",
            ]} 
            name="price" 
            title="قیمت"
             myClass="col-sm-3 col-12"/>
            <SingleSelect val={[
                "45",
                "50",
                "60",
                "65",
            ]} 
            name="area" 
            title="متراژ"
             myClass="col-sm-3 col-12"/>
            <SingleSelect val={[
                "45",
                "50",
                "60",
                "65",
            ]} 
            name="assignment" 
            title="نوع واگذاری"
             myClass="col-sm-3 col-12"/>
            <SingleSelect val={[
                "1",
                "2",
                "3",
                "4",
            ]} 
            name="room" 
            title="تعداد خواب"
             myClass="col-sm-3 col-12"/>
          
        </Form>
  );
}

export default SearchRealStatDetails;



