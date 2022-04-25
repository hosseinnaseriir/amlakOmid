import { Navbar,Container,Nav,Row,Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
function Header() {
  return (
    <div className="Header position-fixed w-100">
        <Navbar className='dir-l shadow-sm ' bg="white" expand="lg">
          <Container fluid>
            <Link className="btn btn-es fw-bold px-5" to="/news">ثبت آگهی</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                  <Container fluid className='pt-2'>
                      <Row>
                          <Col lg={4} className='ps-2 d-lg-block d-flex flex-column align-items-center'>
                            <Link className="btn fw-bold btn-border col-lg-5 col-md-3 col-sm-4  col-5 mb-lg-0 mt-lg-0 mt-4 mb-4" to="/signin">ورود/ثبت نام</Link>
                            {/* <a className="btn fw-bold btn-border  col-lg-5 col-md-3 col-sm-4 col-5 ms-lg-2 mb-lg-0 mb-2" href="#">ورود کاربر</a> */}
                          </Col>
                          <Col lg={6} >
                            <Nav defaultActiveKey="/home" className='dir-r pe-0 text-center' as="ul">
                              <Nav.Item as="li">
                                <Nav.Link href="/home">خرید</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">رهن و اجاره</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">مشاورین املاک</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">مزایده</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">مناقصه</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">بلاگ</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                          <Col sm className='dir-r pt-1  fw-bold h3 text-center'>
                            <Link to="/" className='text-decoration-none text-es'>Amlak Omid</Link>
                          </Col>
                        </Row>
                  </Container>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}

export default Header;



