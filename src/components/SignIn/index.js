import { Container, Row,Col,Form } from "react-bootstrap";
import Title from './../../microComponents/Title';
import './signIn.css'
import {Tabs,Tab} from "react-bootstrap";
import { useState } from 'react';
import AdvisorRegistration from './AdvisorRegistration';
import RealStateRegistration from "./RealStateRegistration";
import Login from './Login';


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
               <Login/>
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