import { Container, Row,Col,Form } from "react-bootstrap";
import Title from './../../microComponents/Title';
import './signIn.css'
import React , { useState ,useContext} from 'react';
import axios from 'axios';
import { PhoneNamberApi } from "../../api";
import { toast } from 'react-toastify';
import { context } from "../../context";
import { VerifyPhoneNumberApi } from './../../api/index';



const  Login= () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [verifyPhoneNumber, setVerifyPhoneNumber] = useState();
    

    const {setShowLoading} = useContext(context);
///Phone Btn
const phoneNumberHandeller = async (e)=>{

    e.preventDefault();
    setShowLoading(true);

    try {
      const res= await axios.post(PhoneNamberApi,{phoneNumber})
      if(res.status===200){
        toast.success(res.data.message);
        setShowLoading(false);
      }
    } catch (err) {
        if(err?.response?.data){
            err?.response?.data?.errors?.map(issue => toast.error(issue))
        }
        else{
            toast.error('مشکلی پیش آمده است !')
        }
        setShowLoading(false);
    }
    
}
//////Code Btn
const verifyPhoneCodeHandeller= async(e)=>{
    e.preventDefault();
    setShowLoading(true);

    try {
      const res= await axios.post(VerifyPhoneNumberApi,{phoneNumber:phoneNumber ,otp:verifyPhoneNumber })
      if(res.status===200){
        // toast.success(res.data.message);
        console.log(res.data)
        setShowLoading(false);
      }
        
    } catch (err) {
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
        <Title title="ورود"/>
          <div className="d-flex justify-content-center flex-column align-items-center">
          <Form className='signIn-form mb-5'>
              <Form.Control onChange={(e)=>setPhoneNumber(e.target.value)} className="w-100 shadow-es py-2 my-4 border-0" type="text" placeholder="شماره همراه خود را وارد نمایید" />
              <button
              onClick={(e)=>phoneNumberHandeller(e)}
              className="btn fw-bold btn-border mb-lg-0 mt-lg-0 mt-4 mb-4 px-5  " href="#">وارد کردن شماره </button>

              
              <Form.Control onChange={(e)=>setVerifyPhoneNumber(e.target.value)}  className="w-100 shadow-es py-2 my-4 border-0" type="text" placeholder="کد تایید 5 رقمی را وارد نمایید" />
              <button onClick={(e)=>verifyPhoneCodeHandeller(e)} className="btn fw-bold btn btn-es mb-lg-0 mt-lg-0 mt-4 mb-4 px-5  " href="#">ورود </button>

              
          </Form>
          </div>
      </div>
     );
}
 
export default Login;