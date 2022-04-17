import { Breadcrumb } from 'react-bootstrap';
import './breadCrumb.css'


const BreadcrumbPage = ({activePage,firstPage,secondPage,}) => {
    return ( 

    <Breadcrumb>
        <Breadcrumb.Item href="#">{firstPage}</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
            {secondPage}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{{activePage}}</Breadcrumb.Item>
    </Breadcrumb>

     );
}
 
export default BreadcrumbPage;