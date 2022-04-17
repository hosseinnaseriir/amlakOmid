import SingleSelect from "../SingleSelect";
import { Form } from 'react-bootstrap';
import './newsStyle.css'
import MyMap from './../map/Map';
const NewsForm = () => {
    return ( 
        <Form className="Search row newsForm mx-auto flex-column flex-lg-row py-3 mt-5" >
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
         />
        <SingleSelect val={[
            "معالی آباد",
            "قصردشت",
            "فرهنگ شهر",
            "تاچارا",
        ]} 
        name="location" 
        title="محدوده"


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


         />
     

        <div>
        <Form.Control className="input-form shadow-es border-0 mb-3" type="text" placeholder="قیمت" />

        </div>


        <div>
        <Form.Control className="input-form shadow-es border-0 mb-3" type="text" placeholder="متراژ" />

        </div>


     
        <SingleSelect val={[
            "45",
            "50",
            "60",
            "65",
        ]} 
        name="assignment" 
        title="نوع واگذاری"

       />
        <SingleSelect val={[
            "1",
            "2",
            "3",
            "4",
        ]} 
        name="room" 
        title="تعداد خواب"

         />
         
         <SingleSelect val={[
            "1",
            "2",
            "3",
            "4",
        ]} 
        name="user" 
        title="آگهی دهنده"

         />

<SingleSelect val={[
            "1",
            "2",
            "3",
            "4",
        ]} 
        name="amlak" 
        title="کدمشاور املاک"

         />


         
        <div>
        <Form.Control className="input-form shadow-es border-0 mb-3" type="text" placeholder="شماره تماس" />
        </div>


        <div>
        <Form.Control className="input-form shadow-es border-0 mb-3" type="text" placeholder="عنوان آگهی" />
        </div>

        <div>
        <Form.Control as="textarea" className='news-textArea shadow-es border-0 mb-3 f-16 pr-5' placeholder='توضیحات آگهی' rows={5}/>

        </div>

        <div className="mt-5">
        <MyMap/>
        </div>

        <a className="btn btn-es fw-bold px-3 w-50 mx-auto mt-4" href="#home">ثبت آگهی</a>




    </Form>
     );
}
 
export default NewsForm;