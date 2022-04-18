import axios from "axios";
import React, { useState,useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AdvisorRegistreApi } from "../../api";
import Title from "./../../microComponents/Title";
import "./signIn.css";
import { ToastContainer, toast } from "react-toastify";
import { context } from './../../context/index';
import { useForm } from "react-hook-form";
import { RealStateRegistrationApi } from './../../api/index';

const RealStateRegistration = () => {

    ///context
    const {setShowLoading} = useContext(context);

   //state
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [id, setId] = useState();
  const [address, setaddress] = useState();
  const [pic, setPic] = useState();
  const [parvaneKasb, setParvaneKasb] = useState();
  
  //controllers
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

 async function BtnHandeller(){
    try{
        setShowLoading()
        const RealStateRegistration = new FormData();
        RealStateRegistration.append('name',name)
        RealStateRegistration.append("family", lastName);
        RealStateRegistration.append("phoneNumber", phone);
        RealStateRegistration.append("address", address);
        RealStateRegistration.append("nationalCode", id);
        RealStateRegistration.append("passport", pic);
        RealStateRegistration.append("certificate", parvaneKasb);
        RealStateRegistration.append("lat", 2);
        RealStateRegistration.append("lon", 2);

        const res = await axios({
            method: "post",
            url: RealStateRegistrationApi,
            data: RealStateRegistration,
            headers: { "Content-Type": "multipart/form-data" },
          });
          if(res.status===201){
            toast.success("حساب شما با موفقیت ساخته شد");
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

    return ( 
        <div className="shadow-es rounded-3 py-3 px-3 mt-5  text-center title-text">
           
        <Title title="ثبت نام املاکی" />

        <p className="py-3 px-md-5 px-3 mt-5  text-justify ">در این حالت صاحب مشاور املاک میتواند بدون محدودیت آگهی عادی و فروش ویژه اضافه کند
هزینه دریافت اکانت مشاور ماهیانه دویست و پنجاه هزار تومان میباشد</p>

        <div className="d-flex justify-content-center  align-items-center">
          <Form onSubmit={handleSubmit(BtnHandeller)} className="mb-5">
            <div className="signIn-form d-flex flex-wrap justify-content-between ">
            <Form.Group 
                className="w-45 my-4 position-relative"
                controlId="formBasicEmail">
                    <Form.Control
                    className=' shadow-es py-2 border-0 '
                    type="text"
                    placeholder="نام"
                    {...register("name" , {
                        required:"نام وارد نشده",
                        onChange:(e)=>setName(e.target.value)
                    })}
                    />
              <Form.Text className="text-warning form-validate position-absolute ">
                {errors?.name?.message}
              </Form.Text>
             </Form.Group>
  
               <Form.Group 
                className="w-45 my-4 position-relative"
                controlId="formBasicEmail">
                 <Form.Control
                    className=' shadow-es py-2 border-0 '
                    type="text"
                    placeholder="نام خانوادگی"
                    {...register("family" , {
                      required:"نام خانوادگی وارد نشده",
                    onChange:(e)=>setLastName(e.target.value)

                  })}
                />
                  <Form.Text className="text-warning form-validate position-absolute ">
                    {errors?.family?.message}
                  </Form.Text>
             </Form.Group>


             <Form.Group 
                className="w-45 my-4 position-relative"
                controlId="formBasicEmail">
                      <Form.Control
                    className=' shadow-es py-2 border-0 '
                    type="tel"
                    placeholder="شماره تماس"
                    {...register("phone" , {
                      // required:" شماره تماس وارد نشده است",
                    onChange:(e)=>setPhone(e.target.value)

                  })}
                  />
                  <Form.Text className="text-warning form-validate position-absolute ">
                    {errors?.phone?.message}
                  </Form.Text>
             </Form.Group>


             <Form.Group 
                className="w-45 my-4 position-relative"
                controlId="formBasicEmail">
                  <Form.Control
                  className=' shadow-es py-2 border-0 '
                  type="text"
                  placeholder="کد ملی"
                  {...register("id" , {
                    required:"کد ملی وارد نشده است",
                  onChange:(e)=> setId(e.target.value)

                })}
                />
                  <Form.Text className="text-warning form-validate position-absolute ">
                    {errors?.id?.message}
                  </Form.Text>
             </Form.Group>


             <Form.Group 
                className="w-100 my-4 position-relative"
                controlId="formBasicEmail">
                <Form.Control
                  className=' shadow-es py-2 border-0 '
                  type="text"
                  placeholder="آدرس"
                  {...register("address" , {
                    required:"آدرس وارد نشده است",
                  onChange:(e)=>setaddress(e.target.value)

                })}
                />
                  <Form.Text className="text-warning form-validate position-absolute ">
                    {errors?.address?.message}
                  </Form.Text>
             </Form.Group>


             <Form.Group 
                className="w-45 my-4 position-relative"
                controlId="formBasicEmail">
                <Form.Control
                    className=' shadow-es py-2 border-0 '
                    type="file"
                    placeholder="افزودن عکس کارت ملی"
                    {...register("pic" , {
                      required:" عکس کارت ملی وارد نشده است",
                      onChange:(e)=>setPic(e.target.files[0])
                  })}
                  />
                <Form.Text className="text-warning form-validate position-absolute ">
                  {errors?.pic?.message}
                </Form.Text>
             </Form.Group>

             <Form.Group 
                className="w-45 my-4 position-relative"
                controlId="formBasicEmail">
                <Form.Control
                    className=' shadow-es py-2 border-0 '
                    type="file"
                    placeholder="افزودن تصویر پروانه کسب"
                    {...register("parvaneKasb" , {
                      required:" تصویر پروانه کسب وارد نشده است",
                      onChange:(e)=>setParvaneKasb(e.target.files[0])
                  })}
                  />
                <Form.Text className="text-warning form-validate position-absolute ">
                  {errors?.parvaneKasb?.message}
                </Form.Text>
             </Form.Group>
             
            </div>
  
            <button
              className="btn fw-bold btn btn-es mb-lg-0 mt-lg-0 mt-4 mb-4 px-5  "
              href="#"
            >
              ثبت نام{" "}
            </button>
          </Form>
        </div>
      </div>
     );
}
 
export default RealStateRegistration;