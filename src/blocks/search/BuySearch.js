import { Button,Form } from 'react-bootstrap';
import SingleSelect from '../../components/SingleSelect'

function BuySearch() { 
  return (
        <Form className="Search row flex-column flex-lg-row py-3" >
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
            myClass='col'
             />
            <SingleSelect val={[
                "معالی آباد",
                "قصردشت",
                "فرهنگ شهر",
                "تاچارا",
            ]} 
            name="location" 
            title="محدوده"
            myClass='col'


             />
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
            myClass='col'


             />
            <SingleSelect val={[
                "100-150",
                "150-200",
                "200-250",
                "300-350",
            ]} 
            name="price" 
            title="قیمت"
            myClass='col'
             />
            <SingleSelect val={[
                "45",
                "50",
                "60",
                "65",
            ]} 
            name="area" 
            title="متراژ"
            myClass='col'

             />
            <SingleSelect val={[
                "45",
                "50",
                "60",
                "65",
            ]} 
            name="assignment" 
            title="نوع واگذاری"
            myClass='col'

           />
            <SingleSelect val={[
                "1",
                "2",
                "3",
                "4",
            ]} 
            name="room" 
            title="تعداد خواب"
            myClass='col'

             />

        </Form>
  );
}

export default BuySearch;



