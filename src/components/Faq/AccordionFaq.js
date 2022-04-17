import { Accordion } from "react-bootstrap";
import './faq.css'

const AccordionFaq = ({number,title,discription}) => {
    return ( 
        <Accordion.Item eventKey={number} >
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
         {discription}
        </Accordion.Body>
      </Accordion.Item>
     );
}
 
export default AccordionFaq;