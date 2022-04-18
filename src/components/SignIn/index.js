import { Container, Row,Col,Form } from "react-bootstrap";
import Title from './../../microComponents/Title';
import './signIn.css'
import {Tabs,Tab} from "react-bootstrap";
import { useState } from 'react';
import AdvisorRegistration from './AdvisorRegistration';
import RealStateRegistration from "./RealStateRegistration";


const SignIn = () => {
    const [key, setKey] = useState('home');

    return ( 
        <Container className="pt-5 mt-5 pb-4">
            <Row className="justify-content-center">
                <Col sm={12} md={9}>
                <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
            <Tab eventKey="home" title="ثبت نام کاربر">
                <div className="shadow-es rounded-3 py-3 px-3 mt-5  text-center title-text">
                      <Title title="ورود"/>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                        <Form className='signIn-form mb-5'>
                            <Form.Control className="w-100 shadow-es py-2 my-4 border-0" type="text" placeholder="شماره همراه خود را وارد نمایید" />
                            <button className="btn fw-bold btn-border mb-lg-0 mt-lg-0 mt-4 mb-4 px-5  " href="#">وارد کردن شماره </button>

                            
                            <Form.Control className="w-100 shadow-es py-2 my-4 border-0" type="text" placeholder="کد تایید 5 رقمی را وارد نمایید" />
                            <button className="btn fw-bold btn btn-es mb-lg-0 mt-lg-0 mt-4 mb-4 px-5  " href="#">ورود </button>

                            
                        </Form>
                        </div>
                    </div>
            </Tab>

            <Tab eventKey="moshaverAmlak" title="ثبت نام مشاور املاک">
                    <AdvisorRegistration/>
            </Tab>

            <Tab eventKey="amlak" title="ثبت نام املاکی">
                    <RealStateRegistration/>
            </Tab>
           
            </Tabs>
                </Col>
            </Row>
        </Container>



         

     );
}
 
export default SignIn;