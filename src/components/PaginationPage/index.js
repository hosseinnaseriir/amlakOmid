import { Pagination } from "react-bootstrap";
import './PaginationPage.css'




let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} 
    // active={number === active}
    >
      {number}
    </Pagination.Item>,
  );
}

const PaginationPage = () => {
    return ( 
                
         
                         <Pagination>{items}</Pagination>
         
     );
}
 
export default PaginationPage;