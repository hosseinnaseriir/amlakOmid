import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AdvisorRegistreApi } from "../../api";
import Title from "./../../microComponents/Title";
import "./signIn.css";
import { ToastContainer, toast } from "react-toastify";

const AdvisorRegistration = () => {
  const [name, setName] = useState();
  function nameHandeller(e) {
    setName(e.target.value);
  }

  const [lastName, setLastName] = useState();
  function lastNameHandeller(e) {
    setLastName(e.target.value);
  }

  const [phone, setPhone] = useState();
  function phoneHandeller(e) {
    // console.log(e.target.value)
    setPhone(e.target.value);
  }

  const [id, setId] = useState();
  function idHandeller(e) {
    // console.log(e.target.value)
    setId(e.target.value);
  }

  const [address, setaddress] = useState();
  function addressHandeller(e) {
    // console.log(e.target.value)
    setaddress(e.target.value);
  }

  const [pic, setPic] = useState();
  function pichandeller(e) {
    console.log(e.target.files[0]);
    setPic(e.target.files[0]);
  }

  async function BtnHandeller(e) {
    try {
      e.preventDefault();

      const AdvisorRegistration = new FormData();
      AdvisorRegistration.append("name", name);
      AdvisorRegistration.append("family", lastName);
      AdvisorRegistration.append("phoneNumber", phone);
      AdvisorRegistration.append("address", address);
      AdvisorRegistration.append("nationalCode", id);
      AdvisorRegistration.append("passport", pic);

      const res = await axios({
        method: "post",
        url: AdvisorRegistreApi,
        data: AdvisorRegistration,
        headers: { "Content-Type": "multipart/form-data" },
      });

      // const res = await axios.post(AdvisorRegistreApi,AdvisorRegistration)
      if (res.status === 201) {
        toast.success("حساب شما با موفقیت ساخته شد");
      }
    } catch (err) {
      toast.error("مشکلی پیش آمده است!");
    }
  }

  return (
    <div className="shadow-es rounded-3 py-3 px-3 mt-5  text-center title-text">
      <Title title="ثبت نام مشاور املاک" />
      <div className="d-flex justify-content-center  align-items-center">
        <Form className="mb-5">
          <div className="signIn-form d-flex flex-wrap justify-content-between ">
            <Form.Control
              onChange={nameHandeller}
              className="w-45 shadow-es py-2 my-4 border-0"
              type="text"
              placeholder="نام"
            />
            <Form.Control
              onChange={lastNameHandeller}
              className="w-45 shadow-es py-2 my-4 border-0"
              type="text"
              placeholder="نام خانوادگی"
            />

            <Form.Control
              onChange={phoneHandeller}
              className="w-45 shadow-es py-2 my-4 border-0"
              type="text"
              placeholder="شماره تماس"
            />
            <Form.Control
              onChange={idHandeller}
              className="w-45 shadow-es py-2 my-4 border-0"
              type="text"
              placeholder="کد ملی"
            />

            <Form.Control
              onChange={addressHandeller}
              className="w-100 shadow-es py-2 my-4 border-0"
              type="text"
              placeholder="آدرس"
            />
            <Form.Control
              onChange={pichandeller}
              className="w-45 shadow-es py-2 my-4 border-0"
              type="file"
              placeholder="افزودن عکس کارت ملی"
            />
          </div>

          <button
            onClick={(e) => BtnHandeller(e)}
            className="btn fw-bold btn btn-es mb-lg-0 mt-lg-0 mt-4 mb-4 px-5  "
            href="#"
          >
            ثبت نام{" "}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AdvisorRegistration;
