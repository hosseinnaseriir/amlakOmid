import {ListGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
function List({lists}) { 
  return (
        <ListGroup className='List border-0'>
            {lists.map((list)=>(
                <ListGroup.Item className='border-0 bg-transparent'>
                  <Link to={list.href} className='text-decoration-none text-dark'>{list.title}</Link>
                  </ListGroup.Item>
            ))}
        </ListGroup>
  );
}

export default List;