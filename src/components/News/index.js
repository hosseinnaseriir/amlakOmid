import SingleSelect from "../SingleSelect";
import { Form } from 'react-bootstrap';
import './newsStyle.css'
import MyMap from './../map/Map';
import React, { useState,useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { context } from './../../context/index';
import axios from "axios";
import { NewsApi } from './../../api/index';



const NewsForm = () => {

    const {setShowLoading} = useContext(context);


  const [city, setCity] = useState();
  const [area, setArea] = useState();
  const [type, setType] = useState();
  const [price,setPrice] = useState();
  const [metrage, setMetrage] = useState();
  const [assignmentType, setAssignmentType] = useState();
  const [bedRooms, setBedRooms] = useState();
  const [advertiser, setAdvertiser] = useState();
  const [realStateCode, setRealStateCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [pictures, setPictures] = useState();
  const [lat, setLat] = useState();
  const [lang, setLang] = useState();


  const { register, handleSubmit, watch, formState: { errors } } = useForm();



  async function BtnHandeller(e){
    e.preventDefault();

    try{
        setShowLoading(true)
        const RealStateRegistration = new FormData();
        RealStateRegistration.append('city',city)
        RealStateRegistration.append("area", area);
        RealStateRegistration.append("type", type);
        RealStateRegistration.append("price", price);
        RealStateRegistration.append("metrage", metrage);
        RealStateRegistration.append("assignmentType", assignmentType);
        RealStateRegistration.append("bedRooms", bedRooms);
        RealStateRegistration.append("advertiser", advertiser);
        RealStateRegistration.append("realStateCode", realStateCode);
        RealStateRegistration.append("phoneNumber", phoneNumber);
        RealStateRegistration.append("title", title);
        RealStateRegistration.append("description", description);
        RealStateRegistration.append("pictures", pictures);
        RealStateRegistration.append("lat", 2);
        RealStateRegistration.append("lang", 2);

        const res = await axios({
            method: "post",
            url: NewsApi,
            data: RealStateRegistration,
            headers: { "Content-Type": "multipart/form-data" , 'Authorization':localStorage.getItem('token') },
          });
          if(res.status===201){
            toast.success(res.data.message);
            setShowLoading(false);
          }
    }catch(err){
        if(err?.response?.data){
            err?.response?.data?.errors?.map(issue => toast.error(issue))
        }
        else{
            toast.error('مشکلی پیش آمده است !')
        }
        setShowLoading(false);
    }
  }

  console.log(city,area,type,price,metrage,assignmentType,bedRooms,advertiser,realStateCode,phoneNumber,title,description,pictures)



    return ( 
        <Form  className="Search row newsForm mx-auto flex-column flex-lg-row py-3 mt-5" >
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
        {...register("city" , {
            required:"شهر وارد نشده",
            onChange:(e)=>setCity(e.target.value)
        })}
         />

        <SingleSelect val={[
            "معالی آباد",
            "قصردشت",
            "فرهنگ شهر",
            "تاچارا",
        ]} 
        name="location" 
        title="محدوده"
        {...register("area" , {
            required:"شهر وارد نشده",
            onChange:(e)=>setArea(e.target.value)
        })}


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
        {...register("type" , {
            required:"شهر وارد نشده",
            onChange:(e)=>setType(e.target.value)
        })}

         />
     

        <div>
        <Form.Control 
          {...register("price" , {
            required:"قیمت وارد نشده",
            onChange:(e)=>setPrice(e.target.value)
        })}
        className="input-form shadow-es border-0 mb-3" type="text" placeholder="قیمت" />
      
        </div>


        <div>
        <Form.Control
          {...register("metrage" , {
            required:"متراژ وارد نشده",
            onChange:(e)=>setMetrage(e.target.value)
        })}
        className="input-form shadow-es border-0 mb-3" type="text" placeholder="متراژ" />
      
        </div>


     
        <SingleSelect val={[
            "45",
            "50",
            "60",
            "65",
        ]} 
        name="assignment" 
        title="نوع واگذاری"
         {...register("assignmentType" , {
            required:"شهر وارد نشده",
            onChange:(e)=>setAssignmentType(e.target.value)
        })}
       />
        <SingleSelect val={[
            "1",
            "2",
            "3",
            "4",
        ]} 
        name="room" 
        title="تعداد خواب"
        {...register("bedRooms" , {
            required:"شهر وارد نشده",
            onChange:(e)=>setBedRooms(e.target.value)
        })}
         />
         
         <SingleSelect val={[
            "1",
            "2",
            "3",
            "4",
        ]} 
        name="user" 
        title="آگهی دهنده"
        {...register("advertiser" , {
            required:"شهر وارد نشده",
            onChange:(e)=>setAdvertiser(e.target.value)
        })}
         />

<SingleSelect val={[
            "1",
            "2",
            "3",
            "4",
        ]} 
        name="amlak" 
        title="کدمشاور املاک"
        {...register("realStateCode" , {
            required:"شهر وارد نشده",
            onChange:(e)=>setRealStateCode(e.target.value)
        })}
         />


         
        <div>
        <Form.Control
        {...register("phoneNumber" , {
            required:"شماره تماس وارد نشده",
            onChange:(e)=>setPhoneNumber(e.target.value)
        })}
        className="input-form shadow-es border-0 mb-3" type="text" placeholder="شماره تماس" />
        </div>


        <div>
        <Form.Control
        {...register("Title" , {
            required:"عنوان آگهی وارد نشده",
            onChange:(e)=>setTitle(e.target.value)
        })}
        className="input-form shadow-es border-0 mb-3" type="text" placeholder="عنوان آگهی" />
        </div>

        <div>
        <Form.Control
        {...register("description" , {
            required:"توضیحات آگهی وارد نشده",
            onChange:(e)=>setDescription(e.target.value)
        })}
        as="textarea" className='news-textArea shadow-es border-0 mb-3 f-16 pr-5' placeholder='توضیحات آگهی' rows={5}/>
        </div>


        <Form.Group 
                className="w-45 my-4 position-relative"
                controlId="formBasicEmail">
                <Form.Control
                    className=' shadow-es py-2 border-0 '
                    type="file"
                    placeholder="افزودن عکس کارت ملی"
                    {...register("pictures" , {
                      required:" عکس کارت ملی وارد نشده است",
                      onChange:(e)=>setPictures(e.target.files[0])
                  })}
                  />
                <Form.Text className="text-warning form-validate position-absolute ">
                  {errors?.pictures?.message}
                </Form.Text>
             </Form.Group>

        <div className="mt-5">
        <MyMap/>
        </div>

        <button onClick={(e)=>BtnHandeller(e)} className="btn btn-es fw-bold px-3 w-50 mx-auto mt-4" href="#home">ثبت آگهی</button>




    </Form>
     );
}
 
export default NewsForm;